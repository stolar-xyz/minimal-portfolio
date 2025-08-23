import { type ClientTranslations, type Translations } from './types';

const SUPPORTED_LOCALES = ['pl', 'en'] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: SupportedLocale = 'en';

export const isSupportedLocale = (
  locale: string | undefined,
): locale is SupportedLocale =>
  SUPPORTED_LOCALES.some(supportedLocale => supportedLocale === locale);

export const getSupportedLocale = (
  locale: string | undefined,
): SupportedLocale => (isSupportedLocale(locale) ? locale : DEFAULT_LOCALE);

export const getTranslation = async <Client extends boolean = false>(
  locale: SupportedLocale | (string & {}) | undefined,
  client?: Client,
): Promise<Client extends true ? ClientTranslations : Translations> => {
  const lang = getSupportedLocale(locale);

  if (client) {
    return (await import(`./client-langs/${lang}.ts`)).default;
  }

  return (await import(`./langs/${lang}.ts`)).default;
};

export const getLocalePath = (locale: SupportedLocale) =>
  locale === DEFAULT_LOCALE ? '/' : `/${locale}`;

export const getLocalesNavigation = () =>
  SUPPORTED_LOCALES.map(locale => ({
    locale,
    path: getLocalePath(locale),
  }));
