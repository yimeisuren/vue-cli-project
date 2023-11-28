// main.js的作用：
// 1. 项目的入口文件
// 2. 导入App.vue，渲染index.html（该html页面是固定的）

// 导入Vue的核心包，相当于在html页面中使用<script src="xxx/vue.js"></script>
import {createApp} from 'vue'
import {createRoute} from "vue-router/src/util/route";
// 导入App.vue组件（全局注册：在main.js中导入）
import App from '@/App.vue'
import SubmitBtn from "@/components/SubmitBtn";

const route = createRoute(
    {
        mode: 'history',
        routes: [
            // 设置路由
            {path: '/', component: WelcomeScreen},
            {path: '/users', component: UsersList}
        ],
    }
);

const app = createApp(App);
app.use(route)
    // 注册全局组件，组件名需要不能只是一个单词，并且注册组件的component()要在mount()之前
    .component('SubmitBtn', SubmitBtn)
    // .mount('#app')相当于在Vue基础中的 el:'#app'，作用完全相同
    .mount('#app')


