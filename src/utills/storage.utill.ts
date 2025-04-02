/** Storage Helper */
export class StorageUtill {
  /**
   * @functions {setLocalStorage} - Set item in localstorage
   * @param {string} key
   * @param {string} value
   */
  public static setLocalStorage(key: string, value: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }

  /**
   * @functions {getLocalStorage} - Get data from Local Storage
   * @param {string|null} key
   * @return {string}
   */
  public static getLocalStorage(key: string): string {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      return data || "";
    }
    return "";
  }

  /**
   * @functions {removeLocalStorage} - Remove key-value from Local Storage
   * @param {string} key
   */
  public static removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear the whole local storage
   */
  public static clearLocalStorage(): void {
    localStorage.clear();
  }

  /**
   * @functions {setSessionStorage}- Set item in Session Storage
   * @param {string} key
   * @param {string} value
   */
  public static setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  /**
   * @functions {getSessionStorage}- Get Session Storage
   * @param {string} key
   * @return {string}
   */
  public static getSessionStorage(key: string): string {
    const receivedKey = sessionStorage.getItem(key);
    return receivedKey || "";
  }

  /**
   * @functions {clearSessionStorage} - Clear the whole session storage
   */
  public static clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
