<template>
	<div class="home-box">
		<one-home></one-home>
	</div>
</template>
<script>
	import oneHeader from "../components/header.vue"
	import oneMenu from "../components/menu.vue"
	import oneHome from "../components/home.vue"
	import oneFooter from "../components/footer.vue"

	export default {
		name:"home",
		components:{
			oneHome	
		},
		methods:{
			
		}
	}
</script>
<style>

.one-content{ 
	padding: .4rem;
	margin-bottom: .8rem;
}
.one-content  p{
	text-align: justify;
}
</style>