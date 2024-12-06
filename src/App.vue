<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
export default{
  components:{
    Header,
    Banner,
  }
}

</script>

<template>
  <Header/>
  <main>

    <section>
      <Banner/>
    </section>
    
  </main>
</template>

<style lang="scss">
@use './components/style/general' as *;
@use './components/style/variables' as *;

//proprietà body

p,
.title,
.product-name {
    font-family: $h-font;
    font-weight: $t-weight;
}

</style>
