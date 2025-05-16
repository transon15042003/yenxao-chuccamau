export const AppConfig = {
  email: '',
  phone: '',
  address: '',
  shippingEmail: '',
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
  }
};
