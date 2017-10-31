<template>
  <div>
    <mt-search  class="search" v-model="value"></mt-search>
    <div class="sweiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../assets/1.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/2.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/3.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/4.png" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sweiper{
      width:100%;
      height:188px;
      position:relative;
    }
    .sweiper img{
      width:100%;
      height:100%;
      overflow:hidden;
    }
  .search{
    height:52px;
    margin-bottom:10px;

  }

</style>
