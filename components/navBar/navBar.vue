<template>
	<view :style="{height:statusBarHeight+45+'px'}">
		<view class="top_nav_bar">
			<view :style="{height:statusBarHeight+'px'}" class="empty-box" :class="{'opa':opa}"></view>
			<view class="nav_box" :class="{'opa':opa}">
				<text class="iconfont " :class="{'icon-arrow-left':left}"></text>
				<view class="test">
					<slot>默认</slot>
				</view>
				<text></text>
			</view>

		</view>
	</view>

</template>

<script>
	export default {
		name: "navBar",
		props: {
			left: {
				type: Boolean,
				default: false
			},
			opa: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				statusBarHeight: 0
			};
		},
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		}
	}
</script>

<style lang="less">
	.top_nav_bar {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;

		.empty-box {
			background: rgba(0, 0, 0, 0);

			&.opa {
				background-color: #4CD964;
			}
		}

		.nav_box {
			height: 45px;
			background: rgba(0, 0, 0, 0);
			display: flex;
			padding: 5px;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			width: 100%;

			&.opa {
				background-color: #4CD964;
			}
		}

	}
</style>
