
// pages/home/index.js
const regeneratorRuntime = require("../../utils/regenerator-runtime");

const rpxTranslate = (number, target) => {
  let returnValue = 0;
  const sys = wx.getSystemInfoSync();
  const screenWidth = sys.screenWidth;
  if (target === 'px') {
    const numberPlusScreen = number * screenWidth;
    returnValue = Number(numberPlusScreen / 750);
  } else if (target === 'rpx') {
    const numberPlusScreen = number * 750;
    returnValue = Number(numberPlusScreen / screenWidth);
  }
  return returnValue;
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    bgMusic: 'cloud://develop-6fbae1.6465-develop-6fbae1-1257634907/marry/music/Could_This_Be_Love.mp3',
    isPlay: true,
    safeHeight: 0,
    mList: [ // 弹幕列表
    ],
    currentOffset: 0,
    isAuth: false,
    userInfo: {},
    isModalShow: false,
    zanNumber: 22,
    isShowMessage: true,
    bensonWord: ''
  },
  msgTotal: 0,
  zanTime: 0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.audioCtx = wx.createInnerAudioContext()
    this.audioCtx.onEnded(() => {
      this.audioCtx.destroy()
      this.audioCtx = wx.createInnerAudioContext()
      this.audioCtx.src = this.data.bgMusic
      this.audioCtx.autoplay = true
    })
    this.getSafeArea()
    const userInfo = wx.getStorageSync('userInfo')
    this.setData({
      isAuth: userInfo && userInfo.nickName,
      userInfo: userInfo || {}
    })
    this.getMessageList()
    this.getZanNumber()
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
    clearTimeout(this.timer)
    this.timer = null
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
  scrollToUpper(e) {},
  scrollToLower(e) {},
  onScroll(e) {},

  getSafeArea() {
    const sys =  wx.getSystemInfoSync()
    const safeHeight = sys.screenHeight - sys.safeArea.bottom
    this.setData({ safeHeight: rpxTranslate(safeHeight, 'rpx') })
  },
  goToMakePhoneCall({ currentTarget: { dataset: { phone } } }) {
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  audioPlay () {
    if (this.data.isPlay) {
      this.audioCtx.pause()
      this.setData({ isPlay: false })
    } else {
      this.audioCtx.play()
      this.setData({ isPlay: true })
    }
  },
  messageAnimate() {
    const { mList } = this.data
    const len = mList.length
    if (len <= 3) {
      return
    }
    const offset = (len - 3) * (56 + 10)
    this.timer = setTimeout(() => {
      let { currentOffset } = this.data
      if (currentOffset >= offset) {
        currentOffset = 0
        const delArr = mList.splice(0, len - 3)
        this.setData({ currentOffset, mList: mList.concat(delArr) })
      } else {
        currentOffset = currentOffset + 66
        this.setData({ currentOffset })
      }
      this.messageAnimate()
    }, 3000)
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于填写评论',
      success: (res) => {
        this.setData({
          isAuth: true,
          userInfo: res.userInfo
        })
        wx.setStorageSync('userInfo', res.userInfo)
      }
    });
  },
  openMessageModal() {
    this.setData({ isModalShow: true })
  },
  onCloseModal() {
    this.setData({ isModalShow: false })
  },
  onBensonInput({ detail: { value } }) {
    this.setData({
      bensonWord: value
    })
  },
  goToAlbums() {
    wx.navigateTo({ url: '/pages/albums/index' })
  },
  onClearMessage() {
    if (this.data.isShowMessage) {
      clearTimeout(this.timer)
      this.timer = null
      this.setData({
        isShowMessage: false
      })
    } else {
      this.setData({
        isShowMessage: true
      })
      this.messageAnimate()
    }
  },

  catchEvent() {},
  // 数据库操作
  async getMessageList() {
    const db = wx.cloud.database({
      env: 'develop-6fbae1'
    })
    const MAX_LIMIT = 20
    // 先取出集合记录总数
    const countResult = await db.collection('messageList').count()
    const total = countResult.total
    // 计算需分几次取
    const batchTimes = Math.ceil(total / MAX_LIMIT)
    // 承载所有读操作的 promise 的数组
    const tasks = []
    for (let i = 0; i < batchTimes; i++) {
      const promise = db.collection('messageList').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
      tasks.push(promise)
    }
    // 等待所有
    const res = (await Promise.all(tasks)).reduce((acc, cur) => {
      return {
        data: acc.data.concat(cur.data),
        errMsg: acc.errMsg,
      }
    })
    if (res && res.data && res.data.length) {
      this.setData({
        mList: res.data
      }, () => {
        this.messageAnimate()
      })
    }
  },
  insertMessageList() {
    const { userInfo, bensonWord } = this.data
    if (!bensonWord) {
      wx.showToast({
        title: '请输入祝福语',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    const db = wx.cloud.database({
      env: 'develop-6fbae1'
    })
    const params = {
      dateTime: +new Date(),
      bensonWord,
      bensonNickName: userInfo.nickName
    }
    db.collection('messageList').add({
      // data 字段表示需新增的 JSON 数据
      data: params,
      success: (res) => {
        wx.showToast({
          title: '感谢祝福',
          icon: 'none',
          duration: 2000
        })
        this.onCloseModal()
      }
    })
    const mList = this.data.mList
    mList.push({
      ...params,
      _id: `${+new Date()}`
    })
    this.setData({ mList })
  },
  async getZanNumber() {
    const db = wx.cloud.database({
      env: 'develop-6fbae1'
    })
    const countResult = await db.collection('zanNumber').count()
    const total = countResult.total
    this.setData({ zanNumber: total + 22 })
  },
  insertZanNumber() {
    if (+new Date() - this.zanTime <= 30 * 1000) {
      return 
    }
    this.zanTime = +new Date()
    const { userInfo, zanNumber } = this.data
    const db = wx.cloud.database({
      env: 'develop-6fbae1'
    })
    db.collection('zanNumber').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        number: zanNumber + 1,
        nickName: userInfo.nickName
      },
      success: (res) => {
      }
    })
    this.setData({ zanNumber: zanNumber + 1 })
  }
})