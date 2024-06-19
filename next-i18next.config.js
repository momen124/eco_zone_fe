const path = require('path');
const I18NextHttpBackend = require('i18next-http-backend').default;

const ChainedBackend = require('i18next-chained-backend').default;
const LocalStorageBackend = require('i18next-localstorage-backend').default;

/**  Determines if the code is running in a browser or server environment. */
const isBrowser = typeof window !== 'undefined';

const backendOptions = [
  {
    // prefix for stored languages in local storage
    prefix: 'i18next_res_',
    // Cache expiration time (1 day)
    expirationTime: 1 * 24 * 60 * 60 * 1000,

    // language versions
    versions: {
      en: 'v1.0.00',
      ar: 'v1.0.00',
    },

    store: isBrowser ? window.localStorage : null,
  },
  {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
];

const backends = [
  LocalStorageBackend, // primary
  I18NextHttpBackend, // fallback
];

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  backend: {
    backends: isBrowser ? backends : [],
    backendOptions,
    fallbackLng: 'en',
    fallbackNS: 'common',
  },
  use: isBrowser ? [ChainedBackend] : [],
  serializeConfig: false,
  localePath: !isBrowser ? path.resolve('./public/locales') : '/locales',
  defaultNS: 'common',
  fallbackNS: 'common',
  ns: ['common', 'error'],
  detection: {
    order: ['path', 'htmlTag', 'localStorage', 'navigator'],
  },
};
