<template id="">
  <div v-if="selectedServer === serverID" class="selected">
    <p>Server {{ serverID }}</p>
    <p>Status: {{ status }}</p>
  </div>

  <div v-else class="server" @click="selectServer(serverID)">
    <p>Server {{ serverID }}</p>
    <p>Status: {{ status }}</p>
  </div>
</template>

<script type="text/javascript">
  import { mapMutations } from 'vuex';

  export default {
    props: ['serverID', 'status'],
    methods: mapMutations(['selectServer']),
    computed: {
      selectedServer: function() {
        return this.$store.state.selectedServer;
      }
    }
  }
</script>

<style media="screen">
  .server {
    border: 1px solid black;
    margin: 10px;
    padding: 5px;
  }

  .selected {
    border: 2px solid red;
    margin: 10px;
    padding: 5px;
  }
</style>
