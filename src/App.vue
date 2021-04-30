<template>
  <div id="app">
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
import playground from "./playground";
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
  // this function is run automaticaly by Vue FW
  created() {
    playground();
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
  margin-top: 60px;
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
    min-height: 400px;
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
