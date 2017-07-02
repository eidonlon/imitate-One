<template v-if='someData'>
	<div class="home-bg"  :style="someData.bgImg">
		<div class="home-desc">
			<h4 class="day">{{someData.day}}</h4>
			<p class="month">{{someData.month}}</p>
			<p class="text-short">{{someData.textShort}}</p>
			<span class="down"><i></i></span>			
		</div>
	</div>
</template>

<script>
export default {
  name: 'home',
  data:function(){
	return {
	  msg: 'Welcome to one demo',
	  someData:{
	  	day:"1",
	  	month:"2",
	  	textShort:"this is one",
	  	bgImg:"bg"
	  }
	}
  },
  created:function(){
  	this.someData = this.getDatas();
  },
  methods:{
    getDatas:function(){
  		this.$http.get("/homeData").then(response => {
  			this.someData = response.body.datas;
  			console.log(typeof response.body.datas)
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
    box-sizing: border-box;
    padding: 0 .5rem;
    color:#fff;
}
.home-desc{
	position: absolute;
    bottom: 2rem;
    padding-right: .5rem;
}
.day{
	font-size: .8rem;
    font-weight: normal;
}
.month{
    font-size: .4rem;
}
.text-short{
    height: .4rem;
    line-height: .4rem;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: .29rem;
}
</style>
