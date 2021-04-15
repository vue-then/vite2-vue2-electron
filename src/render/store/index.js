import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		sa: 1,
	},
	getters: {
		sa: (state) => state.sa,
	},
	mutations: {},
	actions: {},
	modules: {},
});
