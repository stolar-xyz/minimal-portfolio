import { en } from './langs/en';
import { pl } from './langs/pl';
import { uk } from './langs/uk';

export type Locale = string | undefined;

const translations = {
  en,
  pl,
  uk,
};

type SupportedLocale = keyof typeof translations;

const defaultLocale: SupportedLocale = 'en';

export const isSupportedLocale = (locale: Locale): locale is SupportedLocale =>
  typeof locale === 'string' && locale in translations;

export const getTranslation = (locale: Locale) =>
  isSupportedLocale(locale)
    ? translations[locale]
    : translations[defaultLocale];

export const getLocalesNavigation = () =>
  Object.keys(translations).map(locale => ({
    label: locale,
    path: locale === defaultLocale ? '/' : `/${locale}/`,
  }));
