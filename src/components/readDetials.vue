<template>
	<div class="details">
		<h1 class="detail-title">{{details.title}}</h1>
		<span class="line"></span>
		<span class="detail-author">{{details.author}}</span>
		<img :src="details['text-cover-img']">
		<div class="read-detail-article" v-html="details.article"></div>
		<i class="detail-editor">{{editor[0]}}</i>
		<i class="detail-editor">{{editor[1]}}</i>
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
			editor:[],
			showLoading:true
		}
	},
	created:function(){
	   this.getDetail();
	},
	methods:{
	   getDetail:function(){
	   	 var aId = this.$route.query.id;
	     this.$http.get("/readDetail?aId="+aId).then(response => {
		     this.details = response.body.detail;
		     this.editor = [].concat(response.body.detail.editor);
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