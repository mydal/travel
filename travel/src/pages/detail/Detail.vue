<template>
	<div>
		<detail-header :DetailList="DetailList" :id="id"></detail-header>
		<detail-recommend :Detailrecom="Detailrecom" :id="id"></detail-recommend>
		<detail-relation :Detailrelation="Detailrelation"></detail-relation>
	</div>
</template>
<script>
import axios from 'axios'
import DetailHeader from './components/DetailHeader'
import DetailRecommend from './components/DetailRecommend'
import DetailRelation from './components/DetailRelation'
	export default{
		name:'Detail',
		data(){
			return{
				id:'',
				DetailList:[],
				Detailrecom:[],
				Detailrelation:[]

			}
		},
		components:{
        	DetailHeader,
        	DetailRecommend,
        	DetailRelation
    	},
		methods:{
    		getHomeInfo(){
    			axios.get('/static/mock/detail.json').then((res)=>{
    				if(res.data.ret&&res.data.data){
    					this.DetailList=res.data.data.detailList;
    					this.Detailrecom=res.data.data.detailRecom;
    					this.Detailrelation=res.data.data.detailRelation;
    				}
    					console.log(res);

    			})
    		}
	    },
	   mounted:function(){
   			this.getHomeInfo();
   			this.id=this.$route.params.id;
   			// console.log(this.$route.query.id);
			 console.log(this.id);
   	 	},
    
	}
</script>
<<style lang="stylus" scoped>

</style>