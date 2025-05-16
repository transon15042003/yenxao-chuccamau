import { HTMLInputTypeAttribute } from 'react';

import { FormInput } from '@/components/atoms/FormInput';
import { FormLabel } from '@/components/atoms/FormLabel';
import { FormTextArea } from '@/components/atoms/FormTextArea';

type FormFieldProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  line?: number;
  className?: string;
};

export const FormField = (props: FormFieldProps) => {
  const shouldRenderTextarea = props.line !== undefined && props.line > 1;

  return (
    <div className={props.className}>
      <FormLabel label={props.label} required={props.required} />
      {shouldRenderTextarea ? (
        <FormTextArea line={props.line || undefined} />
      ) : (
        <FormInput type={props.type} />
      )}
    </div>
  );
};
