type SendMailBody = {
  subject: string;
  html: string;
  text?: string;
  fromName?: string;
  emailTo?: string; // default is process.env.OWNER_EMAIL
};

export const sendMail = async (body: SendMailBody, url = '/api/send-mail') => {
  const sendMailResult = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const sendMailJson = await sendMailResult.json();
  if (!sendMailJson?.data) {
    throw new Error('Get an error while sending an email');
  }

  return sendMailJson;
};
