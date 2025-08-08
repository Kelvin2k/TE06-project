<script setup>
defineOptions({ name: 'ParkingPage' })
import PageButton from './PageButton.vue'
import { useRouter } from 'vue-router'
import Header from "./Header.vue"
import Footer from "./Footer.vue"

const router = useRouter()
const goToParkingDiscovery = () => {
  router.push({ name: "ParkingDiscovery" })
}
const goToParkingPrediction = () => {
  router.push({ name: "ParkingPrediction" })
}

</script>
<template>
  <Header></Header>
  <!-- As a heading -->
  <slot name="header">
    <h1>Parking Page</h1>
  </slot>
  <slot name="mainButton">
    <div class="mainButton">
      <PageButton>
        <template v-slot:buttonUp>
          <a @click="goToParkingDiscovery">
            Parking Discovery
          </a>
        </template>
        <template v-slot:buttonDown>
          <a @click="goToParkingPrediction">Parking Prediction</a>
        </template>
      </PageButton>
    </div>
  </slot>
  <Footer></Footer>
</template>