<template>
	<div class="icons">
		<div class="icon" v-for="(item,index) in Icons" :key="item.id">
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
				Icons:[
					{
						id:1,
						name:"景点门票",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"

					},
					{
						id:2,
						name:"颐和园",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png"

					},
					{
						id:3,
						name:"北京园博园",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png"

					},
					{
						id:4,
						name:"圆明园",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png"

					},
					{
						id:5,
						name:"一日游",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png"

					},
					{
						id:6,
						name:"古北水镇",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png"

					},
					{
						id:7,
						name:"香山公园",
						imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png"

					},
					{
						id:8,
						name:"中国马镇",
						imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png"

					},
					


				]

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