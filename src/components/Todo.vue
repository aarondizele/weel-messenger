<template>
  <div class="mt-4">
    <div class="card w-100">
      <div class="card-block">
        <slot></slot>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <i class="ml-2 ion-edit"></i>
        <i class="ml-2 ion-checkmark-round alert-info"></i>
        <i class="ml-2 ion-refresh alert-info"></i>
        <i class="ml-2 ion-backspace-outline alert-danger"
           @click.native="deleteTodo(todo)"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    methods: {
      deleteTodo(todo) {
        return this.$emit('todoDeleted', todo);
      }
    }
  }
</script>

<style scoped>
  i{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    /*border: 1px solid #ccc;*/
    border-radius: 2px;
  }
</style>
