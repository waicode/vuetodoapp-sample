<template>
  <div v-if="!editMode" class="todoItem">
    <div class="todoItemContent">
      <div class="todoItemContentTitle">{{ todo.title }}</div>
      <div class="todoItemContentDescription">
        {{ todo.description }}
      </div>
    </div>
    <div class="todoItemButton">
      <button @click="editMode = true" class="appButton isWarning">Edit</button>
      <button @click="deleteTodo" class="appButton isDanger">Delete</button>
    </div>
  </div>
  <div v-else class="todoItem">
    <form class="appForm">
      <div class="formControl">
        <label class="label">Title</label>
        <input v-model="todo.title" class="formInput" type="text" />
      </div>
      <div class="formControl formControlLast">
        <label class="label">Description</label>
        <textarea
          v-model="todo.description"
          cols="30"
          rows="2"
          class="formInput"
        />
      </div>
      <div class="todoItemButton">
        <button @click.prevent="updateTodo" class="appButton isWarning">
          Update
        </button>
        <button @click.prevent="editMode = false" class="appButton isDanger">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import store from "@/store";
export default {
  props: {
    _id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      editMode: false,
      todo: {
        _id: this._id,
        title: this.title,
        description: this.description,
      },
    };
  },
  methods: {
    updateTodo() {
      store.dispatch("updateTodo", { ...this.todo });
      this.editMode = false;
    },
    deleteTodo() {
      store.dispatch("deleteTodo", this.todo._id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &Item {
    background-color: gray;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    &Content {
      margin-bottom: 5px;
      &Title {
        font-weight: bold;
      }
      &Description {
        font-size: 19px;
      }
    }
    &Button {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .appButton {
        font-size: 15px;
        margin-right: 5px;
      }
    }
  }
}
</style>
