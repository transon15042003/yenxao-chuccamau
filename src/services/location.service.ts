const vietnamProvinceAPI = 'https://provinces.open-api.vn/api/';

export type VietnamProvince = {
  name: string;
  code: string;
  division_type: string;
  phone_code: string;
  districts: VietnamDistrict[];
};

export type VietnamDistrict = {
  name: string;
  code: string;
  division_type: string;
  phone_code: string;
  wards: VietnamWard[];
};

export type VietnamWard = {
  name: string;
  code: string;
  division_type: string;
  phone_code: string;
};

export const getVietnamProvinces = async (): Promise<VietnamProvince[]> => {
  const response = await fetch(`${vietnamProvinceAPI}?depth=2`);
  const data = await response.json();

  return data;
};
