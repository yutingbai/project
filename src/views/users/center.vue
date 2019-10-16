<template>
  <div class="card">
    <div class="infoBox">
      <div class="info">
        <div>
          <img src="/img/avatar.jpg" alt="用户头像" />
        </div>
        <div>用户名称</div>
        <div class="default">评论了你的文章</div>
        <div>'</div>
        <div>bububububu</div>
        <div>'</div>
        <div class="data">
          2019-8-17
          <span>17:30</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/Header";
import axios from "axios"
export default {
  name: "users",
  components: {
    myHeader
  },
  data() {
    return {
     user:{}
    };
  },
 
  beforeRouteEnter(to, from, next) {
    var username = window.localStorage.getItem("name");
    var userHead = window.localStorage.getItem("userHead");
    let userId = window.localStorage.getItem("userId");
    console.log(username,userHead,userId)
    if (username !== userHead) {
      next(vm => {
         axios.get('/xuptbbs/user/'+userId).then((res)=>{
          document.cookie = `username: ${res.data.nickname},picture: ${res.data.avatarUrl},id:${res.data.id}`;
            localStorage.setItem("name", res.data.nickname);
            localStorage.setItem("userHead", res.data.avatarUrl);
  
        });
      });
    } else {
      console.log(1);
      next({ path: "/users/login" });
    }
  }
};
</script>

<style scoped>
.card {
  line-height: 50px;
  margin: 0 auto;
  width: 60%;
  height: 80px;
  border: 1px solid #999;
  margin-top: 15px;
  overflow: hidden;
}
img {
  margin: 15px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.info div {
  float: left;
  line-height: 80px;
  text-align: center;
}
.info .data {
  float: right;
  margin-right: 10px;
}
.default {
  margin: 0 5%;
}
</style>
