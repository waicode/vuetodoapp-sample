<template>
  <div v-if="!editMode" class="todoItem">
    <div class="todoItemContent">
      <div class="todoItemContentTitle">{{ todo.title }}</div>
      <div class="todoItemContentDescription">
        {{ todo.description }}
      </div>
    </div>
    <div class="todoItemButton">
      <button @click="editMode = true" class="appButton isPrimary">
        編集
      </button>
      <button @click="deleteTodo" class="appButton isDanger">削除</button>
    </div>
  </div>
  <div v-else class="todoItem">
    <form class="appForm">
      <div class="formControlWrapper">
        <div class="formControl">
          <input
            placeholder="タイトル"
            v-model="todo.title"
            class="formInput textField"
            type="text"
          />
        </div>
        <div class="formControl formControlLast">
          <textarea
            placeholder="メモ"
            v-model="todo.description"
            cols="30"
            rows="2"
            class="formInput textField"
          />
        </div>
      </div>
      <div class="todoItemButton">
        <button @click.prevent="updateTodo" class="appButton isPrimary">
          完了
        </button>
        <button @click.prevent="editMode = false" class="appButton isSecondary">
          キャンセル
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
      const result = window.confirm("削除します。よろしいですか？");
      if (result) {
        store.dispatch("deleteTodo", this.todo._id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &Item {
    background-color: #fff;
    border: 2px solid #fafafa;
    margin: 10px;
    padding: 16px;
    border-radius: 16px;
    font-size: 23px;
    box-shadow: 0 2px 4px rgba(67, 133, 187, 0.07);
    &Content {
      margin-bottom: 5px;
      &Title {
        font-size: 20px;
        font-weight: bold;
      }
      &Description {
        font-size: 14px;
      }
    }
    &Button {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .appButton {
        font-size: 15px;
        margin-right: 8px;
      }
    }
  }
}
</style>
