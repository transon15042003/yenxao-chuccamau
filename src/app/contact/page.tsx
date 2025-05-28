import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { ContactPage as Page } from 'src/components/templates/ContactPage';
import { getContactInfo } from 'src/services/contact.service';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: StaticSEOContent.contactPage.title,
    description: StaticSEOContent.contactPage.desc,
    keywords: StaticSEOContent.contactPage.keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_DOMAIN}/contact`
    }
  };
}

const ContactPage = async () => {
  const contactData = await getContactInfo();

  return <Page contactData={contactData} />;
};

export default ContactPage;
