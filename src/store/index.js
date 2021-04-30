const store = {
  state: {
    todos: [
      {
        _id: 1,
        title: "Walk the dog",
        description: "Go to forrest near the Zoo",
      },
      { _id: 2, title: "Buy the bread", description: "Test Test" },
      { _id: 3, title: "Learn programming", description: "Python ruby" },
    ],
  },
  actions: {
    createTodo(state, todo) {
      todo._id = Math.random()
        .toString(36)
        .substr(2, 7);
      state.todos.push(todo);
    },
  },
  dispatch: function(action, payload) {
    if (!this.actions[action])
      throw new Error(`Action ${action} is not defined in the store.`);
    return this.actions[action](this.state, payload);
  },
};

export default store;
