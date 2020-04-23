<template>
		<div class="HomeWeek">
			<div class="week">
				<p>周末去哪儿</p>
			</div>
			<div class="item" v-for="(item,index) in recommendList" :key="item.id">
				<img :src="item.pic" alt="">
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
				recommendList:[
					{
						id:1,
						pic:"http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
						title:"京城周末撒欢",
						conent:"在帝都过周末，不仅仅是城中游！"
					},
					{
						id:2,
						pic:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
						title:"寻找北京的皇城范儿",
						conent:"数百年的宫廷庙宇，至今依旧威严霸气"
					},
					{
						id:3,
						pic:"http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
						title:"京城溜娃必去",
						conent:"德智体美劳全面发展的亲子日，这些地方该去看看…"
					},
					{
						id:4,
						pic:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
						title:"帝都必打卡",
						conent:"来北京必去的景点非这些地方莫属。"
					}
				]
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