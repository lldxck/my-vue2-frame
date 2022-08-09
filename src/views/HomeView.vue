<template>
  <div class="bg-[green]">
    <div class="text-[red] text-[20px]">测试</div>
    <button>点我</button>
  </div>
</template>

<script>
import {
  getMonthLastDay,
  getTimeDifference,
  isSameDay,
  isToday,
  isDayOfWeek,
  isWorkDay,
  getWorkDay,
  formatDate,
  getAppointDateTime,
  isEqual,
  dateCompare,
  isBefore,
  isAfter,
} from "@/utils/date";
import { getUrlParams, getRandomHexColor, zeroFilling } from "@/utils/utils";
import { isPc, getBrowserType } from "@/utils/platform";
export default {
  name: "HomeView",
  data() {
    return {};
  },
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_API_URL);
    console.log(getMonthLastDay(12, "yyyy-MM-dd hh:mm:ss"));
    console.log(getTimeDifference("2022-8-1 15:30:00"));
    console.log(
      getUrlParams("code", "http://192.168.29.110:5003/index?code=123&id=456")
    );
    console.log(isPc());
    console.log(getRandomHexColor());
    console.log(getBrowserType());
    console.log(isSameDay("2022-08-02", "2022-8-4"));
    console.log(isToday("2022-08-01"));
    console.log(isDayOfWeek("2022-8-6"));
    console.log(isWorkDay("2022-8-4"));

    console.log(formatDate("2022-8-4"));
    console.log(getAppointDateTime(new Date()));
    console.log(zeroFilling(8));

    console.log(isEqual("2022-8-7 00:00:00", "2022-8-7 00:04:00"));
    console.log(dateCompare("2022-8-7 00:18:00", "2022-8-7 00:22:00"));
    console.log(isBefore("2022-8-7 00:18:00", "2022-8-7 00:22:00"));
    console.log(isAfter("2022-8-7 01:18:00", "2022-8-7 00:22:00"));
    console.log(getWorkDay("2022-8-5 00:00:00", "2022-8-9 21:00:00"));
  },
};
</script>
