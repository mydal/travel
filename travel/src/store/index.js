import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		city:'北京'
	},
	actions:{
		changecity(ctx,city){
			ctx.commit('changecity',city);
		}
	},
	mutations:{
		changecity(state,city){
			state.city=city;
		}
	}
})