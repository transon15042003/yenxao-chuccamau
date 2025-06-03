import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import {
  getVietnamProvinces,
  VietnamDistrict,
  VietnamProvince
} from 'src/services/location.service';
import { z } from 'zod';

import { AreaInputGroup } from '@/components/atoms/AreaInputGroup';
import { InputGroup } from '@/components/molecules/InputGroup/InputGroup';
import { SelectInput } from '@/components/molecules/SelectInput/SelectInput';

export const shippingInfomationFormSchema = z.object({
  name: z
    .string({ required_error: 'Họ và tên không được để trống' })
    .nonempty({ message: 'Họ và tên không được để trống' }),
  email: z.string().email({ message: 'Email không hợp lệ' }).or(z.literal('')).optional(),
  phone: z
    .string({
      required_error: 'Số điện thoại không được để trống',
      invalid_type_error: 'Số điện thoại không hợp lệ'
    })
    .nonempty({ message: 'Số điện thoại không được để trống' })
    // .regex(/^\d{10}$/, { message: 'Số điện thoại không hợp lệ' }),
    .regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
      message: 'Số điện thoại không hợp lệ'
    }),
  address: z.string({ required_error: 'Địa chỉ không được để trống' }).nonempty({
    message: 'Địa chỉ không được để trống'
  }),
  district: z.string({ required_error: 'Quận/Huyện không được để trống' }).nonempty({
    message: 'Quận/Huyện không được để trống'
  }),
  province: z.string({ required_error: 'Tỉnh/Thành không được để trống' }).nonempty({
    message: 'Tỉnh/Thành không được để trống'
  })
});

export type ShippingInfomationForm = z.infer<typeof shippingInfomationFormSchema>;

type ShippingInfomationFormProps = {
  formObject?: UseFormReturn<ShippingInfomationForm>;
};

export const ShippingInfomationForm = ({ formObject }: ShippingInfomationFormProps) => {
  const localForm = useForm<ShippingInfomationForm>({
    mode: 'onChange',
    resolver: zodResolver(shippingInfomationFormSchema)
  });

  const form = formObject || localForm;

  const {
    control,
    watch,
    formState: { errors }
  } = form;

  const [provinces, setProvinces] = useState<VietnamProvince[]>([]);
  const [districts, setDistricts] = useState<VietnamDistrict[]>([]);

  const loadProvinces = async () => {
    const data = await getVietnamProvinces();
    setProvinces(data);
  };

  const loadDistricts = async (provinceName: string) => {
    const matchProvince = provinces.find((province) => province.name === provinceName);
    if (matchProvince) {
      setDistricts(matchProvince.districts);
    }
  };

  useEffect(() => {
    loadProvinces();
  }, []);

  useEffect(() => {
    const p = watch('province');
    if (p) {
      loadDistricts(p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('province')]);

  const provinceOptions = provinces.map((province) => ({
    label: province.name,
    value: province.name
  }));

  const districtOptions = districts.map((district) => ({
    label: district.name,
    value: district.name
  }));

  return (
    <form className="flex flex-col gap-4">
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
          />
        )}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <InputGroup
              id="email"
              label="Email"
              type="email"
              placeholder="example@gmail.com"
              {...field}
              errorMessage={errors.email?.message}
            />
          )}
        />

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
            />
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          control={control}
          name="province"
          render={({ field }) => (
            <SelectInput
              label="Tỉnh / Thành"
              required
              placeholder="Chọn tỉnh/thành"
              {...field}
              errorMessage={errors.district?.message}
              options={provinceOptions}
              controlHeight="48px"
            />
          )}
        />

        <Controller
          control={control}
          name="district"
          render={({ field }) => (
            <SelectInput
              label="Quận / Huyện"
              required
              placeholder="Chọn quận/huyện"
              {...field}
              errorMessage={errors.district?.message}
              options={districtOptions}
              controlHeight="48px"
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="address"
        render={({ field }) => (
          <AreaInputGroup
            id="address"
            label="Địa chỉ"
            required
            placeholder="123 Đường ABC, Quận XYZ, Tỉnh ABC"
            {...field}
            errorMessage={errors.address?.message}
            line={3}
          />
        )}
      />
    </form>
  );
};
