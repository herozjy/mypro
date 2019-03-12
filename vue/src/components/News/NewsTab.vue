<template>
  <div>
    <el-tabs v-model="activeName2" @tab-click="handleClick" :tab-position="tabPosition">
      <el-tab-pane label="视频" name="first">
        <v-newshot :newsname="video"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="热点" name="second">
        <v-newshot :newsname="news_hot" v-if="isGetData['pane-second']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="社会" name="third">
        <v-newshot :newsname="news_society" v-if="isGetData['pane-third']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="娱乐" name="three">
        <v-newshot :newsname="news_entertainment" v-if="isGetData['pane-three']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="军事" name="five">
        <v-newshot :newsname="news_military" v-if="isGetData['pane-five']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="科技" name="six">
        <v-newshot :newsname="news_tech" v-if="isGetData['pane-six']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="汽车" name="seven">
        <v-newshot :newsname="news_car" v-if="isGetData['pane-seven']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="体育" name="eight">
        <v-newshot :newsname="news_sport" v-if="isGetData['pane-eight']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="财经" name="nine">
        <v-newshot :newsname="news_finance" v-if="isGetData['pane-nine']"></v-newshot>
      </el-tab-pane>
      <el-tab-pane label="国际" name="ten">
        <v-newshot :newsname=" news_world" v-if="isGetData['pane-ten']"></v-newshot>
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>


  </div>
</template>


<script>
  import NewsHot from "./NewsHot"

  export default {
    data() {
      return {
        tabPosition: "top",
        video: "video",
        news_hot: "news_hot",
        news_society: "news_society",
        news_entertainment: "news_entertainment",
        news_military: "news_military",
        news_tech: 'news_tech',
        news_car: "news_car",
        news_sport: "news_sport",

        news_finance: "news_finance",
        news_world: "news_world",
        activeName2: 'first',
        isGetData: {
          "pane-second": false,
          "pane-third": false,
          "pane-three": false,
          "pane-five": false,
          "pane-seven": false,
          "pane-eight": false,
          "pane-nine": false,
          "pane-ten": false,
        },
      };
    },
    components: {
      "v-newshot": NewsHot,
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
        console.log(tab.$el.getAttribute("id"));
        var idName = tab.$el.getAttribute("id");
        this.isGetData[idName] = true;
      },
    }
  }
</script>

<style scoped>

</style>
