/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendSendridEmail } from '@/lib/declarations/sendgrid.service';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { result } = await sendSendridEmail({
      from: process.env.SENDGRID_SENDER_EMAIL || '',
      to: body.emailTo || process.env.OWNER_EMAIL?.split(',') || '',
      ...body
    });

    return Response.json(
      result === 'Ok'
        ? { error: null, data: result }
        : { error: new Error('Failed to send email') },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ statusCode: 500, message: error.message }, { status: 500 });
  }
}
