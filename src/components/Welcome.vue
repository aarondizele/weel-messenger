<template>
  <div class="col-sm-12 mt-3 mb-3 card text-center no-gutters welcome">
    <transition appear
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <div class="card-block">
        <h4>Welcome to <br><kbd>Weel. Messenger</kbd></h4>
        <span class="text-success">Please, log in to access on the chatroom</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@media (max-width: 767px) {
  .welcome{
    padding: 30px;
  }
}
</style>
