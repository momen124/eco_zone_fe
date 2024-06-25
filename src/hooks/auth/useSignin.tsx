import { axiosInternal } from '@/libs/configs/axios';
import signin from '@/libs/services/signin';
import type { UserModel } from '@/types/auth/user';
import { useMutation } from '@tanstack/react-query';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';


const useSignIn = () => {
  const router = useRouter();
  const { mutate: signIn, isPending } = useMutation({

// TODO: Replace any with LoginSchemaType after its created.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (values: any) => {
      await signin(values);
      const { data } = await axiosInternal.get<{ user: UserModel }>(
        '/auth/session',
      );
      return data?.user;
    },
    onSuccess: (_user) => {
      const callbackCookie = getCookie('callbackUrl');
      let cbUrl = `/`;
      if (callbackCookie) {
        try {
          cbUrl = decodeURIComponent(callbackCookie);
        } catch (_) {
          cbUrl = `/`;
        }
      }
      router.push(cbUrl);
      deleteCookie('callbackUrl');
    },
    onError(error) {
      return {
        id: 'signin-error',
        body: error?.message,
      };
    },
  });

  return {
    signIn,
    isLoading: isPending
  };
};

export default useSignIn;
