<template>
  <div>

    <v-articletoday  content="today?dev=1"></v-articletoday>

  </div>
</template>

<script>
  import  ArticleToday from "./ArticleToday/ArticleToday"
    export default {
        name: "ArticleToday",
      data(){
          return{

          }
      },
      components:{
        "v-articletoday" :ArticleToday
      }
    }
</script>

<style scoped>

</style>
