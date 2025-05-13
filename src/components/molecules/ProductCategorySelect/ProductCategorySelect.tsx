/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Option } from '@/types/common';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

const Select = dynamic(() => import('react-select'), { ssr: false });

import { cn } from '@/lib/utils';

type ProductCategorySelectProps = {
  className?: string;
  options: Option[];
  value: string;
};

export const ProductCategorySelect = ({
  options,
  value,
  className
}: ProductCategorySelectProps) => {
  const router = useRouter();

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value) || null;
  }, [options, value]);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#D62C35',
      borderColor: '#D62C35',
      borderRadius: '5px',
      boxShadow: 'none',
      minHeight: '45px',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#D62C35'
      }
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#FFF',
      fontSize: '20px',
      fontWeight: 'bold'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#FFF',
      fontWeight: 'bold'
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#FFF'
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#D62C35' : 'transparent',
      color: state.isFocused ? '#FFF' : '#2A2A40',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#D62C35',
        color: '#FFF'
      }
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: '5px',
      overflow: 'hidden'
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#FFF',
      '&:hover': {
        cursor: 'pointer',
        color: '#FFF'
      }
    })
  };

  const handleChange = (newValue: unknown) => {
    if (newValue) {
      router.push(`/products?c=${(newValue as Option).value}`);
    }
  };

  return (
    <Select
      className={cn('!rounded-[10px]', className)}
      classNamePrefix="select"
      styles={customStyles}
      placeholder={`Danh mục sản phẩm`}
      isDisabled={false}
      menuPlacement="bottom"
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};
