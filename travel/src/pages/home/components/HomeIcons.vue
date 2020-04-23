<template>
	<div class="icons">
		<div class="icon" v-for="(item,index) in iconsList" :key="item.id">
			<img :src="item.imgUrl" alt="" class="icon-pic">
			<p>{{item.name}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'HomeIcons',
		data(){
			return{
				

			}
		},
		props:{
			iconsList:{
				type:Array

			}
		}
	}
</script>
<style lang="stylus" scoped>
	.icons
		width:100%
		height:5.066667rem
		display:flex
		flex-wrap:wrap
		justify-content:space-around
		align-items:center
		font-size:0.373333rem
		.icon
			widht:25%
			display:flex
			flex-direction:column
			justify-content:space-around
			align-items:center
			.icon-pic
				widht:2.4rem
				height:2.4rem
				margin-top:0.266667rem
</style>