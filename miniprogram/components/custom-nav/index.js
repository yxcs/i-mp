Component({
  properties: {
    type: {
      type: String,
      value: 'search'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    menuButtonTop: 0,
    menuButtonRight: 0,
    menuButtonHeight: 0,
    menuButtonWidth: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowPixelRatio: 0,
    isIos: null,
    statusBarHeight: 0,
    hGap: 0,
    vGap: 0,
    navWidth: 0
  },
  properties: {
  },
  observers: {
  },
  lifetimes: {
    attached() {
      const sys = wx.getSystemInfoSync()
      const menu = wx.getMenuButtonBoundingClientRect()

      const data = {
        menuButtonTop: menu.top,
        menuButtonRight: menu.right,
        menuButtonHeight: menu.height,
        menuButtonWidth: menu.width,
        windowWidth: sys.windowWidth,
        windowHeight: sys.windowHeight,
        windowPixelRatio: sys.pixelRatio,
        isIos: sys.system.indexOf('ios') > -1,
        statusBarHeight: sys.statusBarHeight,
        hGap: sys.windowWidth - menu.right,
        vGap: menu.top - sys.statusBarHeight
      }

      data.navWidth = data.windowWidth - data.hGap * 4 - data.menuButtonHeight - data.menuButtonWidth

      this.setData(data)
    }
  },
  methods: {
  }

});
