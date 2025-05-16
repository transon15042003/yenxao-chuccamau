'use client';

import { CartItem } from '@/types/cart';
import { Order, ShippingMethod } from '@/types/order';
import { PaymentGateway } from '@/types/payment';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
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

import { InvoiceForm, invoiceFormSchema } from '@/components/organisms/InvoiceForm';
import {
  shippingInfomationFormSchema,
  ShippingInfomationForm
} from '@/components/organisms/ShippingInformationForm';

type ContextType = {
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
  shippingMethod: 'STANDARD'
};

const PaymentPageProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

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

      localStorage.setItem('order', JSON.stringify(order));
      router.push('/order/result');
    } catch (error) {
      console.error(error);
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
