import '@/styles/globals.css';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import NextI18nextConfig from '../../next-i18next.config.js';
import useLanguage from '../hooks/useLanguage';

const theme = {};

function App({ Component, pageProps }: AppProps) {
  const { language } = useLanguage();
  return (
    <DirectionProvider initialDirection={language === 'en' ? 'ltr' : 'rtl'}>
      <MantineProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </DirectionProvider>
  );
}

export default appWithTranslation<AppProps>(App, NextI18nextConfig) as unknown as typeof App;