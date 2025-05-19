export type TransactionStatus = 'pending' | 'success' | 'failed';
export type PaymentGateway = 'MOMO' | 'VNPAY';

type TransactionId = string;
export type TransactionRequestPayload = {
  requestId: string;
  transactionId?: TransactionId;
  paymentGateway: PaymentGateway;
  payUrl?: string;
  orderId: string;
  status: TransactionStatus;
  requestPayload?: Record<string, unknown>;
  responsePayload?: Record<string, unknown>;
  error?: Record<string, unknown>;
};

export type Transaction = TransactionRequestPayload & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type OrderCode = string;
export type PaymentResultParams = {
  status: 'success' | 'failed';
  o: OrderCode;
  amount: string;
  method: string;
  code: string;
  ref: TransactionId;
  date: string;
  error?: string;
};
