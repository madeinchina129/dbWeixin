 const app = getApp()

  Page({
    data: {
      text: "Page location"
    },
  onLoad: function(option) {
    this.setData({
      id: option.id,
      title:option.title,
      img:option.img,
      genres:option.genres,
      rating:option.rating,
      alt:option.alt
    })
    console.log(option.id)
  },
  jumpDet:function(e){
    console.log(e)
  },
  listenerBtnGetLocation: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  }
})
