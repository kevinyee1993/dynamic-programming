<template id="">
  <div class="">
    <h1>Vuex</h1>
    <p>Counter is: {{ counter }}</p>
  </div>

</template>

<script type="text/javascript">
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      }
    }
  }
</script>

<style media="screen" scoped>

</style>
