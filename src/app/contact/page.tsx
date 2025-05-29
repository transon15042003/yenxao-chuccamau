import { StaticSEOContent } from '@/contents/SEO';
import { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
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

  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} language="vi">
      <Page contactData={contactData} />
    </ReCaptchaProvider>
  );
};

export default ContactPage;
