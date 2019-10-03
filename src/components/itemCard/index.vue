<template>
  <div class="card">
    <div class="titleBox">
      <span>Font Awesome,一套绝佳的图标字体库和CSS框架</span>
    </div>
    <div class="pay">
      <span>带薪</span>
    </div>
    <div class="need">
      <span>这里是需求描述</span>
    </div>
    <div class="userBox">
      <div>
        <img src="/img/avatar.jpg" alt="用户头像" />
      </div>

      <div>
        <span>用户名称</span>
        <span style="margin-left: 10px;margin-right:10px;">|</span>
        <span>专业</span>
        <span>年级</span>
      </div>
    </div>

    <div class="button">
      <span>查看详情</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemCard",
   props : {
        item : {
          author: Object
        }

    },
    created(){
      console.log(this.item)
    }
    
};
</script>
<style scoped>
.card {
  line-height: 70px;
  margin: 0 auto;
  width: 60%;
  height: 70px;
  /* border-top: 1px solid #999; */
  border-bottom: 1px solid #999;
  margin-top: 3px;
  /* font-size: 14px; */
  overflow: hidden;
}

.card div {
  float: left;
  margin-right: 15px;
}

.titleBox {
  width: 30%;

  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pay {
  margin-left: 20px;
  font-size: 14px;
  color: red;
}

.need {
  font-size: 12px;
  color: #666;
  text-align: center;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.userBox {
  font-size: 14px;
}

.userBox img {
  margin: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.button span {
  padding: 3px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 1px #ccc;
  background-color:
                /* rgb(249,205,173) */ #df8c7a;
}
</style>