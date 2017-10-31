<template>
  <div>
    <mt-header fixed title="包学习"></mt-header>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div >什么鬼</div>
  </div>
</template>

<script>
  export default {
    name: 'Regist',
    data () {
      return {
        msg: '欢迎注册'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .zhuce{
    background:yellow;
  }
  h1, h2 {
    font-weight: normal;
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
</style>
