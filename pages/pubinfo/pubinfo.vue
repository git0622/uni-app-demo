<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ""
			}
		},
		onLoad({
			src
		}) {
			console.log(arguments)
			console.log(src) //页面之间传递的参数,可以通过onLoad函数的参数获取
			this.src = src;
		},
		methods: {

		},

	}
</script>

<style>

</style>
