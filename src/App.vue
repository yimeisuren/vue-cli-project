<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--在App.vue中使用HelloWorld组件-->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// 导入HelloWorld.vue组件
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // 搭配import xxx from xxx共同使用
  components: {
    HelloWorld
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
