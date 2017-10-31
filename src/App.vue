<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin:0px;
      padding:0px;

    }
    .mint-searchbar{
      padding:6px;
    }
  .mint-searchbar-inner{
    background:#78909C;
    border-radius: 0.7rem;
  }
    .mintui-search:before{
      font-size:22px;
      color: #fff;
    }
    .mint-searchbar-inner>input::-webkit-input-placeholder {
        color:#ffffff;font-size:14px;
    }
    .mint-searchbar-inner>input{
      background:#78909C;
      color:#fff;
    }
</style>
