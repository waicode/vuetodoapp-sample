<template>
  <Modal ref="modal">
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
      <button @click="submitForm()" type="button" class="appButton isPrimary">
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
  computed: {
    isFormValid() {
      return this.form.title.length > 8 && this.form.description.length > 10
        ? true
        : false;
    },
    modal() {
      return this.$refs.modal;
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$emit("formSubmitted", { ...this.form });
        this.modal.close();
        this.resetForm();
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    },
  },
};
</script>
