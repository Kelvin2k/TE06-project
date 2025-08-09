<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="header">
      <slot name="header">
        <h1>Parking Discovery</h1>
      </slot>
    </div>
    <div class="mb-5 d-flex">
      <label for="" class="form-label me-4 text-black fs-5">Destination</label>
      <input
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
      />
    </div>

    <div class="mb-3 d-flex">
      <label for="" class="form-label me-4 fs-5 text-black d-flex align-items-center"
        >Parking area</label
      >
      <div class="content_left w-100">
        <div class="subtext d-flex justify-content-around">
          <slot name="text">
            <p>Parking area</p>
            <p>Distance</p>
            <p>Availability</p>
          </slot>
        </div>
        <div class="parking_result"></div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.subtext {
  display: flex;
  justify-content: space-around;
  /* margin-left: 200px; */
}

p {
  /* margin-left: 100px; */
  color: black;
}
</style>
