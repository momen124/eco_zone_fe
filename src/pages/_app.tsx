/* eslint-disable @typescript-eslint/no-explicit-any */
import useLanguage from '@/hooks/useLanguage';
import '@/styles/globals.css';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import NextI18nextConfig from '../../next-i18next.config';

const theme = {};

function App({ Component, pageProps }: AppProps) {
  const { language } = useLanguage();

  const queryCache = new QueryCache({
    onError: err => {
      if (err instanceof AxiosError) {
        /* empty */
      }
    },
  });

  const [queryClient] = useState<QueryClient>(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnMount(query: any) {
              return !query.isStale();
            },
            staleTime: 4 * 60 * 1000,
            refetchOnWindowFocus(query: any) {
              return !query.isStale();
            },
          },
        },
        queryCache,
      }),
  );

  return (
    <DirectionProvider initialDirection={language === 'en' ? 'ltr' : 'rtl'}>
      <MantineProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </SessionProvider>
      </MantineProvider>
    </DirectionProvider>
  );
}

export default appWithTranslation<AppProps>(
  App,
  NextI18nextConfig,
) as typeof App;
