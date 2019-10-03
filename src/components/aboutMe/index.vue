<template>
    <div class="card">
        <div class="infoBox">
        <div class="info">
            <div><img src="/img/avatar.jpg" alt="用户头像" /></div>
            <div>用户名称</div>
            <div class="default">评论了你的文章</div>
            <div>'</div>
            <div>bububububu</div>
            <div>'</div>
            <div class="data">2019-8-17 <span> 17:30 </span></div>
            
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'aboutMe'
}
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
.info div{
    float: left;
    line-height: 80px;
    text-align: center;
}
.info .data{
    float: right;
    margin-right: 10px;
}
.default{
    margin: 0 5%;
}

</style>