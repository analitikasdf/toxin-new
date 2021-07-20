import { createStore } from 'vuex'
import menu from '../store/modules/menu'
import footer from '../store/modules/footer'
import checkIn from '../store/modules/checkIn'
import logIn from '../store/modules/logIn'
import rooms from '../store/modules/rooms'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    menu, footer, checkIn, logIn, rooms
  }
})
