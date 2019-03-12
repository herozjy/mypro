<template>


  <div>
    <h3>每日一文</h3>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%" v-if="trueTable">
      <el-table-column
        prop="tableData">
      </el-table-column>
    </el-table>
          <div class="article">
            <h3>{{list.title}}</h3>
            <h5>{{list.author}}</h5>
            <div v-html="list.content" class="content_article"></div>
          </div>
    <div v-if="!loading">
      <router-link to="/articlerandom"><el-button>太棒啦，你看完一篇文章，点一下还有更多精彩</el-button></router-link>
      <div class="block">
        <el-button >查询对应日期的文章</el-button >
        <el-date-picker
          v-model="value1"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search" @click="searchArticle()">搜索</el-button>
      </div>
    </div>


  </div>

</template>

<script>

  export default {
    data(){
      return{
        list:[],
        loading: true,
        trueTable:true,
        tableData:[{
          tableData:""
        }],
        inpdata:"",
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',

      }
    },
    props:["content"],
    methods: {
      searchArticle(){
        var date= new Date(this.value1);
        var  getyear = date.getFullYear();
        var  getmonth = date.getMonth()+1;
        getmonth = getmonth<9?"0"+getmonth:getmonth;
        var getDate = date.getDate();
        getDate = getDate<9?"0"+getDate:getDate;
        var str = getyear.toString()+getmonth.toString()+getDate.toString();
        console.log(str);
        this.$router.push({ path: `/articledate/${str}` })
      }
    },
    mounted(){


      console.log(this.$route.params);
      var propsData =this.content;
      var api = "https://interface.meiriyiwen.com/article/"+propsData;

      this.$http.get(api).then(function(res){
        this.list=res.data.data;
        this.loading=false;
        this.trueTable=false;
        console.log(res.data.data);
      },function (err) {
        console.log(err);
      })




      // var api_jsonp="http://is.snssdk.com/api/news/feed/v51/";
      // var api_jsonp="https://api.douban.com/v2/movie/in_theaters";
      // // JSONP 请求
      // let JSONparams ={
      //
      //   jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
      // }
      // this.$http.jsonp(api_jsonp,JSONparams).then( (res) => {
      //   console.log(res);
      // }, (err) => {
      //   console.log(err);
      // })






    },
  }
</script>

<style scoped lang="scss">
  .article{
    padding: 5px 10px 10px 10px;

     h3{
       text-align: center;
     }
    h5{
      margin-left: 55%;
    }
    .content_article{

         text-indent: 2rem;
         line-height: 1.5rem;
    }
  }


</style>

