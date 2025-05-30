import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const useRecaptchaLogic = () => {
  const [token, setToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onRecaptchaChange = (token: string | null) => {
    setToken(token);
  };

  const resetRecaptcha = () => {
    setToken(null);
    recaptchaRef.current?.reset();
  };

  const getValue = () => {
    // eslint-disable-next-line no-console
    console.log('Get value recaptcha', token, recaptchaRef.current?.getValue());

    return recaptchaRef.current?.getValue();
  };

  return {
    getValue,
    token,
    recaptchaRef,
    onRecaptchaChange,
    resetRecaptcha
  };
};

export default useRecaptchaLogic;
