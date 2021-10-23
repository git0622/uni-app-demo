import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 100,
		carList: []
	},
	mutations: {
		changeCount(state, option) {
			state.count += option;
		},
		initCarList(state, option) {
			state.carList = option;
		},
		changeCarList(state, option) {
			let bol = state.carList.some(item => {
				if (item._id == option._id) {
					item.count += 1;
					return true;
				}
			});
			if (!bol) {
				state.carList.push(option)
			}
		}
	}
})
