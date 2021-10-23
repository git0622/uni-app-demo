<template>
	<view class="car_box">
		<view class="list_box">
			<view class="list_item" v-for="item in list" :key='item._id'>
				<checkbox-group @change="changeOne(item,$event)">
					<label>
						<checkbox class="check_box" :value="item._id" :checked="item.isSelect"></checkbox>
					</label>
				</checkbox-group>
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<view class="text_box">
					<view class="text-title">{{item.info.name}}</view>
					<view class="text_bot">
						<text :style="{color:'red'}">
							{{item.info.price | money}}
						</text>
					</view>
				</view>
				<uni-number-box :min='0' :max='9' :value='item.count' @change="changeCount(item,$event)">
				</uni-number-box>
			</view>
		</view>
		<view class="submit_bar_box">
			<view class="submit_bar">
				<checkbox-group @change="changeAll">
					<label>
						<checkbox value="all" class="checkbox" :checked="selectAll"></checkbox><text>全选 </text>
					</label>
				</checkbox-group>
				<view class="total_money">总价{{total|money}}</view>
				<view class="submit_btn">结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			list() {
				return this.$store.state.carList.map(item => {
					this.$set(item, "isSelect", true)
					return item
				})
			},
			selectAll() {
				return this.list.every(item => item.isSelect)
			},
			total() {
				return this.list.reduce((pre, cur) => {
					return cur.isSelect ? pre + cur.count * cur.info.price : pre
				}, 0)
			}
		},
		methods: {
			changeOne(item, e) {
				item.isSelect = e.detail.value.length ? true : false;
			},
			changeCount(item, count) {
				item.count = count / 1; //count默认是字符串，除以1表示转换为数字
			},
			changeAll(e) {
				this.list.forEach(item => {
					item.isSelect = e.detail.value.length ? true : false;
				})
			}


		},
	}
</script>

<style lang="less">
	page {
		background-color: #0077AA;
	}

	.car_box {
		height: 100%;

		.list_box {
			padding: 0 20px;

			.list_item {
				display: flex;
				align-items: center;
				justify-content: space-around;
				height: 100px;
				border-radius: 10px;
				background-color: #fff;
				margin-top: 20px;

				image {
					width: 50px;
					height: 50px;
				}
			}
		}

		.submit_bar_box {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;

			.submit_bar {
				display: flex;
				justify-content: space-between;
				height: 40px;
				padding: 0 20px;
				line-height: 40px;
				background-color: #fff;
			}
		}
	}
</style>
