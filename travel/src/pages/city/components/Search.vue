<template>
	<div class="search">
		<input type="text" class="inp" v-model="keyword" placeholder="请输入搜索内容">
		<div class="search-content" v-show="keyword">
			<ul>
				<li v-for="(item,index) in list" class="search-item border-bottom">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="!list.length">没有您匹配的数据</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Search',
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				list:[],
				timer:null

			}
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer);
				}
				if(!this.keyword){
					this.list=[];
					return;
				}
				this.timer=setTimeout(()=>{
					const result=[];
					for(let i in this.cities){
						this.cities[i].forEach((value)=>{
							if(value.spell.indexOf(this.keyword)>-1||(value.name.indexOf(this.keyword)>-1)){
								result.push(value);
							}
						})
					}
					this.list=result;
				},100)
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~@/assets/styles/other.styl"
	.search
		width:100%
		box-sizing:border-box
		height:1.333333rem
		background-color:$bgColor
		padding:0 0.133333rem
		.inp
			width:100%
			height:0.8rem	
			border:0
			outline:none
			margin:0
			padding:0.266667rem
			box-sizing:border-box
		.search-content
			position:absolute
			top:2.3rem
			left:0
			right:0
			bottom:0
			overflow:hidden
			z-index:99
			.search-item
				height:0.6rem
				line-height:0.6rem
				background-color:#fff
				font-size:0.32rem

</style>