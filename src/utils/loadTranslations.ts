import type { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { Namespace } from '@/types/i18n/withTranslation';

const DEFAULT_NAMESPACES = ['common', 'error'] as const;
type DefaultNamespaces = (typeof DEFAULT_NAMESPACES)[number];

export const loadTranslations = async (
  locale: string,
  namespaces: Exclude<Namespace, DefaultNamespaces>[],
) => {
  return serverSideTranslations(locale ?? 'ar', [
    ...DEFAULT_NAMESPACES,
    ...namespaces,
  ]);
};
export const getServerSidePropsWithTranslations =
  (namespaces: Exclude<Namespace, DefaultNamespaces>[]) =>
  async (context: GetServerSidePropsContext) => {
    const { locale } = context;
    const translations = await loadTranslations(locale ?? 'ar', namespaces);

    return {
      props: {
        ...translations,
      },
    };
  };
