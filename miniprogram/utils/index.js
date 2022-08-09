module.exports = {
  isIpx: function () {
    if (typeof isIpx !== 'boolean') {
      const { model, screenHeight } = wx.getSystemInfoSync();
      if (/iPhone X/i.test(model.toLocaleLowerCase())) {
        isIpx = true;
      } else if (/iPhone/i.test(model.toLocaleLowerCase()) && (screenHeight >= 812)) {
        isIpx = true;
      } else {
        isIpx = false;
      }
    }
    return isIpx;
  }
}