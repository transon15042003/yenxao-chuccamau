'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { HTMLAttributes } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { sendMail } from 'src/services/mail.service';
import { z } from 'zod';

import { Button } from '@/components/atoms/Button';
import { FormTextArea } from '@/components/atoms/FormTextArea';
import { InputGroup } from '@/components/molecules/InputGroup';

import { shippingInfomationFormSchema } from '../ShippingInformationForm';

const inboxFormSchema = shippingInfomationFormSchema
  .pick({
    name: true,
    email: true,
    phone: true
  })
  .extend({
    subject: z.string().optional(),
    message: z.string().optional()
  });

type InboxFormValues = z.infer<typeof inboxFormSchema>;

type InboxProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const Inbox = ({ className, ...props }: InboxProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<InboxFormValues>({
    resolver: zodResolver(inboxFormSchema),
    defaultValues: {
      // Đảm bảo khớp với InboxFormValues
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: InboxFormValues) => {
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
          fromName: data.name || 'Khách liên hệ',
          emailTo: 'khuongvo2105@gmail.com'
        });

        alert('Tin nhắn của bạn đã được gửi thành công!');
        reset();
      } catch (error) {
        console.error('Lỗi khi gửi tin nhắn:', error);
        alert('Đã xảy ra lỗi khi gửi tin nhắn. Vui lòng thử lại sau.');
      }
    }
  };

  return (
    <form className={className} {...props} onSubmit={handleSubmit(onSubmit)}>
      <p id="inbox" className="w-full font-semibold text-3xl text-[#2A3140] mb-4">
        Gửi tin nhắn cho tôi
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
                labelClassName="font-bold text-sm"
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
                labelClassName="font-bold text-sm"
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
                labelClassName="font-bold text-sm"
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
                labelClassName="font-bold text-sm"
              />
            )}
          />
        </div>

        <div className="w-full px-2 mb-2">
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <FormTextArea
                id="subject"
                label="Nội dung"
                placeholder="Nhập nội dung tin nhắn chi tiết..."
                {...field}
                line={10}
                errorMessage={errors.subject?.message}
                textareaClassName="bg-transparent"
                labelClassName="font-bold text-sm"
              />
            )}
          />
        </div>
      </div>

      <Button
        className="w-full uppercase text-xl font-bold py-[13px]"
        // type="submit"
        // onClick={onSubmit}
      >
        Gửi tin nhắn
      </Button>
    </form>
  );
};
