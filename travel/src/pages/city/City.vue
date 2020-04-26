<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
		<city-words :cities="cities" @sendmsg="handleClick"></city-words>
	</div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityWords from './components/Words'
import axios from 'axios'
	export default{
		name:'City',
		data(){
			return{
				cities:{},
				hotCities:[],
				letter:''

			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityWords
		},
		methods:{
			getCityInfo(){
				axios.get('/static/mock/city.json').then((res)=>{
					if(res.data.ret&&res.data.data){
						this.cities=res.data.data.cities;
						this.hotCities=res.data.data.hotCities;
					}
					console.log(this.hotCities);
					
				})
			},
			handleClick(res){
				this.letter=res;
			}
		},
		mounted(){
			this.getCityInfo();
		}
	}
</script>
<style lang="stylus" scoped>

</style>