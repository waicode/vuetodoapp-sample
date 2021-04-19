<template>
  <div id="app">
    <div class="todoWrapper">
      <div class="todoContainer">
        <TodoList :todos="todos" />
        <div class="todoCreateBtnContainer">
          <div class="appButton" @click="openModal()">
            Create
          </div>
        </div>
      </div>
    </div>
    <Modal :isOpen="isModalOpen" />
  </div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";
export default {
  name: "App",
  components: {
    TodoList,
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      todos: [
        {
          _id: 1,
          title: "Walk the dog",
          description: "Go to forrest near the Zoo",
        },
        { _id: 2, title: "Buy the bread", description: "Test Test" },
        { _id: 3, title: "Learn programming", description: "Python ruby" },
      ],
    };
  },
  // this function is run automaticaly by Vue FW
  created() {
    playground();
  },
  methods: {
    openModal() {
      this.isModalOpen = !this.isModalOpen;
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

.appButton {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: #fff;
  font-weight: bold;
  &:hover {
    cursor: pointer;
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
</style>
