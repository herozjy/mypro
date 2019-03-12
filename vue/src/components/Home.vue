<template>


  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list" :key="item.id">
        <router-link :to="item.path">
          <img :src="item.src" alt="">
        </router-link>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
              msg:"我是home组件",
              list:[
                {path:"/article",title:"文章",src:"/src/assets/images/article.jpg"},
                {path:"/news",title:"今日头条",src:"/src/assets/images/news.jpg"},
                {path:"/hotplaymovies",title:"电影",src:"/src/assets/images/movie.jpg"},
                ]
            }
        }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
