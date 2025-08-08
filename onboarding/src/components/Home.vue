<script setup>
defineOptions({ name: 'HomePage' })
import { useRouter } from 'vue-router'

const router = useRouter()
function goToParking() {
  router.push({ name: 'Parking' })
}
function goToDataInsight() {
  router.push({ name: 'DataInsight' })
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center mt-5">
    <h1 class="text-dark">Welcome to TE-06 – Parking Helper System</h1>
    <div class="feature d-flex flex-column align-items-end mt-5 align-items-end me-5">
      <button class="btn mb-3 px-4 text-white" @click="goToParking">Parking</button>
      <button class="btn px-2 text-white" @click="goToDataInsight">Data Insight</button>
    </div>
  </div>
</template>

<style scoped>
button {
  background-color: #156082 !important;
}

.feature {
  width: 100%;
}
</style>
