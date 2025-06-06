import { type ClientTranslations, type Translations } from './types';

const SUPPORTED_LOCALES = ['pl', 'en'] as const;

type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const DEFAULT_LOCALE: SupportedLocale = 'en';

export const getTranslation = async <Client extends boolean = false>(
  locale: SupportedLocale,
  client?: Client,
): Promise<Client extends true ? ClientTranslations : Translations> => {
  if (client) {
    return (await import(`./client-langs/${locale}.ts`)).default;
  }

  return (await import(`./langs/${locale}.ts`)).default;
};

export const isSupportedLocale = (
  locale: string | undefined,
): locale is SupportedLocale =>
  SUPPORTED_LOCALES.some(supportedLocale => supportedLocale === locale);

export const getLocalePath = (locale: SupportedLocale) =>
  locale === DEFAULT_LOCALE ? '/' : `/${locale}`;

export const getLocalesNavigation = () =>
  SUPPORTED_LOCALES.map(locale => ({
    label: locale.toUpperCase(),
    path: getLocalePath(locale),
  }));
