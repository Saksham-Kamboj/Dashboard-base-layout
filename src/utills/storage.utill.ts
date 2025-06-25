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
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  /**
   * Clear the whole local storage
   */
  public static clearLocalStorage(): void {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }

  /**
   * @functions {setSessionStorage}- Set item in Session Storage
   * @param {string} key
   * @param {string} value
   */
  public static setSessionStorage(key: string, value: string): void {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, value);
    }
  }

  /**
   * @functions {getSessionStorage}- Get Session Storage
   * @param {string} key
   * @return {string}
   */
  public static getSessionStorage(key: string): string {
    if (typeof window !== "undefined") {
      const receivedKey = sessionStorage.getItem(key);
      return receivedKey || "";
    }
    return "";
  }

  /**
   * @functions {clearSessionStorage} - Clear the whole session storage
   */
  public static clearSessionStorage(): void {
    if (typeof window !== "undefined") {
      sessionStorage.clear();
    }
  }
}
