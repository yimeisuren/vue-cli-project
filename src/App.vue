<template>

  <nav>
    <!--router-link：生成超链接-->
    <router-link to="">Home</router-link>
    <router-link to="">About</router-link>
  </nav>

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
