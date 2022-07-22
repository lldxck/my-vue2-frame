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


