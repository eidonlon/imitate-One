<template>
	<div class="reads-box">
	<template v-for="data in musicData">
		<div class="article-box" :data-id="data.id" @click="articlesDetailsFn(data.id)">
			<p class="article-tag">{{data["text-tag"]}}</p>
			<h3 class="article-title">{{data["text-title"]}}</h3>
			<span class="article-author">{{data["text-author"]}}</span>
			<div class="article-img">
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
.article-img{
	text-align: center;
}
.article-img img{
	width: 70%;
	border-radius: 50% 50%;
}
.article-short{
	font-size: .3rem;
    line-height: .5rem;
    margin: .1rem 0;
    text-indent: 10px;
}
.music-author{
	margin: .2rem 0;
    color: #a9a9a9;
}
.date{
	font-size: .28rem;
    color: #A9A9A9;
    margin: .2rem 0 .3rem 0;
}
.music-img{
	animation: move linear 5s infinite;
}
@keyframes move{
	0% {transform:rotate(0deg);}
	15% {transform:rotate(30deg);}
	30% {transform:rotate(60deg);}
	45% {transform:rotate(90deg);}
	60% {transform:rotate(120deg);}
	75% {transform:rotate(150deg);}
	100% {transform:rotate(180deg);}
}

</style>