<template>
    <div class="button d-flex flex-column align-items-center">
        <button class="buttonUp text-dark mb-3">
            <slot name="buttonUp">
                Nothing here
            </slot>
        </button>
        <button class="buttonDown text-dark">
            <slot name="buttonDown">
                Nothing here
            </slot>
        </button>
    </div>
</template>

<script setup>

</script>
