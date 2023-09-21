<template>
	<view class="search">
        <view  class="cu-bar search bg-white">
            <view class="search-form round">
                <text class="cuIcon-search"></text>
                <input v-model="searchData" placeholder="搜索图片、文章、视频" @onfirm="loadData">
            </view>
            <view class="action">
                <button @click="loadData" class="cu-btn bg-green shadow-blur round">搜索</button>
            </view>
        </view>
        <view class="department margin-bottom">
            <view class="cu-bar bg-white">
                <view class="action">
                    <text class="cuIcon-titles text-green"></text>
                    科室
                </view>
            </view>
            <view class="cu-list menu">
                <view class="cu-item arrow" v-for="itme in departmentList" :key="itme.name">
                    <view class="content">
                        <text class="cuIcon-title text-green"></text>
                        <text>{{ itme.name }}</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="doctor">
            <view class="cu-bar bg-white">
                <view class="action">
                    <text class="cuIcon-titles text-green"></text>
                    医生
                </view>
            </view>
            <view class="bg-white">
                <view class="flex align-center justify-between solid-bottom padding" 
                v-for="item in doctorList" 
                :key="itme.name">
                    <view class="flex align-center ">
                        <view class="cu-avatar radius lg margin-right"></view>
                        <view>
                            <view class="text-grey">
                                <text>{{ item.name }}</text>
                            </view>
                            <view class="text-gray text-sm flex">
                                <view class="text-cut">{{ item.role }}</view>
                            </view>
                        </view>
                    </view>
                    <view class="action justify-end">
                        <view class="padding-xs">
                            <view class="cu-tag light bg-cyan round">{{ item.department }}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                searchData: '',
                departmentList: [
                    {
                        name: '急诊科'
                    },
                    {
                        name: '中医固伤科'
                    },
                    {
                        name: '牙科'
                    },
                    {
                        name: '儿童保健'
                    },
                ],
                doctorList: [
                    {
                        name: '刘医生',
                        role: '副主任医生',
                        department: '神经内科'
                    },
                    {
                        name: '陈医生',
                        role: '主任医生',
                        department: '牙科'
                    },
                    {
                        name: '王医生',
                        role: '主治医生',
                        department: '内科'
                    },
                    {
                        name: '历医生',
                        role: '主治医生',
                        department: '中医固伤科'
                    },
                ]
			}
		},
		onLoad(option) {
            console.log(option.searchValue)
            if (option.searchValue && option.searchValue.length) this.searchData = option.searchValue
		},
		methods: {
            loadData() {
                console.log('请求成功：' + this.searchData)
            }
		}
	}
</script>

<style>
</style>
