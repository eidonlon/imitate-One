<template>
	<div class="details">
		<h1 class="detail-title">{{details.title}}</h1>
		<span class="line"></span>
		<span class="detail-author">{{details.author}}</span>
		<p class="detail-author">{{details.qContent}}</p>
		<span class="question-line"></span>
		<span class="detail-author">{{details.answers}}</span>
		<div v-html="details.article"></div>
		<i class="detail-editor">{{details.editor}}</i>
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
	     this.$http.get("/questionDetail?aId="+aId).then(response => {
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