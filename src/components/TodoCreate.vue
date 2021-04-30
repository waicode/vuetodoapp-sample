<template>
  <Modal ref="modal">
    <form class="appForm">
      <div class="formControl">
        <label class="label">タイトル</label>
        <input v-model="form.title" class="formInput" type="text" />
      </div>
      <div class="formControl formControlLast">
        <label class="label">メモ</label>
        <textarea
          v-model="form.description"
          cols="30"
          rows="5"
          class="formInput"
        />
      </div>
      <div class="appError">
        <div class="formError">
          {{ formError }}
        </div>
      </div>
      <button @click="submitForm()" type="button" class="appButton isPrimary">
        登録する
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
      formError: "",
    };
  },
  computed: {
    isFormValid() {
      return this.form.title.length > 0 ? true : false;
    },
    modal() {
      return this.$refs.modal;
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.formError = "";
        this.$emit("formSubmitted", { ...this.form });
        this.modal.close();
        this.resetForm();
      } else {
        this.formError = "タイトルは必須です";
      }
    },
    resetForm() {
      this.form.title = "";
      this.form.description = "";
    },
  },
};
</script>
<style lang="scss" scoped></style>
