<script setup>
import Parking from './Parking.vue'
import PageButton from './PageButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToCarOwnerShip = () => {
    router.push({ name: 'CarOwnerShip' })
}
const goToCBDPopulationTrend = () => {
    router.push({ name: 'CBDPopulationTrend' })
}
</script>

<template>
    <Parking>
        <template v-slot:header>
            <h1>Data Insight Page</h1>
        </template>
        <template v-slot:mainButton>
            <PageButton>
                <template v-slot:buttonUp>
                    <a @click="goToCarOwnerShip">Car OwnerShip</a>
                </template>
                <template v-slot:buttonDown>
                    <a @click="goToCBDPopulationTrend">CBD Population Trend</a>
                </template>
            </PageButton>
        </template>
    </Parking>
</template>

<style scoped></style>