<template id="">
  <div class="">
    <server v-for="info in serverInfo" :serverID="info.id" :status="info.status"></server>

    <p>Selected Server: {{ this.$store.state.selectedServer }}</p>
    <button type="button" @click="fixServer(selectedServer)">Fix Selected Server</button>
  </div>
</template>

<script type="text/javascript">
  import server from './servers';
  import { mapMutations } from 'vuex';

  export default {
    components: {
      server
    },
    computed: {
        serverInfo: function() {
          return this.$store.state.servers;
        },
        selectedServer: function() {
          return this.$store.state.selectedServer
        }
    },
    methods: mapMutations(['fixServer'])
  }
</script>
