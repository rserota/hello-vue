<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div id="navbar" class="py-2">
		<router-link to="/">Home <img class="logo" src="/cat.jpg"></router-link>
		<router-link v-for="pageNum in [1,2]" :to="`/details/${pageNum}`">Page {{ pageNum }} </router-link>
	</div>
</template>

<style scoped>
	#navbar {
		background-color: #339;
		font-size: 2.5rem;
	}

	.logo {
		height:40px;
		width:40px;
		border-radius: 999px;
	}
</style>
