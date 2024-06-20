import LanguageToggle from '@/components/Header/LanguageToggle';
import { getServerSidePropsWithTranslations } from '@/utils/loadTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className='p-4'>
      <LanguageToggle />
      <Link href="/auth/register">{t('register')}</Link>
    </div>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslations([]);
