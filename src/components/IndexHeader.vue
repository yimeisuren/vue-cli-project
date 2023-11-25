<template>
  <div class="indexHeader">
    Header文字
  </div>
</template>

<script>
export default {
  name: "IndexHeader.vue"
}
</script>

<style scoped >
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.indexHeader {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: orchid;
  color: white;
}
</style>