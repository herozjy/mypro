<template>
  <ul class="ulNews">
    <li v-for="(item,index) in list">
      <a :href="item.content.share_url">
        <div>{{ item.content.title}}</div>
        <div class="middle_image" v-if="!item.content.image_list">
          <img :src="item.content.middle_image.url" alt="" v-if="item.content.middle_image">
        </div>
        <div class="imgs" >
          <img :src="im.url" alt="" v-for="(im,index) in item.content.image_list">
        </div>
        <div class="span_small">
            <span style="color: #ff4966"> {{item.content.label}} </span>
          <span> {{item.content.media_name}} </span>
          <span>阅读{{
                item.content.read_count>10000?
                ((item.content.read_count)/10000).toFixed(1)+"万"
                :item.content.read_count}}</span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "NewsHot",
    data() {
      return {
        list: [],
        rflag :true,
      }
    },
    props: ["newsname"],
    methods:{
      getData(){

       if (this.rflag){
         this.rflag=false;
         var api_jsonp = "http://is.snssdk.com/api/news/feed/v51/?category=" + this.newsname;
         // var api_jsonp = "http://is.snssdk.com/api/news/feed/v51/?category" + "news_society";
         let JSONparams = {

           jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
         }
         this.$http.jsonp(api_jsonp,JSONparams).then((res) => {

           console.log(res);
           for (var i in res.body.data) {
             res.body.data[i].content = JSON.parse(res.body.data[i].content)
           }

           this.list = res.body.data
           this.rflag = true;
         }, (err) => {
           console.log(err);
         })
       }
      },

    },
    mounted() {
      var count = 20;
      console.log(this.newsname);
      this.getData();



      //   window.onscroll= () =>{
      //   //屏幕宽度
      //   var h = document.documentElement.clientHeight || document.body.clientHeight;
      //   //滚动高度
      //   var scrollH =window.pageYOffset||document.body.scrollTop
      //   var oliNode =  document.getElementsByClassName("ulNews")[0].children;
      //   var lastBox=oliNode[oliNode.length-1];
      //   var lastBoxDis  = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
      //
      //     if (lastBoxDis <= h + scrollH) {
      //       count +=20;
      //       this.getData(count);
      //     }
      // }

    }
  }
</script>

<style scoped>

  .imgs {
    width: 100%;
    display: flex;
    justify-content: space-between;

  }
.middle_image img{
  margin-left: 30px;
  margin-top: 5px;
}
  .imgs img {
    margin-top: 5px;
    float: left;
    width: 33%;
    height: 33%;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    border-bottom: 1px solid #ccc;


  }
  li{
    margin-bottom: 15px;
  }
  a{
    text-decoration: none;
    color: #1f1f1f;
  }
  .span_small{
    margin-bottom: 15px;
    margin-top: 5px;
    color: #999;
    font-size: 10px;
  }

</style>
