<template>
  <div class="one-menu">
      <router-link to="/read" class="link-to">
        阅读
      </router-link>
      <router-link to="/picture" class="link-to">
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
    'name' : 'menuComp',
    data:function(){
      return {msg:"this is menu"}
    }
  }
</script>
<style type="text/css">
  
</style>