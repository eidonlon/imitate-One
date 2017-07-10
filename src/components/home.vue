<template>
<div>
  <div class="home-bg"  :style="homeDesc.bgImg" @click="articlesToPicture(homeDesc.id)">
    <div class="home-bgcolor">
      <div class="home-desc">
        <h4 class="day">{{homeDesc.day}}</h4>
        <p class="month">{{homeDesc.month}}</p>
        <p class="text-short">{{homeDesc.textShort}}</p>
        <span class="down"><i></i></span>     
      </div>
    </div>
  </div>
  <div class="one-content">
    <div class="home-article">
      <span class="tag">阅读|</span>
      <h1 class="title">{{homeArticle.artTitle}}</h1>
      <span class="article-author">{{homeArticle.artAuthor}}</span>
         <div v-if="homeArticle.artShortImg" class="home-art-img"><img :src="homeArticle.artShortImg"></div>
          <p v-else>{{homeArticle.artShort}}</p>
          <span class="read-more" @click="articlesToRead(homeArticle.id)">阅读全文</span>
    </div>
    <div class="home-question">
      <span class="tag">问答|</span>
      <h1 class="title">{{homeQuestion.quesTitle}}</h1>
      <p>{{homeQuestion.quesShort}}</p>
      <span class="read-more" @click="articlesToQuestion(homeQuestion.id)">阅读全文</span>
    </div>
    <div class="home-more">
      <router-link class="to-more" to="/picture">更多内容</router-link>
    </div>
  </div>
  <one-load v-show="showLoading"></one-load>
</div>
</template>

<script>
import oneLoad from "./loading.vue"
export default {
  name: 'home',
  components:{
    oneLoad
  },
  data:function(){
  return {
    msg: 'Welcome to one demo',
    showLoading:true,
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
        this.showLoading = false;
      },error => {
        console.log(error);
      });
    },
    articlesToPicture: function(id){
        this.$router.push("/pictureDetail?id="+id)
    },
    articlesToRead: function(id){
        this.$router.push("/readDetials?id="+id)
    },
    articlesToQuestion: function(id){
        this.$router.push("/questionDetail?id="+id)
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
  color:#fff;
}
.one-content{ 
  padding: .4rem;
  margin-bottom: 1.3rem;
}
.one-content  p{
  text-align: justify;
}
.home-bgcolor{
  width: 100%;
  height: 100%;
  padding: 0 .4rem;
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
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
.tag{
  color: #54b2d8;
  margin-bottom: .2rem;
}
.title{
  font-size: .5rem;
  line-height: .7rem;
  margin-bottom: .1rem;
}
.article-author{
  margin-bottom: .1rem;
  margin-left: .2rem;
}
.home-art-img{
  height: 2.5rem;
}
.home-art-img img{
  width: 100%;
  height: 100%;
}
.read-more{
  font-size: .32rem;
  color: #54b2d8;
  margin: .1rem;
}
.home-article{
  margin-bottom: 1rem;
}
.home-question{
  margin-bottom: 1rem;
}
.home-question p{
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: .42rem;
  display: -webkit-box;
  font-size: .29rem;
  -webkit-box-orient: vertical;
}
.one-content .home-more{
  text-align: center;
}
.home-more .to-more{
  font-size: .4rem;
  line-height: .4rem;
  border: 1px solid #ddd;
  padding: .15rem .2rem;
  border-radius: 5px;
  line-height: .4rem;
}
</style>
