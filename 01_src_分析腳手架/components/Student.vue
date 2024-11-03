<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  //組件名稱，建議跟這個組件名稱的名字一樣
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};
</script>
