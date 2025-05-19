import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, UseFormReturn, useForm } from 'react-hook-form';
import { z } from 'zod';

import { InputGroup } from '@/components/molecules/InputGroup/InputGroup';

export const invoiceFormSchema = z.object({
  companyName: z
    .string({ required_error: 'Vui lòng nhập tên công ty' })
    .min(1, 'Vui lòng nhập tên công ty'),
  email: z
    .string({ required_error: 'Vui lòng nhập email' })
    .min(1, 'Vui lòng nhập email')
    .email('Email không hợp lệ'),
  taxCode: z
    .string({ required_error: 'Vui lòng nhập mã số thuế' })
    .min(1, 'Vui lòng nhập mã số thuế'),
  address: z.string({ required_error: 'Vui lòng nhập địa chỉ' }).min(1, 'Vui lòng nhập địa chỉ')
});

export type InvoiceForm = z.infer<typeof invoiceFormSchema>;

type InvoiceFormProps = {
  readonly?: boolean;
  formObject?: UseFormReturn<InvoiceForm>;
};

export const InvoiceForm = ({ readonly = false, formObject }: InvoiceFormProps) => {
  const localForm = useForm<InvoiceForm>({
    mode: 'onChange',
    resolver: zodResolver(invoiceFormSchema)
  });

  const form = formObject || localForm;

  const {
    control,
    formState: { errors }
  } = form;

  return (
    <form className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          control={control}
          name="taxCode"
          render={({ field }) => (
            <InputGroup
              id="taxCode"
              label="Mã số thuế"
              required
              placeholder="1234567890"
              {...field}
              type="number"
              errorMessage={errors.taxCode?.message}
              disabled={readonly}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <InputGroup
              id="email"
              label="Email"
              required
              placeholder="example@gmail.com"
              {...field}
              type="email"
              errorMessage={errors.email?.message}
              disabled={readonly}
            />
          )}
        />

        <Controller
          control={control}
          name="companyName"
          render={({ field }) => (
            <InputGroup
              id="name"
              label="Tên công ty"
              required
              placeholder="Công ty TNHH A"
              {...field}
              errorMessage={errors.companyName?.message}
              disabled={readonly}
            />
          )}
        />

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <InputGroup
              id="address"
              label="Địa chỉ công ty"
              required
              placeholder="123 Nguyễn Văn A, Hà Nội"
              {...field}
              errorMessage={errors.address?.message}
              disabled={readonly}
            />
          )}
        />
      </div>
    </form>
  );
};
