// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exp:[
      { 
        title:"一、仿京东商城",
        pro:"一个完善的京东商城，能够进行用户的注册、登录、加入购物车等一系列的基本操作，此项目主要体现用户购物的一个基本功能等。",
        technique:"应用技术：整体的页面由HTML+CSS，结合Flex来制作简单的布局、同时使用CSS3制作部分简单的效果；使用MySQL进行用户信息的数据存储，PHP来完成注册、登录、加入购物车、对商品的评价、上传图片等相关的功能。",
        sum:"项目总结：在项目中运用了较多的技能，主要考察了自己对技能的使用情况，同时在不同情况下使用的不同方法，如图片上传时，对图片格式的转换的解决等。"
      },
      {
        title: "二、仿支付宝App",
        pro: "项目介绍：参考支付宝App，能够进行页面的切换，首页里面应用的添加和删除，等",
        technique: "应用技术：该项目使用React前端框架，通过react-router路由进行页面的跳转，运用Antd进行页面的布局，使用Axios请求数据，对PHP内MySQL语句的编写及数据的返回情况来完成增删改查的操作。",
        sum: "项目总结：通过PHP前后端数据交互的一个操作，并对PHP及MySQL的了解有了提高，能够使用React前端框架，编写简单的App项目。"
      },
      {
        title: "三、Vue项目",
        pro: "项目介绍：通过网上免费的api接口，如 今日头条api，豆瓣网api，每日一文api，对api进行解析并用于项目的开发 。",
        technique: "应用技术：该项目使用Vue前端框架，通过vue-router路由进行页面的跳转，运用ElementUI进行页面的布局，使用vue-resource请求数据，并对获得到的数据通过vue进行展示。",
        sum: "项目总结：本次项目主要对复杂的api接口解析、理解，并通过vue进行展示;在编写项目过程中，出现了跨域问题，最后通过jsonp请求方式得到解决。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})