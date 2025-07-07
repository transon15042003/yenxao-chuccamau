import type { MailDataRequired } from '@sendgrid/mail';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

type EmailInputs = {
  to: string;
  from: string;
  fromName?: string;
  subject: string;
  html: string;
  attachments?: MailDataRequired['attachments'];
  personalizations?: MailDataRequired['personalizations'];
  replyTo?: MailDataRequired['replyTo'];
};

export const sendSendridEmail = async ({
  to,
  from,
  fromName,
  subject,
  html,
  attachments,
  personalizations,
  replyTo
}: EmailInputs) => {
  try {
    const [res] = await sgMail.send({
      to,
      from: { email: from, name: fromName },
      subject,
      html,
      attachments,
      ...(personalizations ? { personalizations } : {}),
      replyTo
    });

    return res.statusCode === 202 ? { result: 'Ok' } : { result: 'Error' };
  } catch (error) {
    console.error(error);

    return { result: 'Error' };
  }
};
