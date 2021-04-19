<template>
  <div id="app">
    <div class="todoWrapper">
      <div class="todoContainer">
        <div class="todoList">
          <div class="todoItem">
            <div class="todoItemContent">
              <div class="todoItemContentTitle">Walk the dog</div>
              <div class="todoItemContentDescription">
                Go to forrest near the Zoo
              </div>
            </div>
          </div>
          <div class="todoItem">
            <div class="todoItemContent">
              <div class="todoItemContentTitle">Buy a bread</div>
              <div class="todoItemContentDescription">Whole plain bread</div>
            </div>
          </div>
          <div class="todoItem">
            <div class="todoItemContent">
              <div class="todoItemContentTitle">Learn programming</div>
              <div class="todoItemContentDescription">
                Tommorow would be best!!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playground from "./playground";

export default {
  name: "App",
  components: {},
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todoWrapper {
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  width: 100%;
  /* height: 2000px; */
}
.todoContainer {
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
  border-radius: 5px;
}

.todoItem {
  background-color: gray;
  height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;
}
</style>
