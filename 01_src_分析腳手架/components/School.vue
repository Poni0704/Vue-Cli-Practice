<template>
  <!-- 組件的結構 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
//組件交互相關的代碼(數據、方法等等)
export default {
  //組件名稱，建議跟這個組件名稱的名字一樣
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 組件的樣式 */
.demo {
  background-color: orange;
}
</style>
