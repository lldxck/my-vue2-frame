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
} from "@/utils/formatDate";
import { getUrlParams, getRandomHexColor } from "@/utils/utils";
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
    console.log(getWorkDay("2022-7-23", "2022-8-5"));
    console.log(formatDate("2022-8-4"));
  },
};
</script>
