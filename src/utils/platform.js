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

/**
 * @description 判断是否是PC
 * @returns
 */
export const isPc = () => {
  const Agents = [
    "Android",
    "iPhone",
    "webOS",
    "BlackBerry",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  for (const item of Agents) {
    console.log(item);
    if (u.indexOf(item) > 0) {
      return false;
    }
  }
  return true;
};
