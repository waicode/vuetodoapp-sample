<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Hello World</h1>
    <div>{{ text }}</div>
    <div>{{ someNumber }}</div>
    <div>{{ canDecide }}</div>
    <div>{{ list }}</div>
    <div>{{ someObject.a }}</div>
    <div>{{ someObject.c }}</div>
    <div>{{ dataFunction }}</div>
    <div>{{ dataFunction() }}</div>
    <div>{{ testFunctionA() }}</div>
  </div>
</template>

<script>
import playground from "./playground";

export default {
  name: "App",
  components: {},
  data() {
    return {
      text: "Some String value",
      someNumber: 16,
      canDecide: true,
      list: [1, 2, 3],
      someObject: {
        a: 1,
        b: 2,
        c: [1, 2, 3, 4, 5],
      },
      dataFunction() {
        console.log("Data Function");
        return "Data Function";
      },
    };
  },
  // this function is run automaticaly by Vue FW
  created() {
    playground();
  },
  methods: {
    testFunctionA() {
      console.log(this.text);
      console.log(this.someNumber);
      console.log(this.someObject.a);
      this.dataFunction();
      return "I am test Fn A";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
