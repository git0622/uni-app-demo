<template>
	<view>
		<uni-list>
			<uni-list-item v-for="i in list" :key="i._id" :title="i.name" :note="'描述'+i.name"
				thumb="/static/play_icon.png" link :to="'/pages/classInfo/classInfo?_id='+i._id">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		created() {
			this.getLife()
		},
		methods: {
			getLife() {
				uniCloud.callFunction({
					name: 'getLife',
					success: (res) => {
						this.list = res.result.data;
					}
				})
			}
		}
	}
</script>

<style>

</style>
