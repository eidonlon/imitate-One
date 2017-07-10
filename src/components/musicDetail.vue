<template>
	<div class="reads-details">
		<div id="imgHead"  v-html="details.img"></div>
		<div class="music-info" v-html="details.musicInfo"></div>
		<h1 class="detail-title">{{details.title}}</h1>
		<span class="detail-author">{{details.author}}</span>
		<img :src="details['text-cover-img']">
		<div v-html="details.article"></div>
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
	     this.$http.get("/musicDetail?aId="+aId).then(response => {
		     this.details = response.body.detail;
		     this.editor = [].concat(response.body.detail.editor)
	         this.showLoading = false;
	      },error => {
	        console.log(error);
	      });
	    }
	}
}
</script>
<style>
.reads-details{
	background: #fff;
	padding:.6rem .4rem;
	font-size: .29rem;
	text-align: justify;
	margin-bottom: 1rem;
}
img{
	width: 100%;
	margin-bottom: .2rem;
}
.img-header {
    position: relative;
    height: 3rem;
}
.music-info{
	text-align: center;
	font-size: .3rem;
	margin: .1rem 0;
}
#popupXiamiMusic{
	display: none;
}
.pause-btn{
	display: none;
}
.music-info div{
	margin: .2rem 0;
}
.detail-author{
	display: block;
	margin: .2rem 0;
}
.reads-details p{
	line-height: .45rem;
    font-size: .3rem;
    margin-bottom: .4rem;
    text-indent: 20px;
}
.reads-details p:first-child{
	margin-bottom: .1rem;
}
.line{
    width: 2rem;
    height: 3px;
    background: #333;
    margin: .3rem 0;
}
.detail-title{

}
.detail-editor{
    color: #a9a9a9;
    line-height: .4rem;
    font-size: .26rem;
    margin-bottom: .3rem;
    margin-top: .1rem;
}
</style>