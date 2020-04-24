<template>
	<div class="header">
		<router-link to="/home">
            <span class="iconfont iconleftarrow arrow"></span>
		</router-link>
		城市选择
	</div>
</template>
<script>
export default{
	name:'Header',
	data(){
		return{

		}
	}
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/styles/other.styl"
	.header
		width:100%
		height:1.066667rem
		background-color:$bgColor
		text-align:center
		line-height:1.066667rem
		color:#fff
		font-size:0.373333rem
		position:relative
		.arrow
			position:absolute
			top:0;
			left:0.533333rem
			color:#fff
			width:0.64rem
			height:0.64rem
			text-decoration:none

</style>