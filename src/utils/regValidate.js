// 正则校验

/**
 * 判断是否是邮箱格式
 * @param {*} val
 * @returns
 */
export const isEmail = (val) => {
  const regexp =
    /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (!regexp.test(value)) {
    return false;
  }
  return true;
};

/**
 * 判断是否是电话号码
 * @param {*} val
 * @returns
 */
export const isPhone = (val) => {
  const regexp =
    /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/;
  if (!regexp.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description 去除字符串所有空格
 * @param {*} val 字符串
 * @returns
 */
export const delAllSpace = (val) => {
  return val.replace(/\s*/g, "");
};

/**
 * @description 去除字符串两端空格
 * @param {*} val 字符串
 * @returns
 */
export const delBothEndsSpace = (val) => {
  return val.replace(/^\s*|\s*$/g, "");
};

/**
 * @description 去除字符串左侧的空格
 * @param {*} val 字符串
 * @returns
 */
export const delLeftSpace = (val) => {
  return val.replace(/^\s*/, "");
};

/**
 * @description 去除字符串右侧的空格
 * @param {*} val
 * @returns
 */
export const delRightSpace = (val) => {
  return val.replace(/(\s*$)/g, "");
};

/**
 * @description 判断是否是身份证号（支持一代15位和二代18位）
 * @param {*} val
 * @returns
 */
export const isIdCard = (val) => {
  const regexp =
    /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
  if (!regexp.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description 判断是否是网址
 * @param {*} val
 * @returns
 */
export const isWebsite = (val) => {
  const regexp =
    /^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/;
  if (!regexp.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description 判断是否是QQ
 * @param {*} val
 * @returns
 */
export const isQq = (val) => {
  const regexp = /^[1-9][0-9]{4,10}$/;
  if (!regexp.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description 只能输入正整数
 * @param {*} value
 * @returns
 */
export const inputOnlyNumber = (value) => {
  return value.replace(/^(0+)|[^\d]+/g, "");
};

/**
 * @description 只能那个书正整数和小数(最多两位小数)
 * @param {*} value
 * @returns
 */
export const inputOnlyNumberAndDecimal = (value) => {
  let newValue = value;
  if (newValue != "" && newValue.indexOf(".") < 0) {
    newValue = parseFloat(newValue);
  }
  newValue = newValue
    .toString()
    .replace(/[^\d.]/g, "")
    .replace(/^\./g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
  return newValue;
};
