<template>
<div class="in_theaters">
  <div>
    <span>{{title}}</span>
    <el-cascader
      :options="options"
      :show-all-levels="false"
      @change="changProvince"
    ></el-cascader>

  </div>
  <ul>
    <li v-for="(item ,index) in list" v-bind:key="item.id" >
      <router-link :to="'/movieinfo/'+[item.id,city]" >
        <img :src="item.images.large" alt="">
        <el-rate
          :value="item.rating.average/2"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        <div> {{item.original_title}}</div>

      </router-link>

    </li>
  </ul>


</div>
</template>

<script>
    export default {
        name: "HotPlayMovies",
      data(){
          return{
            title:"",
            city:"厦门",
            list:[],
            options:[
              {
                value: '福建',
                label: '福建',
                children:[
                    {
                      value: '莆田',
                      label: '莆田',
                    },
                    {
                      value: '厦门',
                      label: '厦门',
                     },
                    {
                      value: '龙岩',
                      label: '龙岩',
                    }
                ]
              },
              {
                value: '广东',
                label: '广东',
                children:[
                  {
                    value: '深圳',
                    label: '深圳',
                  },
                  {
                    value: '广州',
                    label: '广州',
                  },
                  {
                    value: '中山',
                    label: '中山',
                  }
                ]
              },
              {
                value: '北京',
                label: '北京',
                children:[
                  {
                    value: '北京',
                    label: '北京',
                  },

                ]
              },

            ]

          }
      },
      methods:{
        getData(){

          var api_jsonp="https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city="+this.city;

          let JSONparams ={
            jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
          }
          this.$http.jsonp(api_jsonp,JSONparams).then( (res) => {
            console.log(res.body.subjects);
            this.list=res.body.subjects;

            this.title=res.body.title;
          }, (err) => {
            console.log(err);
          })

        },
        changProvince(city){
          this.city=city[1];

          console.log(city);
          this.getData();
        }
      },
      mounted(){
          this.getData();






        }
    }
</script>

<style scoped>
     ul,li{
       padding: 0;
       margin: 10px 0  0 0;
list-style: none;
     }
     a{
       text-decoration: none;
     }
    .in_theaters ul {
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .in_theaters ul li{
        text-align: center;
        width: 48%;
        height: auto;
        box-sizing: border-box;
        padding: 5px;
    }
    .in_theaters ul li img{
      margin-bottom: 5px;
      width: 100%;

    }


</style>
