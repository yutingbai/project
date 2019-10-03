<template>
  <div id="main">
    <myHeader />
    <div class="wordList">
        <router-link tag="div" to="/comperate/item/all">全部</router-link>
        <router-link tag="div" to="/comperate/item/team">找队友</router-link>
        <router-link tag="div" to="/comperate/item/item">找项目</router-link>
    </div>
    <div id="content">
     
        <router-view />
    
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/Header";
export default {
  name: "comperate",
  components: {
    myHeader
  }
};
</script>

<style>

</style>
