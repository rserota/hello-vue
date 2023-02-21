<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const words = ref([])

onMounted(async () => {
	console.log('homepage mounted')
	words.value.push('hello ')
	words.value.push('world')
})



</script>

<template>
	<div class="py-5">
		<span v-for="word in words">{{ word }} </span>
	</div>

	<div class="container">
	</div>

</template>

<style scoped>

</style>
