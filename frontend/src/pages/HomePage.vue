<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useStore } from 'vuex';
import axios from 'axios'
import Word from '../components/Word.vue'
const words = ref([])
const contacts = ref([])
const fact = ref('')
const store = useStore()
const baseURL = 'https://address-book.trala.com:8080/v1'
const getFreshData = async ()=>{
	const response = await axios.get(`${baseURL}/contacts`)
	console.log(response.data)
	contacts.value = response.data
}
onMounted(async () => {
	console.log('homepage mounted')
	// words.value.push('hello ')
	// words.value.push('world')
	// setTimeout(()=>{ store.commit('addWord', {word:'hello'}) }, 500)
	// setTimeout(()=>{ store.commit('addWord', {word:' world'}) }, 1500)

	// const response = await axios.get('https://cat-fact.herokuapp.com/facts/random')
	// fact.value = response.data.text
	// getFreshData()


})

const editedContact = ref({})
const editedContactFirstName = ref('')
const editedContactLastName = ref('')
const editedContactEmail = ref('')
const editedContactBirthDate = ref('')

const NewContactFirstName = ref('')
const NewContactLastName = ref('')
const NewContactEmail = ref('')
const NewContactBirthDate = ref('')
const editContact = (contact)=>{
	console.log('editing ', contact)
	editedContact.value = {...contact}
	editedContactFirstName.value  = contact.first_name
	editedContactLastName.value  = contact.last_name
	editedContactEmail.value  = contact.email
	editedContactBirthDate.value  = contact.birth_date
}

const submitEditContact = async () =>{
	console.log(editedContactFirstName)
	const bdayParts = editedContactBirthDate.value.split('T')
	const response = await axios.put(`${baseURL}/contact/${editedContact.value.id}`, {
		email: editedContactEmail.value,
		first_name: editedContactFirstName.value,
		last_name: editedContactLastName.value,
		birth_date: bdayParts[0],
	})
	await getFreshData()

	console.log('put response: ', response.data)
}

const submitNewContact = async () =>{
	console.log(NewContactFirstName)
	const bdayParts = NewContactBirthDate.value.split('T')
	const response = await axios.post(`${baseURL}/contact`, {
		email: NewContactEmail.value,
		first_name: NewContactFirstName.value,
		last_name: NewContactLastName.value,
		birth_date: bdayParts[0],
	})
	await getFreshData()

	console.log('put response: ', response.data)
}
const appData = reactive({})
appData.foo = 'foo'
appData.bar = 'bar'


console.log(appData)
console.log(JSON.stringify(appData))
for ( let key in appData ) {
	console.log(key, appData[key])
}
axios.post('/test', appData)
</script>

<template>
	<!-- <div class="py-5"> <span v-for="word in words">{{ word }} </span> </div> -->
	<!-- <div class="py-5"> <span v-for="word in store.state.words">{{ word }} </span> </div> -->
	<div> {{ appData.foo }} </div>
	<div> {{ appData.bar }} </div>
	<div> <input v-model="appData.foo"></div>
	<hr>
	<div class="container"> 
		<div class="row">
			<div class="col-6">
				<ul class="py-5">
					<li @click.prevent="editContact(contact)" v-for="contact in contacts">{{ contact.first_name }} {{ contact.last_name }} {{ contact.email }} </li> 
				</ul>
			</div>
			<div class="col-6">
				<form @submit="submitEditContact">
					<input v-model="editedContactFirstName">
					<input v-model="editedContactLastName">
					<input v-model="editedContactEmail">
					<input type="datetime" v-model="editedContactBirthDate">
					<input type="submit" value="Submit">

				</form>
			</div>

			<hr>
				<form @submit="submitNewContact">
					<input v-model="NewContactFirstName">
					<input v-model="NewContactLastName">
					<input v-model="NewContactEmail">
					<input type="datetime" v-model="NewContactBirthDate">
					<input type="submit" value="Submit">
				</form>

		</div>
	</div>

</template>

<style scoped>

</style>
