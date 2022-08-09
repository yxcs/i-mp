// components/page-turn/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
      observer(nV) {
        this.setData({ imgArr: nV })
      }
    },
    width: {
      type: Number,
      value: 0
    },
    height: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: [],
    flag: true,
    windowWidth: 0,
    windowHeight: 0,
    cardWidth: '750rpx'
  },

  attached() {
    const sys = wx.getSystemInfoSync()
    const { windowWidth, windowHeight } = sys
    const halfWidowWidth = parseInt(windowHeight / 2, 10) // 竖过来的，所以用height
    let cardWidth = halfWidowWidth > windowWidth ? windowWidth - 10 : halfWidowWidth - 10
    cardWidth = cardWidth + 'px'
    console.log(cardWidth, halfWidowWidth, windowWidth, windowHeight)
    this.setData({
      windowWidth,
      windowHeight,
      cardWidth
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setClass (e) {
      if (this.data.flag) {
        this.setData({
          flag: false
        })
        let imgs = this.data.imgArr;
  
        let index = e.currentTarget.dataset.index;
        imgs.map((ele,i) => {
          if (index == i) {
            imgs[i].isturn = !imgs[i].isturn;
            imgs[i].zIndex = 4;
  
          } else {
            imgs[i].zIndex = 1;
          }
        })
        if (index - 1 >= 0) {
          imgs[index - 1].zIndex = 3;
        }
        if (index + 1 < imgs.length) {
          imgs[index + 1].zIndex = 3;
        }
        if (index - 2 >= 0) {
          imgs[index - 2].zIndex = 2;
        }
        if (index + 2 < imgs.length) {
          imgs[index + 2].zIndex = 2;
        }
        this.setData({
          imgArr: imgs,
        })
      }
    },

    finish(){
      this.setData({
        flag: true
      })
    },
  }
})
