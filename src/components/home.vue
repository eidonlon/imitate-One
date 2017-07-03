<template>
<div>
  <div class="home-bg"  :style="homeDesc.bgImg">
    <div class="home-desc">
      <h4 class="day">{{homeDesc.day}}</h4>
      <p class="month">{{homeDesc.month}}</p>
      <p class="text-short">{{homeDesc.textShort}}</p>
      <span class="down"><i></i></span>     
    </div>
  </div>
  <div class="home-article">
    <span class="tag">阅读|</span>
    <h1 class="title">{{homeArticle.artTitle}}</h1>
    <span class="article-author">{{homeArticle.artAuthor}}</span>
    <p>{{homeArticle.artShort}}</p>
    <span class="read-more">阅读全文</span>
  </div>
  <div class="home-question">
    <span class="tag">问答|</span>
    <h1 class="title">{{homeQuestion.quesTitle}}</h1>
    <p>{{homeQuestion.quesShort}}</p>
    <span class="read-more">阅读全文</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data:function(){
  return {
    msg: 'Welcome to one demo',
    homeDesc:{},
    homeArticle:{},
    homeQuestion:{}
  }
  },
  created:function(){
    this.getDatas();
  },
  methods:{
    getDatas:function(){
      this.$http.get("/homeData").then(response => {
        this.homeDesc = response.body.homeDesc;
        this.homeArticle = response.body.homeArticle;
        this.homeQuestion = response.body.homeQuestion;
      },error => {
        console.log(error);
      });
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-bg{
	height: calc(100vh - .7rem);
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
  width: 100%;
  position: relative;
  top: -2px;
  box-sizing: border-box;
  padding: 0 .4rem;
  color:#fff;
}
.home-desc{
	position: absolute;
  bottom: .5rem;
  padding-right:.4rem;
}
.day{
	font-size: .8rem;
  font-weight: normal;
  margin: .1rem 0;
}
.month{
  font-size: .4rem;
  margin: .2rem 0;
}
.text-short{
  height: 1.35rem;
  line-height: .45rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: .29rem;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.down{
  width: .83rem;
  height: .4rem;
  left: 50%;
  position: relative;
  margin-left: -.42rem;
  margin-top: .3rem;
}
.down i{
  width: .83rem;
  height: .35rem;
  background: url(/static/images/down.png) no-repeat;
  background-size: 100% 100%;
}
</style>
