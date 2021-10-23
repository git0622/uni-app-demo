<template>
	<view class="dialog_box">
		<view class="slot_box">
			<slot></slot>
		</view>
		<view class="mask" @click="fn"></view>
	</view>
</template>

<script>
	export default {
		name: "mydialog",
		data() {
			return {

			};
		},
		methods: {
			fn() {
				console.log("jddjdj")
				this.$emit('close')
			}
		}
	}
</script>

<style lang="less">
	.dialog_box {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;

		.slot_box {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}

		.mask {
			background: rgba(0, 0, 0, 0.2);
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
		}
	}
</style>
