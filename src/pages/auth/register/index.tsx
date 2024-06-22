import { AppLayout } from '@/components/Base/AppLayout';
import RegisterForm from '@/components/form/registerForm';
import { getServerSidePropsWithTranslations } from '@/utils/loadTranslations';
import { useTranslation } from 'next-i18next';

export default function RegisterPage() {
  const { t } = useTranslation('common')

  return (
    <AppLayout>
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
          <h1 className="text-2xl mb-4 text-center">{t('register')}</h1>
          <RegisterForm />
        </div>
      </div>
      </AppLayout>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslations([]);
