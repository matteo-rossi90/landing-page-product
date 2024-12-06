<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import Advantages from './components/Advantages.vue';

export default{
  components:{
    Header,
    Banner,
    Advantages
  }
}

</script>

<template>
  <Header/>
  <main>

    <section>
      <Banner/>
    </section>

    <section class="spacing">
      <Advantages/>
    </section>

  </main>
</template>

<style lang="scss">
@use './components/style/general' as *;
@use './components/style/variables' as *;

header,
body {
    color: $main-color;
}

//proprietà body

p,
.title,
.product-name {
    font-family: $h-font;
    font-weight: $t-weight;
}

.text-box{
    padding: 1.5rem;
}

</style>
