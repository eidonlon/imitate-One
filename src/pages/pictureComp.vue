<template>
	<div class="picture-box">
	<template v-for="data in pictureData">
		<div class="content-box" :data-id="data.id" @click="articlesDetailsFn(data.id)">
			<p class="picture-tag">{{data["item-picture-date"]}}</p>
			<h3 class="picture-num">{{data["issue-no"]}}</h3>
			<div class="picture-img">
				<img :src="data['item-picture-img']">
			</div>
			<span class="picture-img-author">{{data["picture-author"]}}</span>
			<p class="picture-short">{{data["picture-content"]}}</p>
			<span class="picture-author">{{data["picture-authors"]}}</span>
		</div>
	</template>
	</div>
</template>
<script>
export default {
	name:"pictureComp",
	data:function(){
		return {
			pictureData:""
		}
	},
	created:function(){
	   this.getDatas();
	},
	methods:{
	   getDatas:function(){
	     this.$http.get("/static/pictureData.json").then(response => {
	     this.pictureData = response.body.data;
	      },error => {
	        console.log(error);
	      });
	    },
	    articlesDetailsFn: function(id){
            this.$router.push("/pictureDetail?id="+id)
        }
	}
}
</script>
<style>
</style>