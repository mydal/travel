<template>
	<div class="recommend">
		<div class="like">
			<img id="img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
			<p>猜你喜欢</p>
		</div>
		<div class="item" v-for="(item,index) in recommendList" :key="item.id">
			<img :src="item.imgUrl" alt="">
			<div class="info">
				<h3 class="title">{{item.title}}</h3>
				<p class="conent">{{item.desc}}</p>
				<router-link :to="{name:'Detail',params:{id:item.id}}">
					<button class="btn">查看详情</button>	
				</router-link>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'HomeRecommend',
		data(){
			return {
				

			}
		},
		props:{
			recommendList:{
				type:Array
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.recommend
		margin-top:1.333333rem
	.like
		width:100%
		height:0.8rem
		font-size:0.533333rem
		display:flex
		margin-top:1.866667rem
		#img
			width:0.533333rem
			height:0.533333rem

	.item
		width:100%
		height:2.666667rem
		background-color:#fff
		padding-bottom:0.266667rem
		display:flex
		margin-top:0.266667rem
		font-size:0.373333rem
		img
			width:2.666667rem
			height:2.666667rem
		.info
			flex:1
			padding-left:0.32rem
			display:flex
			flex-direction:column
			justify-content:space-around
			.btn
				width:2.133333rem
				height:0.986667rem
				border-width:0.0rem
				border-radius:0.16rem
				background: #1E90FF
				color:#fff
			.conent
				font-size:0.32rem
			.title
				font-size:0.48rem
</style>