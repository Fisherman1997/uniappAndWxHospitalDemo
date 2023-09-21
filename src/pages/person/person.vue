<template>
	<view class="person">
        <view class="person-header bg-cyan padding">
            <view class="cu-list menu-avatar">
                <view class="cu-item">
                    <view class="cu-avatar round lg">
                        <text class="cuIcon-my"></text>
                    </view>
                    <view class="content flex-sub">
                        <view>微信用户</view>
                    </view>
                </view>
            </view>
            <view class="person-card padding grid margin-bottom col-2 bg-white ">
                <view class="text-cyan flex flex-wrap align-start">
                    <view class="flex flex-wrap align-start">
                        <text class="text-xxl text-bold">
                            俞科艺
                        </text>
                        <text class="margin-left-xs person-card-default">
                            默认卡
                        </text>
                    </view>
                    <text class="margin-top-xs">
                        123456789
                    </text>
                </view>
                <view class="text-right">
                    电子健康卡
                </view>
            </view>
        </view>
        <view class="cu-list menu">
            <!-- 图标 + 标题、arrow 带箭头 -->
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-friend text-grey"></text>
                    <text class="text-grey">我的就诊人</text>
                </view>
            </view>
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-fork text-green"></text>
                    <text class="text-grey">我的挂号</text>
                </view>
            </view>
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-moneybag text-blue"></text>
                    <text class="text-grey">我的缴费</text>
                </view>
            </view>
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-circlefill text-grey"></text>
                    <text class="text-grey">调查问卷</text>
                </view>
            </view>
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-infofill text-orange"></text>
                    <text class="text-grey">医院介绍</text>
                </view>
            </view>
            <view class="cu-item arrow">
                <view class="content">
                    <text class="cuIcon-notice text-cyan"></text>
                    <text class="text-grey">历史信息</text>
                </view>
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
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.person-header .cu-item{
    background: none !important;
    border: none !important;
}
.person-header .cu-item::after{
    display: none !important;
}
.person-card{
    border-radius: 5px !important;
}
.person-card-default {
    padding: 3px 5px;
    margin-left: 10px;  
    border-radius: 5px !important;
    border: solid 1px #1cbbb4 !important;
}
</style>
