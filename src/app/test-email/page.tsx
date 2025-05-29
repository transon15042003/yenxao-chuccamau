'use client';

import { Order } from '@/types/order';
import { renderEmail } from 'react-html-email';

import { ContactNotification } from '@/components/templates/mail/ContactNotification';
import { CustomerOrderNotification } from '@/components/templates/mail/CustomerOrderNotification';
import { OwnerOrderNotification } from '@/components/templates/mail/OwnerOrderNotification';

// Sample order data for testing
const sampleOrder: Order = {
  code: 'TEST123',
  status: 'pending',
  items: [
    {
      productId: '1',
      sku: 'SKU001',
      name: 'Test Product',
      price: 100000,
      quantity: 2,
      specs: {
        color: 'Red',
        size: 'M'
      },
      thumbnail: 'https://example.com/image.jpg'
    }
  ],
  customer: {
    name: 'Test Customer',
    email: 'test@example.com',
    phone: '0123456789',
    address: '123 Test Street',
    province: 'Test Province',
    district: 'Test District'
  },
  paymentStatus: 'pending',
  paidAt: new Date(),
  shippingMethod: 'STANDARD'
};

// Sample contact form data for testing
const sampleContactData = {
  name: 'Test Contact',
  email: 'contact@example.com',
  phone: '0987654321',
  subject: 'Test Subject',
  message: 'This is a test message.\nWith multiple lines.\nTo test formatting.'
};

export default function TestEmailPage() {
  const ownerEmailHtml = renderEmail(OwnerOrderNotification(sampleOrder));
  const customerEmailHtml = renderEmail(CustomerOrderNotification(sampleOrder.customer));
  const contactEmailHtml = renderEmail(ContactNotification(sampleContactData));

  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Owner Notification</h2>
        <div dangerouslySetInnerHTML={{ __html: ownerEmailHtml }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Customer Notification</h2>
        <div dangerouslySetInnerHTML={{ __html: customerEmailHtml }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Notification</h2>
        <div dangerouslySetInnerHTML={{ __html: contactEmailHtml }} />
      </div>
    </div>
  );
}
