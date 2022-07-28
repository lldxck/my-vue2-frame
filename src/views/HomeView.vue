<template>
  <div class="bg-[green]">
    <div class="text-[red] text-[20px]">测试</div>
    <button>点我</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_API_URL);
  },
};
</script>
