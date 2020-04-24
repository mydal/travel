<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">
					当前城市
				</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							北京
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">
					热门城市
				</div>
				<div class="button-lists">
					<ul>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">上海</a>
						</li>
						<li>
							<a href="#">天津</a>
						</li>
						<li>
							<a href="#">杭州</a>
						</li>
						<li>
							<a href="#">苏州</a>
						</li>
						<li>
							<a href="#">广州</a>
						</li>
						<li>
							<a href="#">西安</a>
						</li>
						<li>
							<a href="#">深圳</a>
						</li>
						<li>
							<a href="#">厦门</a>
						</li>
						<li>
							<a href="#">三亚</a>
						</li>
						<li>
							<a href="#">大理</a>
						</li>
						<li>
							<a href="#">桂林</a>
						</li>
					
					</ul>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">
					A
				</div>
				<div class="button-lists">
					<ul>
						<li>
							<a href="#">阿勒泰</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">
					A
				</div>
				<div class="button-lists">
					<ul>
						<li>
							<a href="#">阿勒泰</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
						<li>
							<a href="#">北京</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
	export default{
		data(){
			return{

			}
		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.wrapper)
		}
	}
</script>
<style lang="stylus" scoped>
	.list
		width:100%
		background-color:#eee
		font-size:0.426667rem
		.title
			line-height:0.933333rem
			padding-left:0.266667rem
		.button-list
			width:100%
			display:flex
			align-items:center
			.button
				width:3.333333rem
				height:1.066667rem
				text-align:center
				line-height:1.066667rem
				border:1px solid #ccc
				font-size:0.48rem
				background-color:#fff
		.button-lists
			width:100%
			ul li
				width:31.9%
				height:1.066667rem
				line-height:1.066667rem
				text-align:center
				border:1px solid #eee
				display:inline-block
				background-color:#fff
				a
					text-decoration:none
					color:#000



</style>