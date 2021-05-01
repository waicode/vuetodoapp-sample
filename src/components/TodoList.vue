<template>
  <div class="todoList">
    <div v-if="todos && todos.length > 0">
      <TodoItem
        v-for="todo in todos"
        :key="todo._id"
        :_id="todo._id"
        :title="todo.title"
        :description="todo.description"
      />
    </div>
    <div v-else class="noTodos">
      👇 TODOを登録してね
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ["todos"],
};
</script>

<style lang="scss" scoped>
.todoList {
  flex: 1;
}
.noTodos {
  padding: 20px;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}
</style>
