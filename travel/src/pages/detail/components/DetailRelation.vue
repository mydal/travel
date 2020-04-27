<template>
	<div>
		<h4>看了该景点的人还看了</h4>
		<div class="rela" v-for="(item,index) in Detailrelation" :key="item.id">
				<hr>
			<div class="relation">
				<div class="img">
					<img :src="item.img" alt="">
				</div>
				<div class="js">
					<p>{{item.name}}</p>
					<div class="jss">
						<span class="iconfont">&#xe601;</span>
						<span class="pl">{{item.pl}}</span>
						<p class="p1">{{item.address}}</p>
					</div>
				</div>
				<div class="price">
					<p>{{item.price}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		props:{
			Detailrelation:{
				type:Array
			}
		}
	}
</script>
<style lang="stylus" scoped>
	h4
		font-size:0.426667rem
		margin-left:0.533333rem
		margin-top:0.533333rem
	hr
		background-color:grey
		height:0.026667rem
		border:none
	.rela
		width:100%
		.relation
			margin-top:0.266667rem
			margin-left:0.533333rem
			margin-right:0.533333rem
			display:flex
			justify-content: space-between

			img
				width:2.666667rem
				height:2.666667rem
			.js
				font-size:0.426667rem
				margin-left:-0.266667rem
				.iconfont
					color:#ff9800
				.pl
					color:grey
					font-size:0.32rem
				.p1
					font-size:0.32rem
					color:grey
					margin-top:0.266667rem
				.jss
					margin-top:1.066667rem	

			.price
				font-size:0.426667rem
				color:#ff9800

</style>