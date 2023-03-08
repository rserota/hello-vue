<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()



onMounted( async () => {
	console.log(route.params.itemID)
})

</script>

<template>
	<div class="py-5"></div>
	<div class="container">

	</div>
</template>

<style scoped>

</style>
