<template id="">
  <div class="">
    {{ name }}
    <server :name="name" :test="test"></server>

    <button type="button" @click="name = 'kelving'" name="button"></button>
  </div>
</template>

<script type="text/javascript">
  import Server from './Server';
  export default {
    components: {
      server: Server
    },
    data: function() {
      return {
        name: 'kelving'
      }
    },
    methods: {
      test: function() {
        this.name = "melving"
      }
    }
  }
</script>
