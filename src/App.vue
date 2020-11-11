<template>
  <div id="app">
    <Fam2020 msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Fam2020 from './components/Fam2020.vue'

export default {
  name: 'App',
  components: {
    Fam2020
  }
}
</script>

<style>
  .background-1 {
      position:absolute;
      top: 190px;
      width: 250px
  }

  .background-2 {
      position:absolute;
      top:0px; 
      left:270px;
      width:160px
  }

  .background-3 {
      position:absolute; top:0px; right:0; width:340px
  }
</style>

