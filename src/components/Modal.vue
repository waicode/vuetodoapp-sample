<template>
  <div>
    <div class="appButton" @click="isOpen = true">
      Create
    </div>
    <div class="modal" :class="{ isActive: isOpen }">
      <div class="modalContent">
        <span class="close" @click="isOpen = false">
          &times;
        </span>
        <form class="appForm">
          <div class="formControl">
            <label class="label">Title</label>
            <input v-model="form.title" class="formInput" type="text" />
          </div>
          <div class="formControl">
            <label class="label">Description</label>
            <input v-model="form.description" class="formInput" type="text" />
          </div>
          <button
            @click="createTodo()"
            type="button"
            class="appButton isPrimary"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createTodo() {
      console.log(this.form);
    },
  },
};
</script>
<style lang="scss" scoped>
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
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
}
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &Content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 3px;
    width: 80%;
    text-align: left;
  }
  &.isActive {
    display: block;
  }
}
</style>
