<template>
	<div class="picture-details">
		<img :src="details['img']">
		<div class="picture-author" v-html="details.author"></div>
		<div class="day">{{details.day}}</div>
		<div class="month">{{details.month}}</div>
		<span class="picture-line"></span>
		<p class="picture-article">{{details.article}}</p>
	</div>
</template>
<script>
export default {
	name:"reads",
	data:function(){
		return {
			details:""
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
	     console.log(response.body.detail)
	      },error => {
	        console.log(error);
	      });
	    }
	}
}
</script>
<style>
.picture-details{
	text-align: center;
}
.picture-details img{
	width: 100%;
}
.picture-author{
	margin: .2rem .4rem;
    font-size: .3rem;
    text-align: right;
    overflow: hidden;
}
.picture-detail-issue-no{
	float: left;
}
.detail-author{
	display: block;
}
.picture-article{
	padding: 0 .4rem;
    text-align: left;
    font-size: .3rem;
    line-height: .5rem;
}
.picture-line{
	width: 2rem;
    height: 1px;
    background: #c3bebe;
    margin: .5rem 0;
}
.day{
	text-align: center;
	font-size: .8rem;
	margin-top: .5rem;
}
.month{
	font-size: .3rem;
	text-align: center;
	margin: .2rem;
}
</style>