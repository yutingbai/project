<template>
    <div class="card">
      <div class="userBox">
        <img src="/img/avatar.jpg" alt="用户头像" />
        <div>用户名称</div>
        <div>
          <i class="fa fa-eye"></i>
          <span>12</span>
        </div>
      </div>
      <div class="titleBox">
        <span>Font Awesome,一套绝佳的图标字体库和CSS框架</span>
      </div>
      <div class="imgBox">
        <img src="/img/avatar.jpg" alt="文章配图" />
      </div>
      <div class="tagBox">
        <p class="type">文章</p>
        <p class="classes">其他类别</p>
      </div>
      <div class="iBox">
        <span>
          <i class="fa fa-thumbs-o-up"></i>
          <span>1</span>
        </span>
        <span>
          <i class="fa fa-comment-o"></i>
          <span>1</span>
        </span>
        <span>
          <i class="fa fa-star-o"></i>
          <span>1</span>
        </span>
        <span>
          <i class="fa fa-share-square-o"></i>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: "card"
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  width: 60%;
  height: 150px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  margin-top: 3px;
}

.userBox {
  float: left;
  margin: 5px;

  width: 100%;
}

.userBox img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.userBox div {
  display: inline-block;
  margin-left: 5px;
  color: #333;
}

.userBox span {
  font-size: 10px;
}

.titleBox {
  float: left;
  margin-left: 5%;
  font-weight: bold;
  margin-top: 10px;
}

.imgBox img {
  width: 13%;
  max-width: 150px;
  height: 75px;
  float: right;
  margin-right: 80px;
}

.tagBox {
  float: left;
  margin-left: 5%;
  margin-top: 10px;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #fff;

  width: 60%;
}

.tagBox p {
  float: left;
  width: 60px;
  height: 15px;
 
  border-radius: 5px;
  margin-right: 5px;
}
.tagBox .classes{
   background-color: rgb(248, 147, 101);
}
.tagBox .type{
   background-color: #83AF9B;
}
.iBox {
  color:#333;
  float: left;
  width: 60%;
  margin-left: 5%;
  margin-top: 15px;
}
.iBox span {
  margin-right: 10px;
}
</style>
