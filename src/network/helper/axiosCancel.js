import axios from "axios";
import { isFunction } from "@/utils/typeVerification";
import qs from "qs";

// 声明一个Map用于存储每个请求的标识和取消函数
let pendingMap = new Map();

// 序列化参数
export const getPendingUrl = (config) => {
  [
    config.method,
    config.url,
    qs.stringify(config.data),
    qs.stringify(config.params),
  ].join("&");
};

export class AxiosCanceler {
  /**
   * @description 添加请求
   * @param {*} config
   */
  addPending(config) {
    // 在请求开始前，对之前的请求做检查取消操作
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          // 如果pending中不存在当前请求，则添加进去
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * @description 移除请求
   * @param {*} config
   */
  removePending(config) {
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      // 如果在pending中存在当前请求标识，则需要取消当前请求，并且移除
      const cancel = pendingMap.get(url);
      cancel && cancel();
      pendingMap.delete(url);
    }
  }

  /**
   * @description 清空所有pending
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    // 移除pendingMap中所有额键值对
    pendingMap.clear();
  }

  /**
   * @description 重置
   */
  reset() {
    pendingMap = new Map();
  }
}
