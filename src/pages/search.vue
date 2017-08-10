<template>
	<div class="search-result">
		{{msg}}
	</div>
</template>
<script>
export default {
	name: "header",
	data:function(){
		return {
			msg:""
		}
	},
	methods: {
		getResult:function(){
			this.$http.get("/search").then(response =>{
				console.log(response.body.result);
			}, error => {
				console.log(error)
			})
		}
	}
}
</script>
<style>

</style>