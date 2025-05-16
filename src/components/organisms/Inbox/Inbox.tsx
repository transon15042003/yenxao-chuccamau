import { HTMLAttributes } from 'react';

import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';

type InboxProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export const Inbox = ({ className, ...props }: InboxProps) => (
  <form action="/" method="post" className={className} {...props}>
    <p className="w-full font-semibold text-3xl text-[#2A3140] mb-4">Gửi tin nhắn cho tôi</p>

    <div className="flex flex-wrap -mx-2 mb-8">
      <div className="w-full md:w-1/2 px-2">
        <FormField label="Họ và tên" required={true} type="text" />
      </div>

      <div className="w-full md:w-1/2 px-2">
        <FormField label="Email" required={true} type="email" />
      </div>

      <div className="w-full px-2">
        <FormField label="Số điện thoại" required={true} type="tel" />
      </div>

      <div className="w-full px-2">
        <FormField label="Tiêu đề" required={false} type="text" />
      </div>

      <div className="w-full px-2">
        <FormField label="Nội dung" required={false} type="text" line={10} />
      </div>
    </div>

    <Button
      className="w-full uppercase text-xl font-bold py-[13px]"
      // onClick={handleCheckout}
    >
      Gửi tin nhắn
    </Button>
  </form>
);
