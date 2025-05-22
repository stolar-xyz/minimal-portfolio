import { isSupportedLocale, type Locale } from '@/i18n/utils';

const LOCAL_STORAGE_KEY = 'language-preference-dismissed';

export function checkPreferredLanguage(currentLocale: Locale) {
  const dismissed = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (dismissed === 'true') {
    return null;
  }

  const browserLanguages = navigator.languages || [navigator.language];

  for (const language of browserLanguages) {
    const baseLanguage = language.split('-')[0];

    if (baseLanguage === currentLocale) {
      break;
    }

    if (isSupportedLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return null;
}

export function dismissLanguageSuggestion() {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
}
