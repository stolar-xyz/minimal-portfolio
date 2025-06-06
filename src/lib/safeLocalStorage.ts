export const safeLocalStorage: Pick<Storage, 'getItem' | 'setItem'> = {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  },
};
