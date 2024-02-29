import { SIGNUP } from '@/Services/api';
import { handleCustomError } from '@/Utils/helper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ErrorMessage, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const SignupPage = () => {
  const { t } = useTranslation();
  const texts = {
    title: t('Sign Up'),
    usernameLabel: t('Username'),
    emailLabel: t('Email Address'),
    passwordLabel: t('Password'),
    confirmPasswordLabel: t('Confirm Password'),
    usernameRequired: t('Required'),
    emailRequired: t('Required'),
    invalidEmail: t('Invalid email address'),
    passwordRequired: t('Required'),
    passwordMinLength: t('Must be at least 6 characters'),
    confirmPasswordMismatch: t('Passwords must match'),
    usernameMinLength: t('Must be at least 3 characters'),
    submitButton: t('Submit'),
  };

  const register = async (values: any) => {
    try {
      await SIGNUP(values);
    } catch (error) {
      handleCustomError(error);
    }
  };

  return (
    <div className="mx-auto mt-8 max-w-md rounded p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">{texts.title}</h1>
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
              <label htmlFor="username" className="block font-medium">
                {texts.usernameLabel}
              </label>
              <Input
                type="text"
                name="username"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="username"
                className="text-red-500"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                {texts.emailLabel}
              </label>
              <Input
                type="text"
                name="email"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="email"
                className="text-red-500"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                {texts.passwordLabel}
              </label>
              <Input
                type="password"
                name="password"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="password"
                className="text-red-500"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block font-medium">
                {texts.confirmPasswordLabel}
              </label>
              <Input
                type="password"
                name="confirmPassword"
                className="mt-1 w-full rounded border p-2"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="confirmPassword"
                className="text-red-500"
                component="p"
              />
            </div>
            <br />
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                variant={'default'}
                className="w-2/3 text-primary-foreground"
              >
                {texts.submitButton}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupPage;
