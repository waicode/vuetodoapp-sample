<template>
  <div id="app">
    <div id="appLogo">
      <img class="logoImg" src="@/assets/logo.png" width="48px" height="48px" />
    </div>
    <h1 id="appTitle">
      Vue.js TODO Sample App
    </h1>
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
html {
  box-sizing: border-box;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.8;
}
body {
  background-color: #e8f5e9;
  color: #77838c;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  margin: 0;
  line-height: 1.5;
  outline: 0;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
button {
  border: none;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  transition: 0.25s;
  padding: 0;
  margin: 0;
  color: var(--c-body);
  outline-offset: 2px;
}
button,
input,
textarea {
  font-family: inherit;
  border-radius: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 35px;
  &Logo {
    display: flex;
    margin-bottom: 4px;
    justify-content: center;
    text-align: center;
  }
  &Title {
    display: flex;
    font-size: 1.52rem;
    font-weight: bold;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
    font-family: "Inter", "BlinkMacSystemFont", Arial, sans-serif;
  }
}

.appButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  padding: 0.6em 1.5em;
  white-space: nowrap;
  border: 1px solid rgba(92, 147, 187, 0.15);
  border-radius: 0.45em;
  background-color: #00bfa5;
  opacity: 0.7;
  cursor: auto;
  box-shadow: 0 3px 6px -2px rgba(100, 110, 167, 0.2);
  color: #fff;
  &.isPrimary {
    background-color: #00bfa5;
  }
  &.isSecondary {
    background-color: #bdbdbd;
    color: #242432;
    background: rgba(239, 246, 251, 0.6);
    box-shadow: 0 2px 5px -2px rgba(100, 110, 167, 0.2);
  }
  &.isWarning {
    background-color: #ff1744;
  }
  &.isDanger {
    background-color: #ff1744;
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
  .formControlWrapper {
    margin-bottom: 20px;
  }
  .form {
    &Input {
      padding: 10px;
      font-size: 16px;
    }
    &Control {
      margin-bottom: 10px;
      &Last {
        margin-bottom: 0;
      }
    }
    &Error {
      margin-bottom: 5px;
    }
  }

  .textField {
    display: block;
    background: #f1f5f9;
    width: 97%;
    transition: 0.2s;
    line-height: 1.5;
    padding: 0.65em 0 0.65em 0.6em;
    border: 1px solid rgba(92, 147, 187, 0.17);
    border-radius: 4px;
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
    background-color: #fff;
    border-radius: 16px;
    padding: 8px;
  }
  &CreateBtnContainer {
    margin: 10px;
  }
}

.appError {
  color: #ff1744;
}
</style>
