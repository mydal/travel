<template>
		<div class="HomeWeek">
			<div class="week">
				<p>周末去哪儿</p>
			</div>
			<div class="item" v-for="(item,index) in weekList" :key="item.id">
				<img :src="item.imgUrl" alt="">
				<div class="info">
					<h3 class="title">{{item.title}}</h3>
					<p class="conent">{{item.conent}}</p>
				</div>
			</div>
		</div>
</template>
<script>
	export default{
		name:"HomeWeek",
		data(){
			return{
				
			}
		},
		props:{
			weekList:{
				type:Array
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.week
		margin-top:0.266667rem
		font-size:0.533333rem
	.item
		width:100%
		margin-top:0.266667rem
		padding-bottom:0.266667rem
	.item img
		width:100%
		height:3.866667rem
	.title
		font-size:0.426667rem
	.conent
		font-size:0.32rem
		margin-top:0.266667rem

</style>