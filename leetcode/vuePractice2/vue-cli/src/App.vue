<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
// import anotherResult from './vuexComponents/anotherResult';
import Component1 from './vueRouter/component1';
import Component2 from './vueRouter/component2';
import Component3 from './vueRouter/component3';

export default {
  name: 'app',
  components: {
    Component1,
    Component2,
    Component3

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
