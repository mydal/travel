<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconsList="iconsList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-week :weekList="weekList"></home-week>
    </div>
</template>
<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons'
import HomeRecommend from './components/HomeRecommend'
import HomeWeek from './components/HomeWeek'
import axios from 'axios'

export default {
    name:"Home",
    data(){
    	return{
    		recommendList:[],
    		swiperList:[],
    		iconsList:[],
    		weekList:[]
    	}
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeek
    },
    methods:{
    	getHomeInfo(){
    		axios.get('/static/mock/index.json').then((res)=>{
    			if(res.data.ret&&res.data.data){
    				// console.log(res);
    				this.recommendList=res.data.data.recommendList;
    				this.swiperList=res.data.data.swiperList;
    				this.iconsList=res.data.data.iconsList;
    				this.weekList=res.data.data.weekList;
    				console.log(res);
    			}
    		})
    	}
    },
    mounted:function(){
    	this.getHomeInfo();
    }
}
</script>