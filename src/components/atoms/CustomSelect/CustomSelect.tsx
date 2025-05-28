import { Option } from '@/types/common';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { StylesConfig } from 'react-select';

const Select = dynamic(() => import('react-select'), { ssr: false });

interface CustomSelectProps {
  className?: string;
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (newValue: unknown) => void;
}

const CustomSelect = ({ className, options, placeholder, value, onChange }: CustomSelectProps) => {
  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value) || null;
  }, [options, value]);

  const customStyles: StylesConfig<Option, false> = {
    control: (provided) => ({
      ...provided,
      borderColor: '#C2D1D9',
      borderRadius: '5px',
      boxShadow: 'none',
      minHeight: '45px',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#D62C35'
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9AA6AC',
      fontSize: '16px'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#252C32'
    }),
    input: (provided) => ({
      ...provided,
      color: '#FFF'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#D62C35' : 'transparent',
      color: state.isFocused ? '#FFF' : '#2A2A40',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#D62C35',
        color: '#FFF'
      }
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '5px',
      overflow: 'hidden'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#9AA6AC',
      '&:hover': {
        cursor: 'pointer',
        color: '#9AA6AC'
      }
    })
  };

  return (
    <Select
      className={className}
      styles={customStyles}
      placeholder={placeholder}
      menuPlacement="bottom"
      options={options}
      value={selectedOption}
      onChange={onChange}
      formatOptionLabel={(option, { context }) =>
        context === 'value' ? `Sắp xếp: ${(option as Option).label}` : (option as Option).label
      }
    />
  );
};
export default CustomSelect;
