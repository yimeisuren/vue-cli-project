// // 将main.js中配置的路由映射专门放到该文件中进行配置
// import {createRoute} from "vue-router/src/util/route";
//
// // 导出该文件的route对象
// const route = createRoute(
//     {
//         mode: 'history',
//         routes: [
//             // 设置路由
//             {
//                 path: '/',
//                 name: 'welcome',
//                 // 动态导入，懒加载的方式，性能更好些
//                 component: () => import('@/views/Welcome')
//
//             },
//             {
//                 path: '/users',
//                 name: 'user',
//                 component: UsersList
//             }
//         ],
//     }
// );
//
// export default route;