import Vue from 'vue'
import VueRouter from 'vue-router'
// import Search from './../components/search/search'
import mymusic from './../components/mymusic/myMusic'
import findmusic from './../components/findMusic/findmusic'
import community from './../components/community/Community'
import musicrecommend from './../components/musicrecommend/musicrecommend'
//import Findsheet from './../components/findsheet/findsheet'
import setColor from './../components/setColor'
import info from './../components/info'
import editname from './../components/editname'



Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      // +++++++++++++++++++++ 首页
      path: '/',
      redirect: '/mymusic'
    },
    {
      // 顶部三个的第一页   相当于首页
      path: '/mymusic',
      component: mymusic
    },
    {
      // +++++++++++++++++++++ findmusic 顶部三个的第二页
      path: '/findmusic',
      component: findmusic,
        //菜单的router
      children: [{
        // 第二页的第一个
        path: '',
        redirect: '/findmusic/musicrecommend'
      },
      {
        // findmusic   第一页
        path: '/findmusic/musicrecommend',
        component: musicrecommend
      }
          //,
      //{
        // findmusic   第一页
        //path: '/findmusic/findsheet',
        //component: Findsheet
      //}
  ]
    },
    {
      // +++++++++++++++++++++ 顶部三个的第三页
      path: '/community',
      component: community
    },
    {
        path: '/info',
        component: info
    },
    {
        path: '/editname',
        component: editname
    },
    {
      // +++++++++++++++++++++ 个性换肤
      path: '/setColor',
      component: setColor
    }
    // {
    //   // 搜索页
    //   path: '/search',
    //   name: 'Search',
    //   component: Search
    // }
  ]
})
