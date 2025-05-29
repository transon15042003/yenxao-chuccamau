'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReCaptcha } from 'next-recaptcha-v3';
import { HTMLAttributes, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { sendMail } from 'src/services/mail.service';
import { z } from 'zod';

import { AreaInputGroup } from '@/components/atoms/AreaInputGroup';
import { Button } from '@/components/atoms/Button';
import { InputGroup } from '@/components/molecules/InputGroup';

import { shippingInfomationFormSchema } from '../ShippingInformationForm';

const inboxFormSchema = shippingInfomationFormSchema
  .pick({
    name: true,
    email: true,
    phone: true
  })
  .extend({
    name: z
      .string({ required_error: 'Họ và tên không được để trống' })
      .trim()
      .nonempty({ message: 'Họ và tên không được để trống' }),
    email: z
      .string({ required_error: 'Email không được để trống' })
      .trim()
      .nonempty({ message: 'Email không được để trống' })
      .email({ message: 'Email không hợp lệ' }),
    subject: z.string().optional(),
    message: z.string().trim().nonempty({ message: 'Vui lòng nhập nội dung tin nhắn' })
  });

type InboxFormValues = z.infer<typeof inboxFormSchema>;

type InboxProps = HTMLAttributes<HTMLElement> & {
  className?: string;
  setIsLoading: (isLoading: boolean) => void;
};

export const ContactForm = ({ className, setIsLoading, ...props }: InboxProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InboxFormValues>({
    resolver: zodResolver(inboxFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const [token, setToken] = useState<string | null>(null);

  const validateRecaptchaAndSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      if (!token) {
        toast.error('Vui lòng xác thực reCAPTCHA');

        return;
      }

      await handleSubmit(onSubmit)();
    } catch (error) {
      console.error('Lỗi khi gửi tin nhắn:', error);
    }
  };

  const onSubmit = async (data: InboxFormValues) => {
    setIsLoading(true);

    if (data.message) {
      try {
        const emailSubject = data.subject || 'Tin nhắn liên hệ mới từ website';
        const emailBodyHtml = `
            <p><strong>Họ và tên:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Số điện thoại:</strong> ${data.phone}</p>
            ${data.subject ? `<p><strong>Tiêu đề:</strong> ${data.subject}</p>` : ''}
            <p><strong>Nội dung:</strong><br/>${data.message ? data.message.replace(/\n/g, '<br/>') : 'Không có nội dung'}</p>
          `;

        await sendMail({
          subject: emailSubject,
          html: emailBodyHtml,
          fromName: data.name || 'Khách liên hệ'
        });

        toast.success(
          <div className="px-4 py-2">
            <h4 className="font-bold ">Yêu cầu đã được gửi!</h4>
            <p>
              Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>
          </div>
        );
        reset();
      } catch (error) {
        console.error('Lỗi khi gửi tin nhắn:', error);
        toast.error(
          <div className="px-4 py-2">
            <h4 className="font-bold">Lỗi khi gửi email!</h4>
            <p>Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.</p>
          </div>
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <form className={className} {...props} onSubmit={validateRecaptchaAndSubmit} noValidate>
      <p id="inbox" className="w-full font-semibold text-3xl text-[#2A3140] mb-4">
        Gửi tin nhắn liên hệ
      </p>

      <div className="flex flex-wrap -mx-2 mb-8">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <InputGroup
                id="name"
                label="Họ và tên"
                required
                placeholder="Nguyen Van A"
                {...field}
                errorMessage={errors.name?.message}
                inputClassName="bg-transparent"
                labelClassName="font-medium text-sm text-[#344054]"
              />
            )}
          />
        </div>

        <div className="w-full md:w-1/2 px-2 mb-2">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <InputGroup
                id="email"
                label="Email"
                required
                type="email"
                placeholder="example@gmail.com"
                {...field}
                errorMessage={errors.email?.message}
                inputClassName="bg-transparent"
                labelClassName="font-medium text-sm text-[#344054]"
              />
            )}
          />
        </div>

        <div className="w-full px-2 mb-2">
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <InputGroup
                id="phone"
                label="Số điện thoại"
                required
                placeholder="0986123456"
                {...field}
                type="number"
                errorMessage={errors.phone?.message}
                inputClassName="bg-transparent"
                labelClassName="font-medium text-sm text-[#344054]"
              />
            )}
          />
        </div>

        <div className="w-full px-2 mb-2">
          <Controller
            control={control}
            name="subject"
            render={({ field }) => (
              <InputGroup
                id="subject"
                label="Tiêu đề"
                placeholder="Nhập tiêu đề tin nhắn của bạn"
                {...field}
                type="text"
                errorMessage={errors.subject?.message}
                inputClassName="bg-transparent"
                labelClassName="font-medium text-sm text-[#344054]"
              />
            )}
          />
        </div>

        <div className="w-full px-2 mb-2">
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <AreaInputGroup
                id="message"
                label="Nội dung"
                placeholder="Nhập nội dung tin nhắn chi tiết..."
                required
                {...field}
                line={2}
                errorMessage={errors.message?.message}
                textareaClassName="bg-transparent"
                labelClassName="font-medium text-sm text-[#344054]"
              />
            )}
          />
        </div>
      </div>

      <div>
        <ReCaptcha onValidate={setToken} action="page_view" />
      </div>

      <Button
        className="w-full normal-case text-xl font-medium py-[13px]"
        type="submit"
        disabled={!token}
      >
        Gửi tin nhắn
      </Button>
    </form>
  );
};
