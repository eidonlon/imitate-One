<template>
  <div id="app">
    <one-header></one-header>
    <one-menu></one-menu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import oneHeader from "./components/header.vue"
  import oneMenu from "./components/menu.vue"
export default {
  name: 'app',
  data:function(){
  	return {show:true}
  },
  components:{
      oneHeader,
      oneMenu
  },
  methods:{
  	toggleMenu:function(){
  		this.show = !show;
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
a{
  text-decoration: none;
  color:#333;
}
span,i{display: inline-block;}
.clearfix {*zoom: 1;}
.clearfix:before,.clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}
.main{
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
}
</style>

