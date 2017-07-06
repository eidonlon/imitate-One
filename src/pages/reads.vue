<template>
	<div class="reads-box">
	<template v-for="data in articleData">
		<div class="article-box" :data-id="data.id">
			<p class="article-tag">{{data["text-tag"]}}</p>
			<h3 class="article-title">{{data["title"]}}</h3>
			<span class="article-author">{{data["text-author"]}}</span>
			<div class="article-img">
				<img :src="data['text-cover-img']">
			</div>
			<p class="article-short">{{data["text-content-short"]}}</p>
			<span class="date">{{data["date"]}}</span>
		</div>
	</template>
	</div>
</template>
<script>
export default {
	name:"reads",
	data:function(){
		return {
			articleData:""
		}
	},
	created:function(){
	   this.getDatas();
	},
	methods:{
	   getDatas:function(){
	     this.$http.get("/static/data.json").then(response => {
	     this.articleData = response.body.data;
	     console.log(response.body.data)
	      },error => {
	        console.log(error);
	      });
	    }
	}
}
</script>
<style>
.reads-box{
	background: #efefef;
	margin-bottom: 1rem;
}
.article-box{
	padding: .2rem .4rem;
	background: #fff;
	margin-bottom: .2rem;
}
.article-tag{
    text-align: center;
    font-size: .28rem;
    margin-bottom: .5rem;
}
.article-title{
	font-size: .4rem;
    margin: .2rem 0;
    font-weight: normal;
}
.article-author{
	font-size: .26rem;
    margin-bottom: .2rem;
}
.article-img img{
	width: 100%;
}
.article-short{
	font-size: .3rem;
    line-height: .5rem;
    margin: .1rem 0;
    text-indent: 10px;
}
.date{
	font-size: .28rem;
    color: #A9A9A9;
    margin: .2rem 0 .3rem 0;
}
</style>