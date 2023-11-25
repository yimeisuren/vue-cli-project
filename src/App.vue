<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--在App.vue中使用HelloWorld组件-->
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

<!--方便进行-->
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
