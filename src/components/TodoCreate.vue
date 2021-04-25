<template>
  <Modal>
    <form class="appForm">
      <div class="formControl">
        <label class="label">Title</label>
        <input v-model="form.title" class="formInput" type="text" />
      </div>
      <div class="formControl">
        <label class="label">Description</label>
        <textarea
          v-model="form.description"
          cols="30"
          rows="5"
          class="formInput"
        />
      </div>
      <button @click="createTodo()" type="button" class="appButton isPrimary">
        Confirm
      </button>
    </form>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
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
