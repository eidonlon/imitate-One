<template>
  <div class="one-menu">
    <router-link to="/today" class="link-to">
      图文
    </router-link>
    <router-link to="/reads" class="link-to">
      阅读
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
    top:0;
    left:calc(-3rem - 5px);
    background:#fff;
    box-shadow: 5px 1px 3px #ccc;
    text-align: center;
    padding-top: .6rem;
    box-sizing: border-box;
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