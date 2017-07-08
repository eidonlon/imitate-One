<template>
  <div class="one-menu">
      <router-link to="/reads" class="link-to">
        图文
      </router-link>
      <router-link to="/music" class="link-to">
        音乐
      </router-link>
      <router-link to="/movie" class="link-to">
       影视
      </router-link>
      <router-link to="/about" class="link-to">
        关于
      </router-link>
  </div>
</template>
<script type="text/javascript">
  export default {
    'name' : 'menu',
    data:function(){
      return {msg:"this is menu"}
    }
  }
</script>
<style type="text/css">
  .one-menu{
    width: 3rem;
    height: 100vh;
    position: absolute;
    top: 0;
     left: calc(-3rem - 10px); 
    background: #fff;
    box-shadow: 4px -2px 16px 0px #adabab;
    text-align: center;
    padding-top: .6rem;
    box-sizing: border-box;
    z-index: 99;
  }
  .link-to{
    display: inline-block;
    padding: .1rem .3rem;
    width: 2.4rem;
    font-size: .3rem;
    line-height: .7rem;
    text-decoration: none;
    color: #333;
  }
</style>