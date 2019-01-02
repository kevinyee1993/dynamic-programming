<template id="">
  <p>{{ value }}</p>
</template>

<script type="text/javascript">
  export default {
    computed: {
      value() {
        return this.$store.getters.doubleValue;
      }
    }
  }
</script>
