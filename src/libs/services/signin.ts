import { signIn } from 'next-auth/react';

// TODO: Replace any with LoginSchemaType after its created.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signin = async (values: any) => {
  const response = await signIn('credentials', {
    ...values,
    username: values.email,
    redirect: false,
  });

  if (response?.error) {
    const errorResponse = {
      ...response,
      message: response.error,
    };
    return Promise.reject(errorResponse);
  }

  return response;
};

export default signin;
