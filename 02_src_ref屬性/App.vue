<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">點我輸出上方的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "好久不見",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title); // 真實DOM元素
      console.log(this.$refs.sch); // School組件的實例對象(VueComponents)
    },
  },
};
</script>

<style></style>
