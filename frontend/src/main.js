import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import router from './router'


const store = createStore({
	state () {
		return {
			words : []
		}
	},
	mutations: {
		addWord (state, payload) {
			state.words.push(payload.word)
		}
	}
})

createApp(App).use(router).use(store).mount('#app')