<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    word: String,
})

</script>

<template>
<i>{{ word }}!</i>
</template>

<style scoped>

</style>