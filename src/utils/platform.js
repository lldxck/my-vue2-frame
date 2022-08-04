// 平台校验
// 获取浏览器的userAgent字符串
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

/**
 * @description 获取浏览器的类型
 * @returns
 */
export const getBrowserType = () => {
  // 判断是否是Opera浏览器
  const isOpera = u.indexOf("Opera") > -1;
  // 判断是否是IE浏览器
  const isIE =
    u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera;
  // 判断是否是IE11
  const isIE11 = u.indexOf("Trident") > -1 && u.indexOf("rv:11.0") > -1;
  // 判断是否是IE的Edge浏览器
  const isEdge = u.indexOf("Edge") > -1 && !isIE;
  // 判断是否是Firefox浏览器
  const isFirefox = u.indexOf("Firefox") > -1;
  // 判断是否是Safari浏览器
  const isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") == -1;
  // 判断是否是Chrome浏览器
  const isChrome = u.indexOf("Chrome") > -1 && u.indexOf("Safari") > -1;
  if (isIE) {
    const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(u);
    const fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) return "IE7";
    else if (fIEVersion == 8) return "IE8";
    else if (fIEVersion == 9) return "IE9";
    else if (fIEVersion == 10) return "IE10";
    else return "IE7以下"; //IE版本过低
  }
  if (isIE11) return "IE11";
  if (isEdge) return "Edge";
  if (isFirefox) return "Firefox";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
};
