// pages/invitation/index.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5288.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5292.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5298.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5314.jpg',
      'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/_P4I5328.jpg',
    ],
    sys: {},
    topHeight: 44,
    inv: '../../imgs/icon/inv.png',
    bgMusic: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/music/Could_This_Be_Love.mp3',
    isPlay: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const sys = wx.getSystemInfoSync()
    const menu = wx.getMenuButtonBoundingClientRect()
    this.setData({
      sys: {
        sys,
        menu
      },
      topHeight: menu.height + menu.top + (menu.top - sys.statusBarHeight)
    })
    this.audioCtx = wx.createInnerAudioContext()
    this.audioCtx.onEnded(() => {
      this.audioCtx.destroy()
      this.audioCtx = wx.createInnerAudioContext()
      this.audioCtx.src = this.data.bgMusic
      this.audioCtx.autoplay = true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.audioCtx.src = this.data.bgMusic
    this.audioCtx.autoplay = true
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
    return {
      title: '于晓超和王琳的婚礼邀请',
      path: '/pages/invitation/index',
      imageUrl: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/share-image.jpg'
    }
  },
  onShareTimeline() {
    return {
      title: '于晓超和王琳的婚礼邀请',
      query: '',
      imageUrl: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/share-image.jpg'
    }
  },
  goToAlbum () {
    wx.navigateTo({ url: '/pages/album/index' })
  },
  audioPlay () {
    if (this.data.isPlay) {
      this.audioCtx.pause()
      this.setData({ isPlay: false })
      wx.showToast({
        title: '您已暂停音乐播放~',
        icon: 'success',
        duration: 1500
      })
    } else {
      this.audioCtx.play()
      this.setData({ isPlay: true })
      wx.showToast({
        title: '背景音乐已开启~',
        icon: 'success',
        duration: 1500
      })
    }
  }
})