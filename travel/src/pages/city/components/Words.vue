<template>
	<ul class="words">
		<li v-for="(item,index) in cities" :key="index" @click="HandleClick">{{index}}</li>
	</ul>
</template>
<script>
	export default{
		name:"Words",
		data(){
			return{

			}
		},
		props:{
			cities:Object
		},
		methods:{
			HandleClick(event){
				this.$emit('sendmsg',event.target.innerText);
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.words
		width:0.8rem
		position:absolute
		top:7.6rem
		right:0
		bottom:0
		z-index:99
		font-size:0.32rem
		color:#00bcd4
		display:flex
		flex-direction:column
		justify-content:center
		align-items:center
</style>