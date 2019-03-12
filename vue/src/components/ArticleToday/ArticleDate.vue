<template>
  <div>
    <h3>特定一文</h3>
    <div class="article">
      <h3>{{list.title}}</h3>
      <h5>{{list.author}}</h5>
      <div v-html="list.content" class="content_article"></div>
      <div class="deliverDate" v-if="list.date">发表日期：{{list.date.curr}}</div>
    </div>
    <div v-if="listdata">
      <el-button @click="reload()">太棒啦，你看完一篇文章，点一下还有更多精彩</el-button>
      <div>
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
  </div>
</template>

<script>
    export default {
        name: "ArticleDate",
      data(){
        return{
          listdata:false,
          list:[],
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
      methods:{
        reload(){
          this.$router.go(-1)
        },
      },
      mounted(){
        console.log(this.$route.params.did);

        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        var api = "https://interface.meiriyiwen.com/article/day?dev=1&date="+this.$route.params.did;
        this.$http.get(api).then(function (res) {
          this.list = res.data.data;
          this.listdata=true
          loading.close();
          console.log(res.data.data);
        }, function (err) {
          console.log(err);
        })
      }
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
