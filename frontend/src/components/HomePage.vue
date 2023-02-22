<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';
import axios, { AxiosHeaders } from 'axios'

const words = ref([])
const fact = ref('')
const store = useStore()

onMounted(async () => {
	console.log('homepage mounted')
	words.value.push('hello ')
	words.value.push('world')
	setTimeout(()=>{
		store.commit('addWord', {word:'hello'})
	}, 500)
	setTimeout(()=>{
		store.commit('addWord', {word:' world'})
	}, 1500)

	const response = await axios.get('https://cat-fact.herokuapp.com/facts/random')
	fact.value = response.data.text
	console.log(response)
})



</script>

<template>
	<div class="py-5">
		<span v-for="word in words">{{ word }} </span>
	</div>
	<div class="py-5">
		<span v-for="word in store.state.words">{{ word }} </span>
	</div>

	<div class="container">
		<span>{{ fact }}</span>
	</div>

</template>

<style scoped>

</style>
