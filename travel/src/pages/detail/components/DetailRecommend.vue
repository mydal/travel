<template>
	<div class="recommend">
		<div class="recom" v-for="(item,index) in Detailrecom" :key="item.id" v-if="item.id==id">
			<div class="top">
				<span class="iconfont iconiconfontzhizuobiaozhun023148">
					去哪儿推荐
				</span>
			</div>
			<div class="mp">
				<div class="number1">
					<p>{{item.p1}}</p>
					<div class="price">
						<span>{{item.price1}}</span>
						<button>预订</button>
					</div>
				</div>
				<div class="number1">
					<p>{{item.p1}}</p>
					<div class="price">
						<span>{{item.price2}}</span>
						<button>预订</button>
					</div>
				</div>	
				<div class="number1">
					<p>{{item.p1}}</p>
					<div class="price">
						<span>{{item.price3}}</span>
						<button>预订</button>
					</div>
				</div>
			</div>	
		</div>
	
	</div>
</template>
<script type="text/javascript">
	export default{
    	name:"DetailRecommend",
		data(){
			return{

			}
		},
		props:{
			Detailrecom:{
				type:Array
			},
			id:{
				type:String
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.recommend
		width:100%
		.top
			margin-left:0.533333rem
		.mp
			width:100%
			.number1
				width:100%
				font-size:0.453333rem
				display:flex
				justify-content: space-between
				p
					margin-top:0.266667rem
					line-height:0.666667rem
					margin-left:0.506667rem
				.price
					margin-top:0.746667rem
					span
						color:#ff9800
						margin-left:0.266667rem
					button
						width:2.133333rem
						height:0.8rem
						border-width:0.0rem
						border-radius:0.16rem
						color:#fff
						background-color:#ff9800

	
	

</style>