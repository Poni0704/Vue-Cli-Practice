<template>
  <!-- 母版裡面必須要有一個根元素 -->
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>
