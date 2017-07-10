<template>
	<div class="reads-box">
	<template v-for="data in articleData">
		<div class="content-box" :data-id="data.id" @click="articlesDetailsFn(data.id)">
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
	    },
	    articlesDetailsFn: function(id){
            this.$router.push("/readDetials?id="+id)
        }
	}
}
</script>
<style>
</style>