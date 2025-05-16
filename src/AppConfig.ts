export const AppConfig = {
  email: '',
  phone: '0948 802 2499',
  address: '1095 Lê Văn Lương, Phước Kiển Nhà Bè, TPHCM',
  shippingEmail: 'shipping@company.com',
  workingHours: '8:00 - 20:00, từ Thứ Hai đến Chủ Nhật',
  shipping: {
    freeShippingThreshold: 500000,
    fees: {
      innerCity: {
        min: 20000,
        max: 40000
      },
      otherProvinces: {
        min: 30000,
        max: 70000
      },
      remoteAreas: {
        min: 70000,
        max: 120000
      },
      expressDelivery: 30000,
      scheduledDelivery: 50000
    }
  },
};
