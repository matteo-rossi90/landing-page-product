<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
export default{
  components:{
    Header
  }
}

</script>

<template>
  <Header/>
  <main>
    Main
  </main>
</template>

<style lang="scss" scoped>
@use './components/style/general' as *;
@use './components/style/variables' as *;

</style>
