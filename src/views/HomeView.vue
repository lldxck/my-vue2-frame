<template>
  <div class="bg-[green]">
    <div class="text-[red] text-[20px]">测试</div>
    <button>点我</button>
  </div>
</template>

<script>
import { getMonthLastDay, getTimeDifference } from "@/utils/formatDate";
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
    console.log(getTimeDifference("2022-7-1 15:30:00"));
    console.log(
      getUrlParams("code", "http://192.168.29.110:5003/index?code=123&id=456")
    );
    console.log(isPc());
    console.log(getRandomHexColor());
    console.log(getBrowserType());
  },
};
</script>
