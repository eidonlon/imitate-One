<template>
	<div class="load-box">
		<img class="loding-img" src="/static/images/ajax-loader.gif">
	</div>
</template>
<script>
export default {
	name: "load"
}
</script>
<style>
.load-box{
	position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    text-align: center;
}
.load-box .loding-img {
	width: 32px;
	margin-top: 50%;
}
</style>