import { useReCaptcha } from 'next-recaptcha-v3';

type VerifyHumanResult = {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
};

const useRecaptchaLogic = () => {
  const { executeRecaptcha } = useReCaptcha();

  const getToken = async (action: string) => {
    const recaptcha = await executeRecaptcha(action);

    return recaptcha;
  };

  const verifyHuman = async (action: string): Promise<VerifyHumanResult | null> => {
    try {
      const recaptcha = await executeRecaptcha(action);

      const verifyCaptchaResponse = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        body: JSON.stringify({ token: recaptcha })
      });

      const verifyCaptchaData = await verifyCaptchaResponse.json();

      return verifyCaptchaData;
    } catch (error) {
      console.error(error);

      return null;
    }
  };

  return {
    getToken,
    verifyHuman
  };
};

export default useRecaptchaLogic;
