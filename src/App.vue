<template>
  <div id="app">
    <one-header></one-header>
    <one-menu></one-menu>
    <div class="home-main">
      <router-view></router-view>
    </div>
    <one-footer></one-footer> 
  </div>
</template>

<script>
  import oneHeader from "./components/header.vue"
  import oneMenu from "./components/menu.vue"
  import oneHome from "./components/home.vue"
  import oneFooter from "./components/footer.vue"
export default {
  name: 'app',
  data:function(){
  	return {show:true}
  },
  components:{
      oneHeader,
      oneMenu,
      oneHome,
      oneFooter
    },
  methods:{
  	toggleMenu:function(){
  		this.show = !show;
  	}
  }
}

window.onload = function(){
  var menu = document.getElementsByClassName("menu")[0];
  var nav= document.getElementsByClassName("one-menu")[0];
  var linkTo= document.getElementsByClassName("link-to");
  var homeMain= document.getElementsByClassName("home-main")[0];
  var showSymbol = true;
  var stop = null;
  linkTo = Array.prototype.slice.call(linkTo);
  const position = nav.offsetLeft;

  menu.addEventListener("click",function(){
      toggleMenu(8,0);
      showSymbol = !showSymbol;
  },false);

  linkTo.forEach(function(val){
    val.addEventListener("click",function(){
      toggleMenu(-8,position);
      showSymbol = !showSymbol;
     },false);
  });

  homeMain.addEventListener("click",function(){
      toggleMenu(-8,position);
      showSymbol = !showSymbol;
  },false);

  function toggleMenu(speed,position){
    if(stop){
      window.cancelAnimationFrame(moveTo.bind(this,speed,position));
      window.requestAnimationFrame(moveTo.bind(this,speed,position));   
    }else{
      window.requestAnimationFrame(moveTo.bind(this,speed,position));   
    }
  }
  function moveTo(speed,position){
    nav.style.left = nav.offsetLeft + speed +"px";
    if(Math.abs(Math.abs(nav.offsetLeft) - Math.abs(position)) > 8){
     stop = window.requestAnimationFrame(moveTo.bind(this,speed,position));   
    }else{
      nav.style.left = position +"px";
      window.cancelAnimationFrame(moveTo.bind(this,speed,position));
    }
  }
}
</script>
<style>
*{padding: 0;margin:0;}
html{
  width: 100%; 
  height: 100%; 
  margin: 0 auto;
  background: #fff;
}
body{
  background-color:#F9F9F9;
  margin:0;
  width: 100%;
  font-size:.24rem;
  color: #333;
  position: relative;
  height: auto;
  min-height: 100%;
  font-family: "arial","微软雅黑";
  overflow: hidden;
}
span,i{display: inline-block;}
.clearfix {*zoom: 1;}
.clearfix:before,.clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}
.home-main{
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
}
</style>

