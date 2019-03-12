var WxParse = require('../../wxParse/wxParse.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData:{
      "5ac1a22011f48140d0002955": { "_id": "5ac1a22011f48140d0002955", "shop_id": 0, "cate_id": "5ac0896ca880f20358495508", "catename": "精选热菜", "title": "娃娃菜炖豆腐", "price": "2", "product_bar_code": "6921168550098", "num": "10", "description": "规格:500ml/瓶", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>", "img_url": "upload/20180417/1523969206225.jpg", "type": "1", "sort": "", "is_host": 1 },
      "5ac1eb591a6b2f48fcb06210": { "_id": "5ac1eb591a6b2f48fcb06210", "shop_id": 0, "cate_id": "5ac0896ca880f20358495508", "catename": "精选热菜", "title": "香酥黄金鱼", "price": "22", "product_bar_code": "324235", "num": "1", "description": "这是商品描述", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>香酥黄金鱼</p>", "img_url": "upload/20180417/1523969277382.jpg", "type": "2", "sort": "" },
      "5ac1f04bd1bef433a42614cd": { "_id": "5ac1f04bd1bef433a42614cd", "shop_id": 0, "cate_id": "5ac0896ca880f20358495508", "catename": "精选热菜", "title": "猪肉白菜", "price": "25", "product_bar_code": "", "num": null, "description": "海南现摘火龙果红星一号", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>猪肉白菜</p>", "img_url": "upload/20180417/1523969336562.jpg", "type": "2", "sort": "" },
      "5ad5ee4018644907b8dd58fa": { "_id": "5ad5ee4018644907b8dd58fa", "shop_id": 0, "cate_id": "5ac0896ca880f20358495508", "catename": "精选热菜", "title": "鲜蔬菌菇粥", "price": "21", "status": "1", "is_best": "1", "is_hot": "1", "sort": "", "content": "<p>鲜蔬菌菇粥</p>", "img_url": "upload/20180417/1523969600601.jpg", "add_time": "2018-04-17T12:53:20.631Z" },
      "5ac1e7e28169fd522c9f5c96": { "_id": "5ac1e7e28169fd522c9f5c96", "shop_id": 0, "cate_id": "5ac089e4a880f20358495509", "catename": "小吃零食", "title": "手撕包菜", "price": "67", "product_bar_code": "13124", "num": "23", "description": "124124", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>这是优选商品</p>", "img_url": "upload/20180417/1523969226807.jpeg", "type": "2", "sort": "" },
      "5ac2e79b127ca21160ffe32a": { "_id": "5ac2e79b127ca21160ffe32a", "shop_id": 0, "cate_id": "5ac089e4a880f20358495509", "catename": "特色菜", "title": "拍黄瓜", "price": "1", "product_bar_code": "6934502300709", "num": "100", "description": "规格:250ml/瓶", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p><span style=\"font-family: &quot;Microsoft YaHei&quot;; font-size: medium;\">拍黄瓜</span></p>", "img_url": "upload/20180417/1523969433759.jpg", "type": "1", "sort": "" },
      "5ad5b650c677913cdc50b04b": { "_id": "5ad5b650c677913cdc50b04b", "shop_id": 0, "cate_id": "5ac0d726a880f2035849550a", "catename": "城心小炒", "title": "凉拌三丝", "price": "1", "product_bar_code": "", "num": null, "description": null, "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>凉拌三丝</p>", "img_url": "upload/20180417/1523955280626.jpeg", "type": "1", "sort": "" },
      "5ac1f17d8aebb531f8a01b45": { "_id": "5ac1f17d8aebb531f8a01b45", "shop_id": 0, "cate_id": "5ac1ef07d1bef433a42614cc", "catename": "田园时蔬", "title": "八宝酱菜", "price": "76", "product_bar_code": "", "num": "23", "description": "猕猴桃精选", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p><span style=\"font-family: &quot;Microsoft YaHei&quot;; font-size: medium;\">八宝酱菜</span></p>", "img_url": "upload/20180417/1523969398170.jpg", "type": "2", "sort": "" },
      "5ad5ee1c18644907b8dd58f9": { "_id": "5ad5ee1c18644907b8dd58f9", "shop_id": 0, "cate_id": "5ad5bca1e4c24f45a84dbf1a", "catename": "粗粮主食", "title": "牛肉馅饼", "price": "24", "status": "1", "is_best": "1", "is_hot": "1", "sort": "", "content": "<p>牛肉馅饼</p>", "img_url": "upload/20180417/1523969564844.jpg", "add_time": "2018-04-17T12:52:44.852Z" },
    

    },
    list: [],
    host: 'http://a.itying.com/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //获取上一个页面的传值
    console.log(options);
    this.requestData(options.id);


    // var article = '<h2>我是HTML代码</h2>';

    // var that = this;
    // WxParse.wxParse('article', 'html', article, that, 5);



  },

  requestData(id) {

    var that = this;
    var data_1 = this.data.allData[id]
    console.log(data_1)

    var article = data_1.content;
    WxParse.wxParse('article', 'html', article, that, 5);

    this.setData({
      list:data_1
    })
    
    // var api = 'http://a.itying.com/api/productcontent?id=' + id;

    // wx.request({
    //   url: api, //仅为示例，并非真实的接口地址     
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {

    //     var data = res.data.result[0];
    //     data.img_url = data.img_url.replace(///g, '/');

    //     //解析html
    //     var article = data.content;
    //     WxParse.wxParse('article', 'html', article, that, 5);


    //     that.setData({
    //       list: data
    //     })
    //   }
    // })

  }


})