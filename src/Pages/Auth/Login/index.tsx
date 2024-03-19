import { SignUpData } from '@/Common/interface';
import { SIGNUP } from '@/Services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { ErrorMessage, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const Login = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignUpData) => SIGNUP(data),
    onSuccess: data => {
      console.log('response', data);
    },
    onError: error => {
      console.log(error);
    },
  });
  const texts = {
    usernameLabel: t('usernameLabel'),
    emailLabel: t('emailLabel'),
    passwordLabel: t('passwordLabel'),
    confirmPasswordLabel: t('confirmPasswordLabel'),
    usernameRequired: t('usernameRequired'),
    emailRequired: t('emailRequired'),
    invalidEmail: t('invalidEmail'),
    passwordRequired: t('passwordRequired'),
    passwordMinLength: t('passwordMinLength'),
    confirmPasswordMismatch: t('confirmPasswordMismatch'),
    usernameMinLength: t('usernameMinLength'),
    submitButton: t('submitButton'),
    login: t('login')
  };

  const register = (values: SignUpData) => {
    try {
      mutate(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <HeroSection bgSrc={IMAGES.bgImage} login={true}>
    <div className="w-[500px] rounded p-6 shadow-md border-2 border-dashed border-lightprimary relative top-8 left-8 height-full">
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(3, texts.usernameMinLength)
            .required(texts.usernameRequired),
          email: Yup.string()
            .email(texts.invalidEmail)
            .required(texts.emailRequired),
          password: Yup.string()
            .min(6, texts.passwordMinLength)
            .required(texts.passwordRequired),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref('password'), undefined],
              texts.confirmPasswordMismatch,
            )
            .required(texts.passwordRequired),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await register(values);
          setSubmitting(false);
        }}
      >
        {({ handleChange, handleBlur }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium text-primary">
                {texts.emailLabel}
              </label>
              <Input
                type="text"
                name="email"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                className="text-red-500"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-primary">
                {texts.passwordLabel}
              </label>
              <Input
                type="password"
                name="password"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                className="text-red-500"
                component="p"
              />
            </div>
            <br />
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                variant={'login'}
                className="w-2/3 text-primary-foreground"
                disabled={isPending ? true : false}
              >
                {texts.login}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    // </HeroSection>
  );
};

export default Login;
