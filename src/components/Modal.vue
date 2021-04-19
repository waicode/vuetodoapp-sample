<template>
  <div class="modal" :class="{ isActive: isOpen }">
    <div class="modalContent">
      <span class="close" @click="emitCloseModal()">&times;</span>
      <p>Modal Window</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    emitCloseModal() {
      this.$emit("modalClosed", { value: "Just testing" });
    },
  },
};
</script>
<style lang="scss" scoped>
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
  }
  &.isActive {
    display: block;
  }
}
</style>
