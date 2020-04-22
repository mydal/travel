<template>
	<div class="recommend">
		<div class="like">
			<img id="img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
			<p>猜你喜欢</p>
		</div>
		<div class="item" v-for="(item,index) in recommendList" :key="item.id">
			<img :src="item.pic" alt="">
			<div class="info">
				<h3 class="title">{{item.title}}</h3>
				<p class="conent">{{item.conent}}</p>
				<button class="btn">查看详情</button>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'HomeRecommend',
		data(){
			return {
				recommendList:[
					{
						id:1,
						pic:"http://img1.qunarzz.com/sight/p0/1910/6a/6a22d154133b1422a3.water.jpg_200x200_eebf77fd.jpg",
						title:"北京杜莎夫人蜡像馆",
						conent:"欢迎来到北京杜莎夫人蜡像馆独有的'中国精神'主题展区！"
					},
					{
						id:2,
						pic:"http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg",
						title:"古北水镇",
						conent:"古北口，地处京师咽喉要塞，正黄旗在此守卫古北雄关。"
					},
					{
						id:3,
						pic:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
						title:"故宫",
						conent:"还记得影视剧中，皇帝上朝的金銮殿嘛？金銮殿名为太和殿，是皇帝登基和举行大典的地方。"
					},
					{
						id:4,
						pic:"http://img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_200x200_af2a01b1.jpg",
						title:"太平洋海底世界",
						conent:"海底隧道是太平洋海底世界的主体部分,采用封闭式环形亚克力透明隧道设计。"
					}
				]

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