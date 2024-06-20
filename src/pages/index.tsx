import LanguageToggle from '@/components/Header/LanguageToggle';
import { getServerSidePropsWithTranslations } from '@/utils/loadTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className='p-4'>
      <LanguageToggle />
      <p>{t('HelloWorld')}</p>
    </div>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslations([]);
