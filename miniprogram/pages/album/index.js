// pages/album/index.js
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.hideShareMenu()
    const sys = wx.getSystemInfoSync()
    const menu = wx.getMenuButtonBoundingClientRect()
    const backBtnWidth = menu.height
    const backBtnTop = menu.top
    const backBtnLeft = sys.screenWidth - menu.right
    this.setData({
      backBtnWidth,
      backBtnTop,
      backBtnLeft
    })
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
  goBack() {
    try {
      wx.navigateBack()
    } catch(e) {
      wx.navigateTo({ url: '/pages/invitation/index' })
    }
  }
})