import { HTMLInputTypeAttribute } from 'react';

export const FormInput = ({
  type,
  placeholder
}: {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}) => (
  <input
    className={`w-full focus:outline-none px-4 py-3 mb-1.5 rounded-lg border-2 border-[#424B5A] bg-transparent`}
    type={type}
    name=""
    id=""
    placeholder={placeholder}
  />
);
