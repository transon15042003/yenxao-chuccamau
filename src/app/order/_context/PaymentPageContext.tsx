'use client';

import { CartItem } from '@/types/cart';
import { Order, ShippingMethod } from '@/types/order';
import { PaymentGateway } from '@/types/payment';
import { zodResolver } from '@hookform/resolvers/zod';
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';
import { toast } from 'react-toastify';

import { InvoiceForm, invoiceFormSchema } from '@/components/organisms/InvoiceForm';
import {
  shippingInfomationFormSchema,
  ShippingInfomationForm
} from '@/components/organisms/ShippingInformationForm';
import { useCart } from '@/components/providers/CartProvider/CartProvider';

import { initiatePaymentSession, listCartOptions, setAddresses, updateCart } from '@/lib/data/cart';
import { setShippingMethod as setCartShippingMethod } from '@/lib/data/cart';
import { placeOrder as placeOrderFromCart } from '@/lib/data/cart';
// import { listCartPaymentMethods } from '@/lib/data/payment';
import { transfromCartShippingInfo } from '@/lib/medusa-adapter/cart';

type ContextType = {
  isSubmitting: boolean;
  paymentMethod: PaymentGateway | 'COD';
  setPaymentMethod: Dispatch<SetStateAction<PaymentGateway | 'COD'>>;
  shippingInfoForm: UseFormReturn<ShippingInfomationForm>;
  invoiceForm: UseFormReturn<InvoiceForm>;
  isUseInvoiceForm: boolean;
  setIsUseInvoiceForm: Dispatch<SetStateAction<boolean>>;
  isUseNoteForm: boolean;
  setIsUseNoteForm: Dispatch<SetStateAction<boolean>>;
  orderNote?: string;
  setOrderNote: Dispatch<SetStateAction<string | undefined>>;
  placeOrder: (items: CartItem[]) => Promise<void>;
  shippingMethod: ShippingMethod;
  setShippingMethod: Dispatch<SetStateAction<ShippingMethod>>;
};
const Context = createContext<ContextType>({
  isSubmitting: false,
  paymentMethod: 'COD',
  setPaymentMethod: () => {},
  shippingInfoForm: {} as UseFormReturn<ShippingInfomationForm>,
  invoiceForm: {} as UseFormReturn<InvoiceForm>,
  isUseInvoiceForm: false,
  setIsUseInvoiceForm: () => {},
  isUseNoteForm: false,
  setIsUseNoteForm: () => {},
  orderNote: undefined,
  setOrderNote: () => {},
  placeOrder: () => Promise.resolve(),
  shippingMethod: 'STANDARD',
  setShippingMethod: () => {}
});

const initOrder: Order = {
  code: crypto.randomUUID(),
  status: 'pending',
  items: [],
  customer: {
    name: '',
    phone: '',
    address: ''
  },
  paymentStatus: 'pending',
  shippingMethod: 'STANDARD',
  orderAt: new Date()
};

const PaymentPageProvider = ({ children }: PropsWithChildren) => {
  const { cart, originalCart } = useCart();
  const [submitting, setSubmitting] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState<PaymentGateway | 'COD'>('COD');
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('STANDARD');
  const shippingInfoForm = useForm<ShippingInfomationForm>({
    mode: 'onChange',
    resolver: zodResolver(shippingInfomationFormSchema)
  });

  const invoiceForm = useForm<InvoiceForm>({
    mode: 'onChange',
    resolver: zodResolver(invoiceFormSchema)
  });

  const [isUseInvoiceForm, setIsUseInvoiceForm] = useState(false);
  const [isUseNoteForm, setIsUseNoteForm] = useState(false);
  const [orderNote, setOrderNote] = useState<string | undefined>(undefined);

  const getFormDataBySubmit = async <T extends FieldValues>(form: UseFormReturn<T>) => {
    return new Promise<T | null>((resolve) => {
      form.handleSubmit(
        (data) => {
          resolve(data);
        },
        () => resolve(null)
      )();
    });
  };

  const placeOrder = async (items: CartItem[]) => {
    setSubmitting(true);
    try {
      const order: Order = {
        ...initOrder,
        items,
        shippingMethod
      };

      const shippingInfo = await getFormDataBySubmit(shippingInfoForm);
      if (!shippingInfo) {
        throw new Error('Shipping info is required');
      }

      order.customer = {
        name: shippingInfo.name,
        phone: shippingInfo.phone,
        email: shippingInfo.email,
        address: shippingInfo.address,
        province: shippingInfo.province,
        district: shippingInfo.district
      };

      if (isUseInvoiceForm) {
        const invoiceInfo = await getFormDataBySubmit(invoiceForm);
        if (!invoiceInfo) {
          throw new Error('Invoice info is required');
        }

        order.invoice = {
          name: invoiceInfo.companyName,
          email: invoiceInfo.email,
          taxCode: invoiceInfo.taxCode,
          address: invoiceInfo.address
        };
      }

      if (isUseNoteForm) {
        order.note = orderNote;
      }

      // 1. update cart customer
      const shippingAddressFormData = transfromCartShippingInfo(order.customer);
      await setAddresses({}, shippingAddressFormData);

      // 2. save cart metadata
      let cartMetadata: Record<string, string | undefined> = {
        payment_method: paymentMethod,
        shipping_method: shippingMethod
      };
      if (isUseInvoiceForm) {
        cartMetadata = {
          ...cartMetadata,
          invoice_name: order.invoice?.name,
          invoice_email: order.invoice?.email,
          invoice_tax_code: order.invoice?.taxCode,
          invoice_address: order.invoice?.address
        };
      }
      if (isUseNoteForm) {
        cartMetadata = {
          ...cartMetadata,
          note: order.note
        };
      }
      await updateCart({
        metadata: cartMetadata
      });

      // 3. update cart shipping
      const shippingOptionsResult = await listCartOptions();
      if (!shippingOptionsResult || shippingOptionsResult.shipping_options.length === 0) {
        toast.error('Vui lòng chọn phương thức vận chuyển');
      }

      const cartShippingMethod = shippingOptionsResult.shipping_options[0];
      await setCartShippingMethod({
        cartId: cart.id!,
        shippingMethodId: cartShippingMethod.id
      });

      // 4.update cart payment method
      if (originalCart) {
        // const paymentMethods = await listCartPaymentMethods(originalCart?.region?.id ?? '');
        await initiatePaymentSession(originalCart, {
          provider_id: 'pp_system_default'
        });
      }

      // 5. create order
      await placeOrderFromCart(cart.id!);

      localStorage.setItem('order', JSON.stringify(order));
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isUseInvoiceForm) {
      invoiceForm.clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUseInvoiceForm]);

  return (
    <Context.Provider
      value={{
        isSubmitting: submitting,
        paymentMethod,
        setPaymentMethod,
        shippingInfoForm,
        invoiceForm,
        isUseInvoiceForm,
        setIsUseInvoiceForm,
        isUseNoteForm,
        setIsUseNoteForm,
        orderNote,
        setOrderNote,
        placeOrder,
        shippingMethod,
        setShippingMethod
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePaymentPageProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('usePaymentPageProvider must be used within a PaymentPageProvider');
  }

  return context;
};

export default PaymentPageProvider;
