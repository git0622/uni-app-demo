<template>
	<view class="content">
		<navBar :opa="opa">首页导航</navBar>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<!-- <view class="text-area">
			<text class="title">{{title}} suzhou</text>
		</view> -->
		<view class="swiper-box">
			<swiper class="swiper" autoplay="true" interval="800" indicator-dots="true" circular="true">
				<!-- <swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item> -->
				<swiper-item v-for="item in bannerList" :key="item._id">
					<!-- <view class="swiper-item uni-bg-red">{{item.image}}</view> -->
					<view class="swiper-item uni-bg-red">9</view>
				</swiper-item>
			</swiper>

		</view>
		<!-- #ifndef H5 -->
		<view>hahha</view>
		<!-- #endif -->
		<!-- 了解生活 -->
		<view class="video">
			<view class="title">了解生活</view>
			<view class="video_box">
				<image src="/static/video_big.png" alt="video_big" mode="aspectFill">
					<view class="play_icon" @click='showKonow'>
						<image src="/static/play_icon.png" alt="play_icon" mode="aspectFill">
					</view>
			</view>
			<mydialog v-show="isShowKnow" @close='closeKnow'>
				<video :style='{zIndex:100}' src="/static/video.mp4" controls="controls"></video>
			</mydialog>
		</view>
		<!-- 了解生活 -->
		<view class="video">
			<view class="title">深入生活</view>
			<view class="video_box">
				<image src="/static/video_big.png" alt="video_big" mode="aspectFill">
					<view class="play_icon" @click='showStory'>
						<image src="/static/play_icon.png" alt="play_icon" mode="aspectFill">
					</view>
			</view>
			<uni-popup ref="popup">
				<video src="/static/video.mp4" controls="controls"></video>
			</uni-popup>
		</view>
		<pub-class :list='pubCalssList'></pub-class>
		{{$store.state.count}}{{count}}
	</view>
</template>

<script>
	import pubClass from './pubClass.vue';
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			'pub-class': pubClass
		},
		data() {
			return {
				title: 'Hello',
				opa: 0,
				bannerList: [],
				isShowKnow: false,
				pubCalssList: []
			}
		},
		created() {
			this.getBanner();
			this.getPubClass();
		},
		computed: {
			// count(){
			// 	return this.$store.state.count
			// }
			...mapState(['count'])
		},
		onLoad() {

		},
		onPageScroll(e) {
			// console.log(e)
			if (e.scrollTop > 5) {
				this.opa = 1
			} else {
				this.opa = 0;
			}

		},
		methods: {
			getBanner() {
				uniCloud.callFunction({
					name: "getBanner",
					success: (res) => { //要用箭头函数，否则this不再是当前组件的了
						this.bannerList = res.result.data;
						console.log("bannerList", this.bannerList)
					}
				})
			},
			showKonow() {
				this.isShowKnow = true;
			},
			closeKnow() {
				console.log("hahha");
				this.isShowKnow = false;
			},
			showStory() {
				this.$refs.popup.open('center')
			},
			getPubClass() {
				uniCloud.callFunction({
					name: 'getPubClass',
					success: (res) => {
						console.log('pubClass', res);
						this.pubCalssList = res.result.data;
					}
				})
			}

		}
	}
</script>

<style lang="less">
	page {
		background-color: #dfe7e7;
	}

	.swiper-box {
		height: 180px;
		width: 80%;
		margin: auto;
		overflow: hidden;
		border-radius: 10px;
		background-color: #eee;

		.swiper {
			height: 100%;
		}
	}

	.video {
		text-align: center;
		background-color: #fff;

		.video_box {
			font-size: 20px;
			position: relative;

			.play_icon {
				width: 80px;
				height: 80px;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-left: -40px;
				margin-top: -40px;

				image {
					width: 100%;
					height: 100%;
				}
			}

		}
	}

	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 1000px;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>
