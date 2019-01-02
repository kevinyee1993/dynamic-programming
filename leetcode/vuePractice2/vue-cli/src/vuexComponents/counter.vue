<template id="">
  <div class="">
    <button type="button" @click="increment">Increment</button>

    <button type="button" @click="deincrement">Deincrement</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      value: Number
    },
    methods: {
      increment: function() {
        this.$store.state.counter++;
      },
      deincrement: function() {
        this.$store.state.counter--;
      }
    }
  }
</script>

<style media="screen" scoped>

</style>
