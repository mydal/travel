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
							{{this.$store.state.city}}
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
						<li v-for="(item,index) in hotCities" :key="item.id">
							<router-link to="/home">
								<a href="" @click="handleClick(item.name)">{{item.name}}</a>
							</router-link>
						</li>
					
					</ul>
				</div>
			</div>
			<div class="area" v-for="(item,index) in cities" :key="index" :ref="index">
				<div class="title border-topbottom">
					{{index}}
				</div>
				<div class="button-lists">
					<ul>
						<li v-for="(v,k) in item" :key="v.id">
							<router-link to="/home">
								<a href="#" @click="handleClick(v.name)">{{v.name}}</a>
							</router-link>
							
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
		props:{
			cities:Object,
			hotCities:Array,
			letter:String
		},
		mounted(){
			this.scroll=new Bscroll(this.$refs.wrapper)
		},
		watch:{
			letter(){
				console.log(this.letter);
				if(this.letter){
					const element=this.$refs[this.letter][0];
					console.log(element);
					this.scroll.scrollToElement(element);
				}
			}
		},
		methods:{
			handleClick(city){
				console.log(city);
				this.$store.dispatch('changecity',city);
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.list
		position:absolute
		top:2.4rem
		right:0
		left:0
		bottom:0
		overflow:hidden
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