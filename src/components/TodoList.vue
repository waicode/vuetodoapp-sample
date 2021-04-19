<template>
  <div class="todoList">
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :title="todo.title"
      :description="todo.description"
    />
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
</style>
