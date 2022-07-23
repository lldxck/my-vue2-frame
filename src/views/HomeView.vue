<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { formatDate } from "@/utils/formatDate";

export default {
  name: "HomeView",
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_BASE_URL);
  },
  components: {
    HelloWorld,
  },
};
</script>
