<template>
  <Modal ref="modal">
    <div class="todoCreateTitle">新しいTODOを登録</div>
    <form class="appForm">
      <div class="formControlWrapper">
        <div class="formControl">
          <input
            placeholder="タイトル"
            v-model="form.title"
            class="formInput textField"
            type="text"
          />
        </div>
        <div class="formControl formControlLast">
          <textarea
            v-model="form.description"
            cols="30"
            rows="5"
            class="formInput textField"
            placeholder="メモ"
          />
        </div>
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
<style lang="scss" scoped>
.todoCreateTitle {
  font-size: 1.28rem;
  font-weight: bold;
  margin-bottom: 4px;
  justify-content: left;
  text-align: left;
  font-family: "Inter", "BlinkMacSystemFont", Arial, sans-serif;
}
</style>
