const LOCAL_STORAGE_KEY = 'language-suggestion-dismissed';
const DISMISSED_VALUE = 'true';

export function isDismissed() {
  return localStorage.getItem(LOCAL_STORAGE_KEY) === DISMISSED_VALUE;
}

export function dismissLanguageSuggestion() {
  // localStorage.setItem(LOCAL_STORAGE_KEY, DISMISSED_VALUE);
}

export function getUserBrowserLanguage() {
  const browserLanguages = navigator.languages || [navigator.language];
  const baseLanguage = browserLanguages[0]?.split('-')[0];

  return baseLanguage;
}
