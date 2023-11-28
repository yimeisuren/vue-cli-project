<template>
  <div class="indexPage">
    <span>Page文字</span>
    <!--全局注册没有提示-->
    <SubmitBtn></SubmitBtn>

    <div>
      输入文本：<input type="text" v-model="content">
      <button @click="startWs">建立websocket连接</button>

      <button @click="playVoice">播放语音</button>

      <button @click="sendXhr()"></button>
    </div>
  </div>
</template>

<script>
const synth = window.speechSynthesis;
// const webscoket = new WebSocket();
const msg = new SpeechSynthesisUtterance();
import axios from 'axios'


export default {
  name: "IndexPage",
  data() {
    return {
      content: '',

    }
  },
  methods: {
    //建立websocket连接
    startWs() {
      this.websocket.addEventListener("message", (e) => {
        console.log(e);
      })
    },
    playVoice() {
      this.handleSpeak('小朋友，你是否有很多问号') // 传入需要播放的文字
    },
    // 语音播报的函数
    handleSpeak(text) {
      msg.text = text;     // 文字内容: 小朋友，你是否有很多问号
      msg.lang = "zh-CN";  // 使用的语言:中文
      msg.volume = 1;      // 声音音量：1
      msg.rate = 1.5;        // 语速：1
      msg.pitch = 1;       // 音高：1
      synth.speak(msg);    // 播放
    },
    // 语音停止
    handleStop(e) {
      msg.text = e;
      msg.lang = "zh-CN";
      synth.cancel(msg);
    },

    sendXhr() {
      // 发送axios请求
      axios.request(
          {
            url: '/user',
            baseURL: 'https://www.baidu.com/api',
            method: 'get',
            data: {
              // 传递给后端的数据
              username: 'root',
              password: 'root'
            },
            params: {}
          }
      ).then((response) => {
        // 请求成功
        console.log(response);
      }).catch((exception) => {
        // 产生异常
        console.log(exception);
      })
    }
  }
}
</script>

<style scoped>
.indexPage {
  /*组件高度：height*/
  height: 500px;
  /*和其它组件的间距：margin*/
  margin: 20px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: orange;
  color: white;
}

</style>


