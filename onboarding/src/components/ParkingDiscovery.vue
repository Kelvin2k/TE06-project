<script setup>
import Header from './Header.vue'
import Footer from "./Footer.vue"
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
            <label for="" class="form-label me-4 text-black fs-5 ">Destination</label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
        </div>
        <div class="subtext d-flex">
            <slot name="text">
                <p>Parking area</p>
                <p>Distance</p>
                <p>Availability</p>
            </slot>
        </div>
        <div class="mb-3 d-flex">
            <label for="" class="form-label fs-5 me-1 text-black" style="width:150px">Parking area</label>
            <textarea class="form-control" name="" id="" rows="3"></textarea>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.subtext {
    display: flex;
    justify-content: space-around;
    margin-left: 200px;
}

p {
    /* margin-left: 100px; */
    color: black;
}
</style>
