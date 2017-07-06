<template>
	<div class="picture-box">
	<template v-for="data in pictureData">
		<div class="article-box" :data-id="data.id">
			<p class="picture-tag">{{data["item-picture-date"]}}</p>
			<h3 class="picture-num">{{data["issue-no"]}}</h3>
			<div class="article-img">
				<img :src="data['item-picture-img']">
			</div>
			<span class="img-author">{{data["picture-author"]}}</span>
			<p class="picture-short">{{data["picture-content"]}}</p>
			<span class="picture-author">{{data["picture-authors"]}}</span>
		</div>
	</template>
	</div>
</template>
<script>
export default {
	name:"picture",
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
	    }
	}
}
</script>
<style>
.picture-box{
	background: #efefef;
	margin-bottom: 1rem;
	text-align: center;
	color:#828282;
}
.article-box{
	padding: .2rem .4rem;
	background: #fff;
	margin-bottom: .2rem;
}
.picture-tag{
    font-size: .45rem;
    color: #A9A9A9;
    margin: .2rem 0;
}
.picture-num{
    color: #333;
    font-weight: normal;
    font-size: .24rem;
    margin-bottom: .2rem;
}
.img-author{
	color: #abaaaa;
    margin: .25rem;
}
.picture-short{
	text-align: left;
    line-height: .4rem;
    font-size: .28rem;
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
.picture-author{
	margin: .35rem 0;
}
</style>