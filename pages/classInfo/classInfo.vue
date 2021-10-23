<template>
	<view>
		<view>name {{data.name}}</view>
		<view>{{data.price|money}}</view>
		<view class="good_bot_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
		<view>
			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog mode="base" type="info" title="tishi" content="确认加入购物车？" :duration="2000"
					:before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
			</uni-popup>
			<!-- 不使用 count 的话，compute（）不会计算count属性 -->
			<text v-show="false">{{count}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				_id: '',
				data: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2,
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				],
			}
		},
		created() {
			this.getClassInfo(this._id);
		},
		computed: {
			count() {
				let n = this.$store.state.carList.reduce((prev, cur) => {
					return prev + cur.count
				}, 0);
				this.options[2].info = n;
				return n;
			}
		},
		methods: {
			getClassInfo(id) {
				uniCloud.callFunction({
					name: 'getClassInfo',
					data: {
						_id: id
					}
				}).then(data => {
					console.log(data);
					this.data = data.result.data[0]
				})
			},
			onClick(e) {
				console.log("e", e);
				if (e.index == 2) { //购物车
					uni.navigateTo({
						// url: "../cart/cart",
						url: "/pages/cart/cart",
					})
				}
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
			},
			buttonClick(e) {
				console.log('e', e);
				if (e.index == 0) { //0表示加入购物车 按钮，1表示立即购买按钮
					this.$refs.popup.open();
				}
				// this.options[2].info++
			},
			close() {
				this.$refs.popup.close()
			},
			confirm() {
				this.addCart()
			},
			addCart() {
				let goods = this.$store.state.carList.filter(item => {
					return item._id = this._id;
				})[0];
				uniCloud.callFunction({
					name: 'addCart',
					data: {
						_id: this._id,
						info: this.data,
						count: goods ? goods.count + 1 : 1,
					}
				}).then(data => {
					uni.showToast({
						title: '添加成功',
						icon: 'success'
					});
					this.$store.commit('changeCarList', {
						_id: this._id,
						count: goods ? goods.count + 1 : 1,
						info: this.data
					});
					this.$refs.popup.close();
				})
			}
		},
		onLoad({
			_id
		}) {
			console.log("_id", _id);
			this._id = _id;
		}
	}
</script>

<style lang="less">
	.good_bot_nav {
		position: fixed;
		left: 0;
		bottom: 8px;
		width: 100%;
	}
</style>
