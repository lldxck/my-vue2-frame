// localStorage相关操作

import { del } from "vue";

/**
 * @description 获取localStorage
 * @param {*} key storage名称
 * @returns storage值
 */
export const localGet = (key) => {
  const val = window.localStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};

/**
 * @description 存储localStorage
 * @param {*} key storage名称
 * @param {*} val storage值
 */
export const localSet = (key, val) => {
  window.localStorage.setItem(key, JSON.stringify(val));
};

/**
 * @description 清除localStorage
 * @param {*} key storage名称
 */
export const localRemove = (key) => {
  window.localStorage.removeItem(key);
};

/**
 * @description 清除所有localStorage
 */
export const localClear = () => {
  window.localStorage.clear();
};

/**
 * @description 对象或数组的深克隆
 * @param {*} obj 源对象
 * @returns 克隆后的对象
 */
export const deepCopy = (obj) => {
  let newObj;
  try {
    newObj = obj.push ? [] : {};
  } catch (error) {
    newObj = {};
  }
  for (let attr in obj) {
    if (typeof obj[attr] === "object") {
      newObj[attr] = deepCopy(obj[attr]);
    } else {
      newObj[attr] = obj[attr];
    }
  }
  return newObj;
};
/**
 * @description 生成随机数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @returns
 */
export const randomNum = (min, max) => {
  let num = Math.floor(Math.random() * (min - max) + max);
  return num;
};
/**
 * @description 获取浏览器默认语言
 * @returns 语言
 */
export const getBrowserLang = () => {
  let browserLang = navigator.language
    ? navigator.language
    : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (
    browserLang.toLowerCase() === "cn" ||
    browserLang.toLowerCase() === "zh" ||
    browserLang.toLowerCase() === "zh-cn"
  ) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
};

/**
 * @description 获取距离指定时间的时长
 * @param {*} dateTime 指定时间
 * @param {*} format 格式（d:天，h:时，m:分，s:秒）
 */
export const getDistanceSpecifiedTime = (dateTime, format = "d-h-m-s") => {
  const endTime = new Date(dateTime);
  const nowTime = new Date();
  const t = endTime.getTime() - nowTime.getTime();
  const d = Math.floor(t / 1000 / 60 / 60 / 24);
  const h = Math.floor((t / 1000 / 60 / 60) % 24);
  const m = Math.floor((t / 1000 / 60) % 60);
  const s = Math.floor((t / 1000) % 60);
  let str = "";
  const formatArr = format.split("-");
  formatArr.map((item) => {
    switch (item) {
      case "d":
        str += `${d}天`;
        break;
      case "h":
        str += `${h}时`;
        break;
      case "m":
        str += `${m}分`;
        break;
      case "s":
        str += `${s}秒`;
        break;
      default:
        break;
    }
  });
  return str;
};

/**
 * @description 防抖函数:事件被触发时，在n秒后执行函数。在n秒内多次触发事件，则重新计时
 * @param {*} func 执行的函数
 * @param {*} delay 延迟执行的时间
 * @returns
 */
export const debounce = (func, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * @description 节流函数：在n秒内函数只能执行一次。在n秒内多次触发，则只有一次有效。
 * @param {*} func 执行函数
 * @param {*} delay 时间
 */
export const throttle = (func, delay) => {
  let timer = null;
  return function (...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer == null;
      }, delay);
    }
  };
};
