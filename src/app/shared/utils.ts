export abstract class Utils {
  /**
   * Get value of a cookie.
   *
   * @param name - name of the cookie
   */
  static getCookie(name: string) {
    const match = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)');
    return match ? match.pop() : '';
  }

  /**
   * Set a cookie.
   *
   * @param name - name of the cookie
   * @param value - value of the cookie
   * @param date - expiration date of the cookie, preset to the current day if not set
   */
  static setCookie(name: string, value: string, date?: Date) {
    let expires = date;
    if (!expires) {
      expires = new Date();
      expires.setHours(23);
      expires.setMinutes(59);
      expires.setSeconds(59);
      expires.setMilliseconds(0);
    }
    document.cookie = name + '=' + (value || '') + '; expires=' + expires.toUTCString() + '; path=/';
  }
}
