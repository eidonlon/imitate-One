<template>
<div class="home-box">
  <div v-show="ready" class="home-bg"  :style="homeDesc.bgImg" @click="articlesToDetail(homeDesc.id,$event)">
    <div class="home-bgcolor">
      <div class="home-desc">
        <h4 class="home-day">{{homeDesc.day}}</h4>
        <p class="home-month">{{homeDesc.month}}</p>
        <p class="home-text-short">{{homeDesc.textShort}}</p>
        <span class="home-down"><i class="down down01"></i><i class="down down02"></i><i class="down down03"></i></span>     
      </div>
    </div>
  </div>
  <div class="home-content"  v-show="ready">
    <div class="home-article">
      <span class="home-tag">阅读|</span>
      <h1 class="home-title">{{homeArticle.artTitle}}</h1>
      <span class="home-article-author">{{homeArticle.artAuthor}}</span>
         <div v-if="homeArticle.artShortImg" class="home-article-img"><img :src="homeArticle.artShortImg"></div>
          <p v-else>{{homeArticle.artShort}}</p>
          <span class="home-read-more" @click="articlesToRead(homeArticle.id)">阅读全文</span>
    </div>
    <div class="home-question">
      <span class="home-tag">问答|</span>
      <h1 class="home-title">{{homeQuestion.quesTitle}}</h1>
      <p>{{homeQuestion.quesShort}}</p>
      <span class="home-read-more" @click="articlesToQuestion(homeQuestion.id)">阅读全文</span>
    </div>
    <div class="one-more">
      <router-link class="to-more" to="/picture">更多内容</router-link>
    </div>
  </div>
  <one-load v-show="showLoading"></one-load>
</div>
</template>

<script>
import oneLoad from "../components/loading.vue"
export default {
  name: 'home',
  components:{
    oneLoad
  },
  data:function(){
  return {
    msg: 'Welcome to one demo',
    showLoading:true,
    ready:false,
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
        this.ready = true;
      },error => {
        console.log(error);
      });
    },
    articlesToDetail: function(id,$event){
        console.log($event.target.className)
        if($event.target.className != "down"){
          this.$router.push("/pictureDetail?id="+id)
        }
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
<style>
</style>
