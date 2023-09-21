<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			jump(result) {
				if (typeof result === 'object') uni.navigateTo(result)
				else if (typeof result === 'string') uni.navigateTo({ url: result })
				else console.log('请不要输入string与object之外的类型')
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './colorui/main.css';
	@import './colorui/icon.css';
</style>
