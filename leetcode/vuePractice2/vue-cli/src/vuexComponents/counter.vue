<template id="">
  <div class="">
    <button type="button" @click="increment">Increment</button>

    <button type="button" @click="testMethod">Deincrement</button>
  </div>
</template>

<script type="text/javascript">
  import { mapMutations } from 'vuex';

  export default {
    props: {
      value: Number
    },
    methods: {...mapMutations([
      'increment',
      'decrement'
    ]),
       testMethod: function() {
         console.log("hello");
       }
    }
  }
</script>

<style media="screen" scoped>

</style>
