Component({
	data: {
	  selected: 0,
	  color: "#a5b5b5",
	  selectedColor: "#22cd5e",
	  list: [
		{
			pagePath: "/pages/home/home",
			iconPath: "cuIcon-home",
			text: "首页"
		},{
			pagePath: "/pages/beInHospital/beInHospital",
			iconPath: "cuIcon-shopfill",
			text: "住院服务"
		},
		//   {
		// 	pagePath: "/pages/lianPage/lianPage",
		// 	iconPath: "/image/tabBar/icon_33.png",
		// 	selectedIconPath: "/image/tabBar/icon_3.png",
		// 	text: "个人中心"
		//   }
		]
	},
	attached() {
	},
	methods: {
	  switchTab(e) {
		const data = e.currentTarget.dataset
		const url = data.path
		wx.switchTab({url})
		this.setData({
		  selected: data.index
		})
	  }
	}
  })