<template>
	<div class="detail">
		<div class="header" v-for="(item,index) in DetailList" :key="item.id" v-if="item.id==id">
			<router-link to="/home" class="router-link">
        		<span class="iconfont iconbaisejiantou"></span>
        	</router-link>
			<img :src="item.imgUrl" alt="">
			<div class="score">
				<div class="left">
					<span class="scores">{{item.scores}}</span>
					<span class="good">{{item.good}}</span>
					<div class="p1">
						<span>{{item.pl}}</span>
						<span>{{item.gl}}</span>
        				<span class="iconfont iconrightarrow"></span>
					</div>
				</div>
				<div class="right">
					<p>{{item.jj}}</p>
					<div class="sp">
						<span>{{item.time}}</span>
						<span>{{item.ts}}</span>
        				<span class="iconfont iconrightarrow"></span>
					</div>
				</div>
			</div>
			<div class="address">
				<span class="iconfont iconziyuan"></span>
				<span>{{item.address}}</span>
        		<span class="iconfont iconrightarrow" id="icon"></span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
    	name:"DetailHeader",
		data(){
			return{

			}
		},
		props:{
			DetailList:{
				type:Array
			},
			id:{
				type:String
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.detail
		width:100%
		position:relative
		.header
			width:100%
			.router-link
				text-decoration:none
				.iconfont
					position:absolute
					left:0.266667rem
					top:0.533333rem
					color:#fff
    		img
				width:100%
			.score
				width:100%
				display:flex
				font-size:0.373333rem
				justify-content: space-around
				.left
					width:50%
					padding-left:0.4rem
					.scores
						font-size:0.533333rem
						color:#ff9800
						padding-right:0.266667rem
					.good
						font-size:0.426667rem
						color:#ff9800
					.p1
						margin-top:0.133333rem
						font-size:0.32rem
						color:grey
						.iconfont
							margin-left:0.4rem

				.right
					width:50%
					margin-top:0.053333rem
					p
						font-size:0.453333rem
						margin-top:0.053333rem
					.sp
						margin-top:0.133333rem
						color:grey
						font-size:0.32rem
					.iconfont
							margin-left:1.866667rem
			.address
				width:100%
				font-size:0.426667rem
				margin-top:0.266667rem
			.iconfont
				margin-left:0.266667rem	
			#icon
				margin-left:3.253333rem		

</style>