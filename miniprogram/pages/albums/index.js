// pages/albums/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_1: [
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5288.jpg',
        isturn: false,
        zIndex: 4,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5292.jpg',
        isturn: false,
        zIndex: 3,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5298.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5314.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5328.jpg',
        isturn: false,
        zIndex: 1,
      }
    ],
    list_2: [
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5288.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5292.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5298.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5314.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5328.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5371.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5378.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5389.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5404.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5426.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5444.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5459.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5484.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5484.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5540.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5573.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5604.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5632.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5725.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I6947.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I6966.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I7116.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I7221.jpg',
    ],
    list_3: [
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5288.jpg',
        isturn: false,
        zIndex: 4,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5292.jpg',
        isturn: false,
        zIndex: 3,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5298.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5314.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5328.jpg',
        isturn: false,
        zIndex: 1,
      }
    ],
    list_4: [
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5288.jpg',
        isturn: false,
        zIndex: 4,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5292.jpg',
        isturn: false,
        zIndex: 3,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5298.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5314.jpg',
        isturn: false,
        zIndex: 1,
      },
      {
        src: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5328.jpg',
        isturn: false,
        zIndex: 1,
      }
    ],
    showType: 0, // 1: 水晶、2：全部、3：莫兰迪、4：娘家册、5：视频
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  catchEvent() {},
  closeCover() {
    this.setData({ showType: 0 })
  },
  goToAlbums({currentTarget: {dataset: { type }}}) {
    this.setData({ showType: type })
  },
  goToVideo({currentTarget: {dataset: { type }}}) {
    this.videoContext = wx.createVideoContext('myVideo')
    wx.showLoading({ title: '加载中' })
    this.setData({ showType: type }, () => {
      setTimeout(() => {
        wx.hideLoading()
      }, 3000)
    })
  },
  videoErrorCallback(e) {
    console.log('播放失败，稍后再试', e)
  },
  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  previewImage({currentTarget: {dataset: { index }}}) {
    const list = this.data.list_2
    wx.previewImage({
      current: list[index],
      urls: list,
    })
  }
})