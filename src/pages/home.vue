<template>
	<div class="home-box">
		<one-header></one-header>
		<one-menu></one-menu>
		<div class="home-main">
			<one-home></one-home>
		</div>	
	</div>
</template>
<script>
	import oneHeader from "../components/header.vue"
	import oneMenu from "../components/menu.vue"
	import oneHome from "../components/home.vue"

	export default {
		name:"home",
		components:{
			oneHeader,
			oneMenu,
			oneHome
		},
		methods:{
			
		}
	}
</script>
<style>
*{padding: 0;margin:0;}
html{
	width: 100%; 
	height: 100%; 
	max-width: 768px;
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