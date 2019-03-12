<template>
  <div>
    <h2>{{list.original_title}}</h2>
    <div>
      <div class="movie_info">
        <div class="movie_info_l">
            <div class="rating">
                 <span class="rating_l">
                         <el-rate
                           :value="list.rating.average/2"
                           disabled
                           show-score
                           text-color="#ff9900"
                           score-template="{value}">
                         </el-rate>
                </span>
                <span class="rating_r"> {{list.ratings_count}}人评价</span>
            </div>


          <span v-for="d in list.durations">{{d}}</span>
          <span v-for="g in list.genres">/{{g}}</span>
          <span v-for="di in list.directors">/{{di.name}}(导演)</span>
          <span v-for="ca in list.casts">/{{ca.name}}</span>
          <span v-for="pu in list.pubdates">/{{pu}}</span>


        </div>


        <div class="movie_info_r">
          <img :src="list.images.medium" alt="">
        </div>
      </div>
    </div>
    <div class="wish_val">
      <div>想看</div>
      <div>看过</div>
    </div>
    <h4>所属频道</h4>
    <div class="tags">

      <el-tag type="success" v-for="it in list.tags">{{it}} <i class="el-icon-arrow-right"></i></el-tag>
    </div>
    <h4>{{list.original_title}}的剧情简介</h4>
    <div style="text-indent: 2rem">
      {{list.summary}}
    </div>
    <!--<h4>影人</h4>-->
    <!--<h4>{{list.original_title}}的 预告片(21) 、 视频评论(2) 和 图片(336)</h4>-->


    <h4>{{list.original_title}}的短评({{list.comments_count}})</h4>

    <div class="popular_comments">
            <ul>
              <li v-for="popc in list.popular_comments">
                  <div class="popc_l">
                    <img :src="popc.author.avatar" alt="">
                  </div>
                  <div  class="popc_r">
                    <div class="popc_r_rating">
                        <span class="popc_r_span1">  {{popc.author.name}}</span>
                        <span class="popc_r_span2">
                            <el-rate
                              :value="popc.rating.value"
                              disabled
                              show-score
                              text-color="#ff9900"
                              score-template="{value}">
                          </el-rate>
                        </span>
                      </div>
                    <div style=" margin-bottom: 10px;"> 评价时间{{popc.created_at}}</div>
                    <div style=" margin-bottom: 10px;color: #7d7d7d">{{popc.content}}</div>
                    <div style=" margin-bottom: 10px;">点赞{{popc.useful_count}}</div>


                  </div>
              </li>
            </ul>
        </div>

    <h4>{{list.original_title}}的影评({{list.reviews_count}})</h4>
  <div class="reviews">
      <ul>
        <li v-for="ir in list.popular_reviews">
          <h4>{{ir.title}}</h4>
          <div class="ir_rating">
            <span>{{ir.author.name}}</span>
            <span class="popc_r_span2">
                     <el-rate
                       :value="ir.rating.value"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
                      </el-rate>
            </span>
          </div>
          <div style="color: #7d7d7d;text-indent: 2rem">
            {{ir.summary}}
          </div>
        </li>
      </ul>
  </div>

  </div>
</template>

<script>
  export default {
    name: "MovieInfo",
    data() {
      return {
        list: []
      }
    },
    mounted() {
      var str = this.$route.params.info;
      var str = str.split(',')
      console.log(str);
      var api_jsonp = "http://api.douban.com/v2/movie/subject/" + str[0] + "?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + str[1] + "&client=something&udid=dddddddddddddddddddddd";
      let JSONparams = {
        jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
      }
      this.$http.jsonp(api_jsonp, JSONparams).then((res) => {
        console.log(res.body);
        this.list = res.body

      }, (err) => {
        console.log(err);
      })

    }
  }
</script>

<style scoped>
  .rating {
    overflow: hidden;
    margin-bottom: 20px;
  }

  .rating_l, .rating_r {
    float: left;

  }
  .rating_l{
    margin-right: 15px;

  }
  .rating_r {
    color: #999;
    font-size: 12px;
  }

  .movie_info {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }

  .movie_info_l {
    width: 65%;
    line-height: 1.5rem

  }

  .movie_info_r {
    width: 30%;
  }

  .movie_info_r img {
    width: 100%
  }
  .wish_val{
    margin: 15px 0 ;
    display: flex;
    justify-content: space-between;
  }
  .wish_val div{
    padding: 5px 0 ;
    border: 1px solid #ffc741;
    color:#ffc741 ;
     width: 48%;
    text-align: center;
  }
  .tags{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tags span{
    margin-bottom: 10px;
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .popular_comments ul li{
    overflow: hidden;

  }
.popc_l{
  float: left;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
}
  .popc_r{
    float: left;
    margin-left: 5%;
    width: 75%;
    font-size: 14px;
  }
  .popc_r_rating,.ir_rating{
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .popc_r_span2{
      margin-left: 15px;
  }
</style>
