import Vue from 'vue';

//配置路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//1.创建组件
import Article from '../components/Article.vue';
import Home from '../components/Home.vue';
import ArticleRandom from '../components/ArticleToday/ArticleRandom.vue';
import ArticleDate from '../components/ArticleToday/ArticleDate';
import News from "../components/News"
import Movie from "../components/Movie"
    import HotPlayMovies  from "../components/Movie/HotPlayMovies"
    import MovieInfo  from "../components/Movie/MovieInfo"



//2.配置路由   注意：名字

const routes = [
  {path:"/home",component:Home},
  { path: '/article', component: Article },
  {path:"/movies",component:Movie},
  {path:"/hotplaymovies",component:HotPlayMovies},
  {path:"/movieinfo/:info",component:MovieInfo},

  { path: '/articlerandom', component: ArticleRandom },
  { path: '/news', component: News},
  { path: '/articledate/:did', component: ArticleDate },
  { path: '*', redirect:"/home"}
];


//3.实例化VueRouter  注意：名字

const router = new VueRouter({
  mode: 'history',   /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})


//5 <router-view></router-view> 放在 App.vue

export default router;

