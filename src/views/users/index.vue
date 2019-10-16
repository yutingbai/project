<template>
  <div id="main">
    <myHeader />
      <div class="headbox">
        <div class="userBox">
        <div class="userId">{{user.nickname}}</div>
        <div class="userClass">{{user.major}} - {{user.grade}}</div>
        </div>
      <div class="CercleBox">
         <div class="img Cercle">
          <img :src="user.avatarUrl" alt="用户头像" />
        </div>
        <div class="zan Cercle">粉丝 <span>{{user.fans}}</span> &nbsp;&nbsp;</div>
        <div class="zhuan Cercle">关注 <span>{{user.follow}}</span>&nbsp;&nbsp;</div>
      </div>
      </div>
      <div class="wordList">
        <router-link tag="div" to="/users/aboutMe">与我相关</router-link>
        <router-link tag="div" to="/users/controller/myPost">我发布的</router-link>
        <router-link tag="div" to="/users/controller/mystar">我的收藏</router-link>
        <router-link tag="div" to="/users/myItem">参与项目</router-link>
    </div>
    <div id="content">

        <router-view />
     
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/Header";
export default {
  name: "users",
  inject: ['reload'],
  components: {
    myHeader
  },
  data(){
    return{
      user:{}
    }
  },
  mounted() {
    let userId = window.localStorage.getItem("userId");
     this.axios.get('/xuptbbs/user/'+userId).then((res)=>{
            // console.log(res)
            this.user= res.data;
            // console.log(this.user)
        });
  },
  
};
</script>

<style scoped>
.headbox {
  background: #eee;
  height: 150px;
  width: 95%;
  border-radius: 5px;
  margin-left: 2.5%;
}

.CercleBox{
  position: absolute;
  left: 50%;
  margin-top: 22px;
}
.Cercle {
  float: left;
  position: relative;
  font-size: 14px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  line-height: 90px;
  text-align: right;
  border: 3px solid #fff;
}
.img {
  top: 0;
  left: 0px;
  z-index: 2;
}

.zan {
  background-color: #32CD99;
  top: 0;
  left: -30px;
  z-index: 1;
}
.zhuan {
  background-color: #4EC3F7;
  top: 0;
  left: -60px;
  z-index: 0;
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
}
.userBox {
  float: left;
  /* border: 1px solid black; */
  position: absolute;
  left: 15%;
  margin-top: 22px;
  line-height: 40px;
}
.userId{
  font-size: 20px;
}
</style>
