export async function POST(request: Request) {
  const body = await request.json();
  try {
    const recaptchaToken = body.token;

    if (!recaptchaToken) {
      return Response.json({ error: 'Recaptcha token is required' }, { status: 400 });
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );
    const recaptchaData = await recaptchaResponse.json();

    return Response.json(recaptchaData, { status: 200 });
  } catch {
    return Response.json({ error: 'Failed to verify recaptcha' }, { status: 400 });
  }
}
