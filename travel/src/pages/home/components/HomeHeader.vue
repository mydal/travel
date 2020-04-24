<template>
    <div class="header">
        <div class="header-left">
        	<span class="iconfont iconleftarrow"></span>
        </div>
        <div class="header-input">
       	 	<span class="iconfont">&#xe782;</span>
       	 	请输入景点/城市
   	    </div>
   	    <router-link to="/city" class="router-link">
   	    	  <div class="header-right">
        		<span class="iconfont iconxiajiantou"></span>
        		{{city}}
        	</div>
   	    	
   	    </router-link>
      
    </div>
</template>
<script>
export default {
    name:"HomeHeader",
    props:{
    	city:{
    		type:String
    	}
    }
}
</script>
<style lang="stylus" scoped>
    .header
    	width:100%;
    	height:1.173333rem;
    	background-color:#00bcde;
    	display:flex;
    	align-items:center;
    	font-size:0.373333rem;
    	.header-left
    		width:0.986667rem;
    		height:1.173333rem;
    		text-align:center;
    		line-height:1.173333rem;
    	.header-right
    		width:1.6rem;
    		height:1.173333rem;
    		text-align:center;
    		line-height:1.173333rem;
    	.header-input
    		flex:1;
    		background-color:#fff;
    		height:0.8rem;
    		line-height:0.8rem;
    		border-radius:0.133333rem;
    		color:#ccc;
    	.router-link
    		text-decoration:none
    		color:#000
</style>