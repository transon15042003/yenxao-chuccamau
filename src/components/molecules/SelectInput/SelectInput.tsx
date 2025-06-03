/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Option } from '@/types/common';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

import { cn } from '@/lib/utils';

type SelectInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  menuWidth?: number;
  controlHeight?: string;
};

export const SelectInput = ({
  options,
  value,
  className,
  label,
  placeholder,
  onChange,
  required,
  disabled,
  errorMessage,
  menuWidth,
  controlHeight = '42px'
}: SelectInputProps) => {
  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value) || null;
  }, [options, value]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#FFF',
      borderWidth: '2px',
      borderColor: '#424B5A',
      borderRadius: '8px',
      boxShadow: 'none',
      minHeight: controlHeight,
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#424B5A'
      }
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#929292'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#2A2A40'
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#2A2A40',
      caretColor: 'transparent'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#F1B500' : 'transparent',
      color: state.isFocused ? '#FFF' : '#2A2A40',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#F1B500',
        color: '#FFF'
      }
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '8px',
      overflow: 'hidden',
      width: menuWidth || '110%'
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#2A2A40',
      '&:hover': {
        cursor: 'pointer',
        color: '#2A2A40'
      }
    })
  };

  const handleChange = (newValue: unknown) => {
    if (newValue) {
      onChange((newValue as Option).value);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-typo-1">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      <Select
        className={cn('!rounded-[10px]', className)}
        classNamePrefix="select"
        styles={customStyles}
        placeholder={placeholder}
        isDisabled={disabled}
        menuPlacement="bottom"
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
      {errorMessage && <p className="text-primary-light text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};
