import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { ContactPage as Page } from 'src/components/templates/ContactPage';
import { getContactInfo } from 'src/services/contact.service';

export const metadata: Metadata = {
  title: StaticSEOContent.contactPage.title,
  description: StaticSEOContent.contactPage.desc,
  keywords: StaticSEOContent.contactPage.keywords,
  alternates: {
    canonical: StaticSEOContent.contactPage.canonicalUrl
  }
};

const ContactPage = async () => {
  const contactData = await getContactInfo();

  return <Page contactData={contactData} />;
};

export default ContactPage;
