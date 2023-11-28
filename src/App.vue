<template>
  <nav>
    <!--router-link：生成超链接-->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <!--router-view相当于占位符，使用不同的路由对应的Vue组件时，会渲染在该位置上-->
  <router-view/>

  <!--在App.vue中使用自定义的组件-->
  <IndexHeader></IndexHeader>
  <IndexPage></IndexPage>
  <IndexFooter></IndexFooter>
</template>

<script>
// 导入拆分编写的vue组件
import IndexHeader from "@/components/IndexHeader";
import IndexFooter from "@/components/IndexFooter";
import IndexPage from "@/components/IndexPage";

export default {
  name: 'App',
  // 搭配import xxx from xxx共同使用
  components: {
    IndexHeader,
    IndexFooter,
    IndexPage
  },
  methods: {

    routeJump() {
      // 编程式的路由跳转方式，其中this.$router.push对应router-link标签中的to属性
      this.$router.push('/')
    }
  }
}
</script>

<!--使用less，方便进行样式的设置，但是需要安装less和less-loader-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
