// 平台校验
const u = navigator.userAgent;
/**
 * @description 判断是否是ios
 * @returns
 */
export const isIOS = () => {
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

/**
 * @description 判断是否是android
 * @returns
 */
export const isAndroid = () => {
  return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
};

/**
 * @description 判断是否是微信
 * @returns
 */
export const isWX = () => {
  return u.toLowerCase().match(/MicroMessenger/i == "micromessenger");
};
