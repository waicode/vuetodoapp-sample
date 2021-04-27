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
      return this.form.title && this.form.description ? true : false;
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$emit("formSubmitted", { ...this.form });
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
