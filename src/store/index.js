import Vue from "vue";

const getRandomId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 7);
};

const LSKEY_TODOS = "todo_items";
const getTodosFromLocalStorage = () => {
  return localStorage.getItem(LSKEY_TODOS);
};
const setTodosToLocalStorage = (todos) => {
  localStorage.setItem(LSKEY_TODOS, JSON.stringify(todos));
};

const INITIAL_DATA = {
  todos: [
    {
      _id: getRandomId(),
      title: "🦮 犬と散歩する",
      description: "帰りにスーパーに寄る",
    },
    { _id: getRandomId(), title: "🥛 牛乳を買う", description: "" },
    {
      _id: getRandomId(),
      title: "📨 メールを確認する",
      description: "すぐ返信できない時はスターを付ける",
    },
  ],
};

const store = {
  state: {
    todos: [],
  },
  actions: {
    initStore(state) {
      const todos = getTodosFromLocalStorage();
      if (!todos) {
        Vue.set(state, "todos", INITIAL_DATA.todos);
      } else {
        Vue.set(state, "todos", JSON.parse(todos));
      }
      return state.todos;
    },
    createTodo(state, todo) {
      todo._id = getRandomId();
      state.todos.push(todo);
      return state.todos;
    },
    updateTodo(state, todoToUpdate) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoToUpdate._id;
      });
      Vue.set(state.todos, index, todoToUpdate);
      return state.todos;
    },
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      state.todos.splice(index, 1);
      return state.todos;
    },
  },
  dispatch: function(action, payload) {
    if (!this.actions[action])
      throw new Error(`Action ${action} is not defined in the store.`);
    const result = this.actions[action](this.state, payload);
    if (!result) return;
    setTodosToLocalStorage(result);
    return result;
  },
};

export default store;
