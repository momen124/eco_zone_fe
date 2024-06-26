import { ColorSchemeScript } from '@mantine/core';
import type { DocumentProps } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document({ locale = 'en' }: DocumentProps) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const lang = locale === 'ar' ? 'ar' : 'en';

  return (
    <Html lang={lang} dir={dir}>
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className='bg-background-950'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}