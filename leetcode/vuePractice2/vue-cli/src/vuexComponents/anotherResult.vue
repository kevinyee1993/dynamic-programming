<template id="">
  <div class="">
    <p>{{ doubleValue }}</p>
    <p>{{ butts }}</p>
    <p>{{ownProp}}</p>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex';

  export default {
    computed: { ...mapGetters([
      'doubleValue',
      'butts'
    ]),
      ownProp: function() {
        return this.doubleValue * 2;
      }
    }
  }
</script>
