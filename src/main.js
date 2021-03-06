import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router.js'
//开启debug模式
//Vue.config.debug = true;
//
//Vue.use(VueRouter);
//Vue.use(VueResource);
Vue.config.productionTip = false
// 创建一个路由器实例
// 并且配置路由规则
//const router = new VueRouter({
 //   mode: 'history',
  //  base: __dirname,
   // routes: [
        //{
        //    path: '/second',
        //    component: secondcomponent
        //}
  //  ]
//})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: { App }
})
//const app = new Vue({
//    router: router,
//    store: store,
//    render: h => h(App)
//}).$mount('#app')