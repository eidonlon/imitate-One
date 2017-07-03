<template>
	<header class="header clearfix">
		<i class="menu"></i>
		<h3 class="one-title">一个</h3>
		<i class="search"></i>
	</header>
</template>
<script>
export default {
	name: "header",
	data:function(){
		return {msg:"this is header"}
	}
}
</script>
<style>
	.header{
		height: .7rem;
		width: 100%;
		text-align: center;
		line-height: .7rem;
		border-left: 1px solid #ddd;
    	border-right: 1px solid #ddd;
	}
	.one-title{
		display: inline-block;
		font-size: .35rem;
	}
	.header i{
		display: inline-block;
		width: .32rem;
		height: .32rem;
		padding:.1rem;
		margin: .12rem;
	}
	.menu{
		background: url("/static/images/menu.png") no-repeat;
		background-size: 100% 100%;
		float: left;
	}
	.search{
		background: url("/static/images/search.png") no-repeat;
		background-size: 100% 100%;
		float: right;
	}
</style>