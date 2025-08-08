<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
    router.go(-1)
}
</script>
<template>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand header" @click="goBack">Back</a>
        </div>
    </nav>
</template>