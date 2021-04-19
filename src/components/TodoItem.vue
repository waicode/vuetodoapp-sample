<template>
  <div class="todoItem">
    <div class="todoItemContent">
      <div class="todoItemContentTitle">{{ title }}</div>
      <div class="todoItemContentDescription">
        {{ description }}
      </div>
    </div>
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
};
</script>

<style lang="scss" scoped>
.todo {
  &Item {
    background-color: gray;
    height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    &Content {
      &Title {
        font-weight: bold;
      }
      &Description {
        font-size: 19px;
      }
    }
  }
}
</style>
