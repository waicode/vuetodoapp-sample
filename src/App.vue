<template>
  <div id="app">
    <div id="appTitle">Vue.js TODO App Sample</div>
    <div class="todoWrapper">
      <div class="todoContainer">
        <TodoList :todos="todos" />
        <div class="todoCreateBtnContainer">
          <TodoCreate @formSubmitted="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";
import store from "@/store";
export default {
  name: "App",
  components: {
    TodoList,
    TodoCreate,
  },
  data() {
    return {
      todos: store.state.todos,
    };
  },
  created() {
    this.todos = store.dispatch("initStore");
  },
  methods: {
    createTodo(todo) {
      store.dispatch("createTodo", todo);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 35px;
  &Title {
    display: flex;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    justify-content: center;
  }
}

.appButton {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #795899;
  color: #fff;
  font-weight: bold;
  &.isPrimary {
    background-color: #66bb6a;
  }
  &.isWarning {
    background-color: #ffa753;
  }
  &.isDanger {
    background-color: #dd2c00;
  }

  &:hover {
    cursor: pointer;
  }
}

.appForm {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .formInput {
    padding: 10px;
    font-size: 17px;
  }
  .formControl {
    margin-bottom: 10px;
    &Last {
      margin-bottom: 0;
    }
  }
}

.todo {
  &Wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &Container {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 150px;
    background-color: #ededed;
    border-radius: 5px;
  }
  &CreateBtnContainer {
    margin: 10px;
  }
}

.appError {
  color: #ff3d00;
}
</style>
