<script setup>
	import Navbar from './components/Navbar.vue'
	const data = {greeting:'hi', place:'home'}
</script>

<template>
	<Navbar/>
	<router-view :key="$route.fullPath"></router-view>
</template>

<style scoped>
</style>
