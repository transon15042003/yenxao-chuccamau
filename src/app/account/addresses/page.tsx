import { redirect } from 'next/navigation';

import { retrieveCustomer } from '@/lib/data/customer';

import AddressesClient from './AddressesClient';

export default async function AccountAddressesPage() {
  const customer = await retrieveCustomer();
  if (!customer) {
    redirect('/account/login');
  }

  return <AddressesClient addresses={customer.addresses || []} />;
}
