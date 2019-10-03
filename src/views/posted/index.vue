<template>
  <div id="main">
    <myHeader />
    <div class="wordList">
        <router-link tag="div" to="/posted/controller/all">全部文章</router-link>
        <router-link tag="div" to="/posted/controller/web">web前端</router-link>
        <router-link tag="div" to="/posted/controller/java">Java后台</router-link>
        <router-link tag="div" to="/posted/controller/other">其他相关</router-link>
    </div>
    
    <div id="content">
    
        <router-view />
    
    </div>
    <router-view name="detail" />
  </div>
</template>

<script>
import myHeader from "@/components/Header";
export default {
  name: "posted",
  components: {
    myHeader
  },
  mounted(){
    
  }
};
</script>

<style scoped>


</style>
