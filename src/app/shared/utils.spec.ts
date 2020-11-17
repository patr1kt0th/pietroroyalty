import { Utils } from './utils';

const cookieName = 'iqpress-test';
const cookieValue = 'iqpress-value';

it('Utils should set a cookie', () => {
  Utils.setCookie(cookieName, cookieValue);
  expect(document.cookie).toContain(cookieName);
  expect(document.cookie).toContain(cookieValue);
});

it('Utils should set a cookie', () => {
  Utils.setCookie(cookieName, cookieValue);
  const value = Utils.getCookie(cookieName);
  expect(value).toEqual(cookieValue);
});
