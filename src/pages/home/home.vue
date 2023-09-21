<template>
	<view class="home">
		<view class="header" :style="{'background': `url( ${ background } )`,'padding-top': top + 'px'}">
			<view class="subscribe" @click="jump('/pages/messageList/messageList')">
				<text class="cuIcon-notice"></text>
			</view>
			<view class="search">
				<view class="search-input">
					<view class="cuIcon-search"></view>
					<input v-model="searchValue" class="uni-input" placeholder="搜索医生、科室" @enter="search" />
				</view>
				<button class="cu-btn round bg-green shadow" @click="search">搜索</button>
			</view>
			<view class="header-conntent nav-list">
				<view class="nav-li bg-green">
					<view class="nav-title">挂号</view>
					<view class="nav-name">当天挂号 预约挂号</view>
					<text class="cuIcon-tag"></text>
				</view>
				<view class="nav-li bg-blue">
					<view class="nav-title">缴费</view>
					<view class="nav-name">快速缴费不排队</view>
					<text class="cuIcon-refund"></text>
				</view>
			</view>
		</view>
		<view class="shortcut grid margin-bottom text-center col-3 bg-white" >
			<view class="padding solid-right">
				<text class="cuIcon-friendadd text-olive shortcut-icon"></text>
				<text>建档绑卡</text>
			</view>
			<view class="padding solid-right">
				<text class="cuIcon-friendfavor text-green shortcut-icon"></text>
				<text>驾驶员体检</text>
			</view>
			<view class="padding">
				<text class="cuIcon-qrcode text-blue shortcut-icon"></text>
				<text>亮码</text>
			</view>
		</view>
		<view class="outpatient">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="cuIcon-titles text-green"></text>
					门诊服务
				</view>
			</view>
			<view class="cu-card case no-card grid text-center col-4 bg-white">
				<view class="margin-bottom outpatient-itme" 
					v-for="itme in outpatientList" 
					:key="itme.text"
					@click="jump(itme.url)">
					<text :class="[itme.icon, itme.iconColor,'text-white','outpatient-icon']"></text>
					<text>{{ itme.text }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = getApp();
	
	export default {
		data() {
			const systemInfoS = uni.getSystemInfoSync()
			return {
				background: "/static/bj.png",
				top: systemInfoS.statusBarHeight,
				searchValue: '',
				outpatientList: [
					{
						icon: 'cuIcon-safe',
						iconColor: 'bg-green',
						text: '核酸检测',
						url: '/'
					},
					{
						icon: 'cuIcon-text ',
						iconColor: 'bg-olive',
						text: '查病历',
						url: '/'
					},
					{
						icon: 'cuIcon-calendar',
						iconColor: 'bg-cyan',
						text: '查清单',
						url: '/'
					},
					{
						icon: 'cuIcon-album',
						iconColor: 'bg-green',
						text: '查报告',
						url: '/'
					},
					{
						icon: 'cuIcon-album',
						iconColor: 'bg-blue',
						text: '电子健康码',
						url: '/'
					},
					{
						icon: 'cuIcon-copy',
						iconColor: 'bg-green',
						text: '挂号记录',
						url: '/'
					},
					{
						icon: 'cuIcon-footprint',
						iconColor: 'bg-cyan',
						text: '缴费记录',
						url: '/'
					},
					{
						icon: 'cuIcon-infofill',
						iconColor: 'bg-orange',
						text: '医院介绍',
						url: '/'
					},
					{
						icon: 'cuIcon-add bg-olive',
						iconColor: 'bg-olive',
						text: '医保定点',
						url: '/'
					},
				]
			}
		},
		onLoad() {
			// console.log(reuslt)
			
		},
		methods: {
			search() {
				if (this.searchValue.length) {
					this.jump('/pages/search/search?searchValue=' + this.searchValue)
				} else {
					this.jump('/pages/search/search')
				}
			},
			jump: app.jump
		}
	}
</script>

<style>
.header {
	width: 100vw;
}
.subscribe {
	cursor: pointer;
	margin-left: 15px;
	height: 36px;
	width: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0,0,0,.3);
	border-radius: 15px;
}
.subscribe text {
	color: #fff;
	font-size: 20px;
}
.search{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 20px;
}
.search > button{
	margin-left: 15px;
}
.search-input {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	font-size: 14px;
	padding: 5px 10px;
	border-radius: 15px;
}
.search-input > .uni-input {
	flex: 1;
}

.search-input > .cuIcon-search{
	margin: 0 5px;
}
.nav-list {
	margin: 15px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px 0;
    justify-content: space-between;
}
.nav-li {
	cursor: pointer;
    padding: 15px;
    border-radius: 6px;
    width: 45%;
    margin: 0 2.5% 20px;
    background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;
}

/* .header-conntent > view{
	margin: 10px;
	height: 120px;
} */
.nav-li::after {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: inherit;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -10%;
    border-radius: 5px;
    opacity: .2;
    -webkit-transform: scale(.9);
    transform: scale(.9);
}
.nav-title {
    font-size: 16px;
    font-weight: 300;
}
.nav-name {
    font-size: 14px;
    text-transform: Capitalize;
    margin-top: 10px;
    position: relative;
}
.nav-li text {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 26px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
/* .shortcut{
	margin-bottom: 20px;
} */
.shortcut > view,
.outpatient-itme {
	cursor: pointer;
	display: flex;
    flex-direction: column;
	align-items: center;
	color: 16px;
}

.shortcut > view .shortcut-icon{
	font-size: 26px;
	margin-bottom: 8px;
}
.outpatient-itme .outpatient-icon{
	display: block;
	font-size: 22px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	margin-bottom: 8px;
	border-radius: 50%;
}
</style>
 