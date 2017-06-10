<template>
  <div class="col-12 d-flex align-items-center mt-4" v-if="authenticate">
    <textarea
      class="p-3 form-control w-80"
      placeholder="Write what's on your mind"
      v-model.lazy.trim="todo"
      cols="20"
      style="resize: none">
    </textarea>
    <button
      @click.prevent="submit"
      class="m-2 ml-md-4 btn btn-outline-info w-20"
      :disabled="!isValid">Send <i class="ion-paper-airplane ml-2"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['authenticate'],
    data () {
      return {
        todo: null,
      }
    },
    methods: {
      isValid () {
        return this.todo.length > 1;
      },
      submit () {
        if(this.isValid()){
          this.$emit('addTodos', this.todo);
          this.todo = '';
        }
      }
    }
  }
</script>

<style>
button.btn .disabled {
  cursor: not-allowed;
  background: #DDD;
  color: #FFF;
  border: none;
}
@media (max-width: 575px) {
  .cHeader{
    padding: 0;
  }
}
</style>
