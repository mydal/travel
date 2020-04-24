<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-words></city-words>
	</div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityWords from './components/Words'


	export default{
		name:'City',
		data(){
			return{

			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityWords
		}
	}
</script>
<style lang="stylus" scoped>

</style>