<template>
  <div id="main">
    <myHeader />
    <!-- <div class="searchBox">
      <section class="head">
        <form class="form">
          <input
            type="text"
            id="title"
            class="title"
            placeholder="找不到想看的？试搜搜关键字"
            required="required"
            autocomplete="off"
          />
        </form>
      </section>
    </div> -->
    <div class="wordList">
        <router-link tag="div" to="/question/controller/all">全部文章</router-link>
        <!-- <router-link tag="div" to="/question/controller/web">web前端</router-link>
        <router-link tag="div" to="/question/controller/java">java后台</router-link>
        <router-link tag="div" to="/question/controller/other">其他问答</router-link> -->
    </div>
    
    <div id="content">
     
        <router-view />
     
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/Header";
export default {
  name: "question",
  components: {
    myHeader
  }
};
</script>

<style scoped>

</style>
