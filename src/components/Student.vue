<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>學生姓名：{{ name }}</h2>
    <h2>學生性別：{{ sex }}</h2>
    <h2>學生年齡：{{ myAge + 1 }}</h2>
    <button @click="updateAge">嘗試修改收到的年齡</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "嗨嗨你好",
      myAge: this.age,
    };
  },

  //簡單聲明接收
  // props: ["name", "sex", "age"],

  //接收的同時，對數據的類型進行限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  //接收的同時，對數據的類型進行限制+默認值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的類型是字串
      required: true, //name是必須要提供的
    },
    age: {
      type: Number, //name的類型是數字
      default: 99, //默認值是99
    },
    sex: {
      type: String, //sex的類型是字串
      required: true, //sex是必須要提供的
    },
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
};
</script>

<style>
.student {
  background-color: gray;
}
</style>
