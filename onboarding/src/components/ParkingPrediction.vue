<script setup>
import ParkingDiscovery from './ParkingDiscovery.vue'
</script>
<template>
  <ParkingDiscovery>
    <template v-slot:header>
      <h1>Parking Prediction</h1>
    </template>
    <template v-slot:text>
      <p>Parking area</p>
      <p>Adress</p>
    </template>
  </ParkingDiscovery>
</template>

<style scoped>
p {
  color: black;
  width: 180px;
}
</style>
