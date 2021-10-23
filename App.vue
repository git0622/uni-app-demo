<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			uniCloud.callFunction({
				name: 'getCarList',
				success: (res) => {
					console.log("carlist")
					console.log(res);
					this.$store.commit('initCarList', res.result.data)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<!-- <style src="./static/fonts/iconfont.css"></style> -->
<style>
	/*每个页面公共css */
	/* @import url("./static/fonts/iconfont.css"); */

	@font-face {
		font-family: "iconfont";
		/* Project id 2884088 */
		src: url('./static/fonts/iconfont.woff2?t=1634809688024') format('woff2'),
			url('./static/fonts/iconfont.woff?t=1634809688024') format('woff'),
			url('./static/fonts/iconfont.ttf?t=1634809688024') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-gouwuche:before {
		content: "\e73d";
	}

	.icon-arrow-right:before {
		content: "\e622";
	}

	.icon-arrow-left:before {
		content: "\e624";
	}

	.icon-shouye:before {
		content: "\e659";
	}

	.icon-shouye1:before {
		content: "\e6a0";
	}

	.icon-maijiagouwuche:before {
		content: "\e992";
	}
</style>
