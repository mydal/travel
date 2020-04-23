<template>
	<div class="wrapper">
		<swiper :options="swiperOption" class="swiper"> 
			<swiper-slide v-for="(item,index) in swiperList":key="item.id">
				<img :src="item.imgUrl" alt="">
			</swiper-slide> 
			<div class="swiper-pagination" slot="pagination"></div> 
		</swiper>
	</div>
</template>
<script>
export default {
    name:"HomeSwiper",
    data(){
    	return{
    		swiperOption:{
    			pagination:".swiper-pagination",
    			loop:true,
                autoplay: 2000,
                //手动滑动后 还可以自动轮播
                autoplayDisableOnInteraction : false
    		},
    		swiperList:[
    			{
    				id:1,
    				imgUrl:"http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_600x330_fd753eb3.jpg"

    			},
    			{
    				id:2,
    				imgUrl:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg"

    			},
    			{
    				id:3,
    				imgUrl:"http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_600x330_4f4a22ad.jpg"

    			},
    			{
    				id:4,
    				imgUrl:"http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg"
    			}
    		]
    	}
    }
}
</script>

<style lang="stylus" scoped>
	.wrapper
		transform: translateZ(0);
	.swiper
		height:5.333333rem;

</style>