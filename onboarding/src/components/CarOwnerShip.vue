<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<template>
  <Header></Header>
  <slot>
    <h1>Car Ownership</h1>
    <div class="chart d-flex justify-content-center">
      <h2 class="des fs-4 mx-3 d-flex align-items-center">Registered vehicle</h2>
      <img
        src="https://chartingtransport.com/wp-content/uploads/2025/01/image-14.png"
        class="w-50 h-auto"
        alt="A chart showing motor vehicle ownership in Australian cities from 2006-2016"
      />
    </div>
  </slot>
  <Footer></Footer>
</template>

<style scoped></style>
