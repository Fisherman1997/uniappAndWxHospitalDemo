<template>
	<view class="beInHospital">
		<view class="cu-card case no-card grid text-center col-1 bg-white padding margin-bottom">
			<view class="bg-cyan hospital-add">
				<text class="cuIcon-add"></text>
				添加住院患者
			</view>
		</view>
		<view class="hospital-content">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					住院服务
				</view>
			</view>
			<view class="cu-card case no-card grid text-center col-4 bg-white">
				<view class="padding hospital-itme">
					<text class=".cuIcon-recharge text-white bg-green hospital-icon"></text>
					<text>住院押金</text>
				</view>
				<view class="padding hospital-itme">
					<text class="cuIcon-text text-white bg-olive hospital-icon"></text>
					<text>住院费用</text>
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
.hospital-add {
	cursor: pointer;
	display: flex;
    flex-direction: column;
	align-items: center;
	padding: 20px 0;
	border-radius: 5px;
}

.hospital-add text{
	font-size: 22px;
}

.hospital-itme {
	cursor: pointer;
	display: flex;
    flex-direction: column;
	align-items: center;
	color: 16px;
}
.hospital-itme .hospital-icon{
	display: block;
	font-size: 22px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	margin-bottom: 8px;
	border-radius: 50%;
}
</style>
