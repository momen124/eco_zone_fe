import LanguageToggle from '@/components/Header/LanguageToggle';
import { getServerSidePropsWithTranslations } from '@/utils/loadTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className='p-4'>
      <LanguageToggle />
      <p>{t('HelloWorld')}</p>
     <Link href="/auth/register">Go to Register Page</Link>

    </div>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslations([]);
