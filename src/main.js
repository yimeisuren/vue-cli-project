// main.js的作用：
// 1. 项目的入口文件
// 2. 导入App.vue，渲染index.html（该html页面是固定的）

// 导入Vue的核心包，相当于在html页面中使用<script src="xxx/vue.js"></script>
import {createApp} from 'vue'
// 导入App.vue组件
import App from './App.vue'

// .mount('#app')相当于在Vue基础中的 el:'#app'，作用完全相同
createApp(App)
    .mount('#app')
