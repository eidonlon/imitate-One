<template>
	<div class="reads-box">
	<template v-for="data in musicData">
		<div class="article-box" :data-id="data.id" @click="articlesDetailsFn(data.id)">
			<p class="article-tag">{{data["text-tag"]}}</p>
			<h3 class="article-title">{{data["text-title"]}}</h3>
			<span class="article-author">{{data["text-author"]}}</span>
			<div class="music-img-box">
				<img class="music-img" :src="data['item-picture-img']">
			</div>
			<span class="music-author">{{data["text-music-author"]}}</span>
			<p class="article-short">{{data["text-content-short"]}}</p>
			<span class="date">{{data["date"]}}</span>
		</div>
	</template>
	</div>
</template>
<script>
export default {
	name:"music",
	data:function(){
		return {
			musicData:""
		}
	},
	created:function(){
	   this.getDatas();
	},
	methods:{
	    getDatas:function(){
	     this.$http.get("/static/musicData.json").then(response => {
	     	this.musicData = response.body.data;
	     	console.log(response.body);
	      },error => {
	        console.log(error);
	      });
	    },
	    articlesDetailsFn: function(id){
            this.$router.push("/musicDetail?id="+id)
        }
	}
}
</script>
<style>
</style>