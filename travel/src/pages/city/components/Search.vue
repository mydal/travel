<template>
	<div class="search">
		<input type="text" class="inp" placeholder="请输入搜索内容">
	</div>
</template>
<script>
	export default{
		name:'Search',
		data(){
			return{

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

</style>