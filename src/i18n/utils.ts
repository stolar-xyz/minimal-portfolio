import { en } from './langs/en';
import { pl } from './langs/pl';
import { uk } from './langs/uk';

const translations = {
  en,
  pl,
  uk,
};

type SupportedLocale = keyof typeof translations;
export type Locale = string | undefined;

const defaultLocale: SupportedLocale = 'en';

export const isSupportedLocale = (locale: Locale): locale is SupportedLocale =>
  typeof locale === 'string' && locale in translations;

export const getTranslation = (locale: Locale) =>
  isSupportedLocale(locale)
    ? translations[locale]
    : translations[defaultLocale];

export const getLocalesNavigation = () =>
  (Object.keys(translations) as SupportedLocale[]).map(locale => ({
    label: locale,
    path: locale === defaultLocale ? '/' : `/${locale}/`,
  }));
