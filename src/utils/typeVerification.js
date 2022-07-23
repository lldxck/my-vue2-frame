// 类型校验
/**
 * 判断是值否为某个类型
 * @param {*} val 值
 * @param {*} type 类型
 * @returns
 */
export const is = (val, type) => {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
};

/**
 * 是否为函数
 * @param {*} val
 * @returns
 */
export const isFunction = (val) => {
  return is(val, "Function");
};

/**
 * 是否为undefined
 * @param {*} val
 * @returns
 */
export const isUndefined = (val) => {
  return typeof val === "undefined";
};

/**
 * 是否为对象
 * @param {*} val
 * @returns
 */
export const isObject = (val) => {
  return val !== null && is(val, "Object");
};

/**
 * 是否为数值
 * @param {*} val
 * @returns
 */
export const isNumber = (val) => {
  return is(val, "Number");
};

/**
 * 是否为时间
 * @param {*} val
 * @returns
 */
export const isDate = (val) => {
  return is(val, "Date");
};

/**
 * 是否为字符串
 * @param {*} val
 * @returns
 */
export const isString = (val) => {
  return is(val, "String");
};

/**
 * 是否为boolean类型
 * @param {*} val
 * @returns
 */
export const isBoolean = (val) => {
  return is(val, "Boolean");
};

/**
 * 是否为数组
 * @param {*} val
 * @returns
 */
export const isArray = (val) => {
  return val && Array.isArray(val);
};

/**
 * 是否为null
 * @param {*} val
 * @returns
 */
export const isNull = (val) => {
  return val === null;
};

/**
 * 是否为promise
 * @param {*} val
 * @returns
 */
export const isPromise = (val) => {
  return (
    is(val, "Promise" && isObject(val) && isFunction(val.then)) &&
    isFunction(val.catch)
  );
};

/**
 * 判断数据类型
 * @param {*} val 需要判断类型的数据
 * @returns 数据类型
 */
export const isType = (val) => {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else
    return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
};
