<template>
  <div v-if="!editMode" class="todoItem">
    <div class="todoItemContent">
      <div class="todoItemContentTitle">{{ title }}</div>
      <div class="todoItemContentDescription">
        {{ description }}
      </div>
    </div>
    <div class="todoItemButton">
      <button @click="editMode = true" class="appButton isWarning">Edit</button>
    </div>
  </div>
  <div v-else class="todoItem">
    <form class="appForm">
      <div class="formControl">
        <label class="label">Title</label>
        <input class="formInput" type="text" />
      </div>
      <div class="formControl formControlLast">
        <label class="label">Description</label>
        <textarea cols="30" rows="2" class="formInput" />
      </div>
      <div class="todoItemButton">
        <button @click="editTodo" class="appButton isWarning">Update</button>
        <button @click="deleteTodo" class="appButton isDanger">Delete</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
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
    };
  },
  methods: {
    editTodo() {},
    deleteTodo() {},
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
