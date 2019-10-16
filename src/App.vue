<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App',
    // 提供reload方法
    provide: function () {
      return {
        reload: this.reload
      }
    },
    // isRouterAlive控制显示
    data: function () {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      // 刷新方法
      reload: function () {
        this.isRouterAlive = false;
        // 该方法会在dom更新后执行
        this.$nextTick(function () { this.isRouterAlive = true })
      }
    }
  }
</script>
    <router-view/>

</template>

<style lang="scss">

</style>
>>>>>>> 027c992dbf02e54cdd3d8dc9f07d43df7f1018a9
