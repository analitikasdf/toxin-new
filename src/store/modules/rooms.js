import axios from 'axios'

export default {
	state: {
		roomsList: []
	},
	mutations: {
		setRooms(state, item) {
			state.roomsList = item
			state.roomsList.map(item => {
				let validKeys = [ 'Number', 'Lux', 'Price' ]
				Object.keys(item).forEach((key) => validKeys.includes(key) || delete item[key])
			})
		}
	},
	actions: {
		roomsLoad({commit}) {
			axios.get(`${process.env.VUE_APP_BASE_URL}/rooms`, {
			})
			.then(response => {
				// Handle success.
				// console.log(response.data);
				commit('setRooms', response.data)
			})
			.catch(error => {
				// Handle error.
				console.log('An error occurred:', error.response);
			});
		}
	},
	getters: {		
	}
}