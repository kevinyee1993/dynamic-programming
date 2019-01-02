<template id="">
  <div class="">
  <p>Server {{ name }}</p>
  <button type="button" @click="test" name="button"></button>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['name', 'test'],
    methods: {
      fart: function() {
        this.name = "farts";
        this.$emit('changeName', this.name);
      }
    }
  }
</script>

<style scoped>
</style>
