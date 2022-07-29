// 时间相关工具
/**
 * 按照指定格式来格式化时间
 * @param {*} date 时间
 * @param {*} fmt 格式
 * @returns
 */
export const formatDate = (date, fmt = "yyyy-MM-dd hh:mm:ss") => {
  const o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

/**
 * @description 获取当月有多少天
 * @param {*} month
 */
export const getMonthDay = (month) => {
  //方法一
  // 获取年份
  const year = new Date().getFullYear();
  const isLeapYear = (year % 4 === 0 && year % 100 != 0) || year % 400 == 0;
  const maxDays = [1, 3, 5, 7, 8, 10, 12];
  const middleDays = [4, 6, 9, 11];
  month = parseInt(month);
  if (month == 2) {
    if (isLeapYear) {
      return 29;
    } else {
      return 28;
    }
  } else if (maxDays.includes(month)) {
    return 31;
  } else if (middleDays.includes(month)) {
    return 30;
  }
  // 方法二
  // 实现思路：获取下个月的1号的00:00时刻，然后减去1秒，在输出da即可获取当月最后一天的日期
  // let year = new Date().getFullYear();
  // return new Date(
  //   new Date(
  //     `${month < 12 ? year : ++year}-${month == 12 ? 1 : ++month} 00:00`
  //   ).getTime() - 1
  // ).getDate();
};

/**
 * @description 根据指定格式来获取指定月的最后一天
 * @param {*} month
 * @param {*} fmt
 * @returns
 */
export const getMonthLastDay = (month, fmt = "yyyy-MM-dd hh:mm:ss") => {
  const year = new Date().getFullYear();
  const day = getMonthDay(month);
  return formatDate(new Date(`${year}-${month}-${day} 00:00:00`), fmt);
};

/**
 * @description 获取两个时间差的差值
 * @param {*} dateBegin 开始时间
 * @param {*} dateEnd 结束时间（默认值为当前时间）
 * @returns
 */
export const getTimeDifference = (dateBegin, dateEnd = new Date()) => {
  const beginTime = new Date(dateBegin).getTime();
  const endTime = new Date(dateEnd).getTime();
  const dateDiff = Math.abs(endTime - beginTime);
  const days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  const hours = Math.floor((dateDiff / 1000 / 60 / 60) % 24);
  const minute = Math.floor((dateDiff / 1000 / 60) % 60);
  const seconds = Math.floor((dateDiff / 1000) % 60);
  return `${days}天${hours}时${minute}分${seconds}秒`;
};
