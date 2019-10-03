<template>
  <div id="main">
    <myHeader />
    <div class="wordList">
          <router-link tag="div" to="/practice/controller/all">
         实习专栏
        </router-link>
    </div>
    <div id="content">
         <router-view />
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/Header";

export default {
  name: "piactice",
  components:{
	  myHeader
  }
};
</script>

<style>
</style>
