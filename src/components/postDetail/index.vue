<template>

 <div>
    <div id="detailContrainer" class="slide-enter-active">
                <div class="content" v-html="content">{{content}}</div>
        </div>
  
     
</div>
</template>
<script>
import myHeader from "@/components/Header";
export default {
  name: "detail",
   components: {
    myHeader
  },
  data() {
    return {
      userId: window.localStorage.getItem("userId"),
      content:""
    };
  },
  props: ["cardId"],
  methods: {
    handleToBack() {
      this.$router.back();
    }
  },
  mounted() {
        console.log(this.cardId)
    this.axios
      .get(`/xuptbbs/post/detail?id=${this.cardId}&userId=${this.userId}`)
      .then(res => {
        this.content = res.data.content;
        console.log(this.content)
      });
    
  },
};
</script>
<style  scoped>
#detailContrainer{ position: absolute; left:0; top:0; z-index: 100; width:100%; min-height:100%; background:#f1f1f1;}
#detailContrainer.slide-enter-active{ animation:.3s slideMove;}
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
}
#detailContrainer .content{
    padding: 0 5%;
    background-color: #fff;
    width: 50%;
    margin: 0 auto;
}

</style>