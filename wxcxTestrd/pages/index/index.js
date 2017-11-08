//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movieList:[],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    oneList: [{
      id: 1,
      name: '应季鲜果',
      count: 1
    }, {
      id: 2,
      name: '精致糕点',
      count: 6
    }, {
      id: 3,
      name: '全球美食烘培原料',
      count: 12
    }, {
      id: 4,
      name: '无辣不欢生猛海鲜',
      count: 5
    }]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  loadMovie: function () {
    var that = this;
    var doubanUrl = 'https://api.douban.com/v2/movie/search?q=%E5%BC%A0%E8%89%BA%E8%B0%8B&start=0';
    wx.request({
      url: doubanUrl,
      data: {},
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        wx.hideLoading();
        var data = res.data;

        that.setData({ movieList: data.subjects });
        console.log(data.subjects);
      }


    });

  },
  onLoad: function () {
    this.loadMovie()
  },
  readDetail: function (e) {

    var $data = e.currentTarget.dataset; //打印可以看到，此处已获取到了包含id、title、和content的对象
    console.log($data.id);
    console.log($data.title);
    console.log($data.img);
    console.log($data.rating);
    console.log($data.genres);
    console.log($data.alt);
    wx.navigateTo({
      url: "../details/details?id=" + $data.id + "&title=" + $data.title + "&img=" + $data.img + "&rating=" + $data.rating + "&genres=" + $data.genres+"&alt="+$data.alt//传参跳转即可
    })
}
})
