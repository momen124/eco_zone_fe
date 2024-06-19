import type { DocumentProps } from 'next/document';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document({ locale = 'en' }: DocumentProps) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const lang = locale === 'ar' ? 'ar' : 'en';

  return (
    <Html lang={lang} dir={dir}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
