<template>
	<view class="pub_class">
		<view class="title">生活展示</view>
		<view class="list_box">
			<view class="list_item" v-for="item in list" :key="item._id" @click="fn(item.url)">
				<text>{{item.name}}</text>
				<text>{{item.image}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			fn(url) {
				console.log("url", url);
				// // #ifdef H5
				// location.href = url;
				// // #endif
				// // #ifndef H5
				// uni.navigateTo({
				// 	url: '/pages/pubinfo/pubinfo?src=' + url
				// })
				// // #endif
				
				uni.navigateTo({
					url: '/pages/pubinfo/pubinfo?src=' + url
				})
			}
		}
	}
</script>

<style lang="less">
	.pub_class {
		text-align: center;
		background: #fff;
		width: 90%;
		margin: 20px auto;

		.list_box {
			display: flex;
			width: 100%;
			align-items: center;
			flex-wrap: wrap; //换行
			justify-content: space-between;

			.list_item {
				width: 150px;
				height: 200px;
				background-color: #0077AA;
				margin-top: 20px;
			}
		}
	}
</style>
