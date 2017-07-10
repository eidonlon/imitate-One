<template>
	<div class="picture-details">
		<img :src="details['img']">
		<div class="picture-author" v-html="details.author"></div>
		<div class="picture-detail-day">{{details.day}}</div>
		<div class="picture-detail-month">{{details.month}}</div>
		<span class="picture-line"></span>
		<p class="picture-article">{{details.article}}</p>
  		<one-load v-show="showLoading"></one-load>
	</div>
</template>
<script>
import oneLoad from "./loading.vue"
export default {
	name:"reads",
	components:{
	    oneLoad
	},
	data:function(){
		return {
			details:"",
			showLoading:true
		}
	},
	created:function(){
	   this.getDetail();
	},
	methods:{
	   getDetail:function(){
	   	 var aId = this.$route.query.id;
	     this.$http.get("/pictureDetail?aId="+aId).then(response => {
		     this.details = response.body.detail;
	         this.showLoading = false;
	      },error => {
	        console.log(error);
	      });
	    }
	}
}
</script>
<style>
</style>