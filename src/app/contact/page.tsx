import { ContactPage as Page } from 'src/components/templates/ContactPage';
import { getContactInfo } from 'src/services/contact.service';

const ContactPage = async () => {
  const contactData = await getContactInfo();

  return <Page contactData={contactData} />;
};

export default ContactPage;
