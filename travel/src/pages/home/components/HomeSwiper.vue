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
    		
    	}
    },
    props:{
        swiperList:{
            type:Array
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