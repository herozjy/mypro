<template>
    <div>
      <div class="title">今日头条 <i class="el-icon-refresh" @click="clickRefresh()"></i></div>
      <v-newstab></v-newstab>
    </div>
</template>

<script>
  import NewsTab from "./News/NewsTab"
    export default {
        name: "News",
      components:{
          "v-newstab" :NewsTab
      },
      methods:{
        clickRefresh(){
          this.$router.go(0)
        }
      },
      mounted(){

      }
    }

</script>

<style scoped>
.title{
  text-align: center;
font-size: 18px;
  font-weight: bold;

}


</style>
