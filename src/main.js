// main.js的作用：
// 1. 项目的入口文件
// 2. 导入App.vue，渲染index.html（该html页面是固定的）

// 导入Vue的核心包，相当于在html页面中使用<script src="xxx/vue.js"></script>
import {createApp} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
// 导入App.vue组件（全局注册：在main.js中导入）
import App from '@/App.vue'
import SubmitBtn from "@/components/SubmitBtn";
import HelloWorld from '@/components/HelloWorld'


// TODO: Vue路由是不是没有像后端发送请求呢？
// Vue3.0版本需要搭配VueRouter4.0版本
// 配置路由
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        // 设置路由
        {path: '/', component: HelloWorld},
        {path: '/users', component: HelloWorld},
        {
            path: '/404',
            component: () => import('@/views/404View')
        },
        {
            //Vue3换了一种写法：https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
            path: '/:pathMatch(.*)*',
            redirect: '/404'
        }
    ]
})

// 5. 创建并挂载根实例
const app = createApp(App)
//整个应用支持路由。
app.use(router)
    // 注册全局组件，组件名需要不能只是一个单词，并且注册组件的component()要在mount()之前
    .component('SubmitBtn', SubmitBtn)
    // .mount('#app')相当于在Vue基础中的 el:'#app'，作用完全相同
    .mount('#app')


