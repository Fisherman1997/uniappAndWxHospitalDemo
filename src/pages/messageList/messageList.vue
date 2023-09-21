<template>
	<view class="messageList">
        <view class="no-data flex flex-direction align-center">
            <text class="text-cyan cuIcon-form"></text>
            <text class="text-df">
                暂无记录
            </text>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.no-data {
    margin-top: calc(50vh - 80px);
}
.no-data > .cuIcon-form{
    font-size: 100upx;
}
</style>
