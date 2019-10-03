<template>
  <div>
    <div class="card" v-for="item in itemlist" :key="item.id">
      <div class="titleBox">
        <span>{{item.title}}</span>
      </div>
      <div class="pay">
        <span :class=" item.conpensation | classCard ">{{ item.conpensation | formatCard }}</span>
      </div>
      <div class="need">
        <span>{{ item.type | formatType }}</span>
      </div>
      <div class="userBox">
        <div>
          <img :src="item.user.avatarUrl | userPhoto" alt="用户头像" />
        </div>

        <div>
          <span>{{item.user.nickname}}</span>
          <span style="margin-left: 10px;margin-right:10px;">|</span>
          <span>{{item.user.major}}-</span>
          <span>{{item.user.grade}}</span>
        </div>
      </div>

      <div class="button">
        <span>查看详情</span>
      </div>
    </div>
  </div>
</template>
<script>
import mycard from "@/components/itemCard";
export default {
  name: "myItem",
  data() {
    return {
      itemlist: [],
      page: 1,
      pre_page: 10
    };
  },
  components: { mycard },
  mounted() {
    var userId = window.localStorage.getItem("userId");

    this.axios
      .get(
        `/xuptbbs/project/myproject?id=${userId}&page=${this.page}&per_page=10`
      )
      .then(res => {
        this.itemlist = res.data.content;
        console.log(this.itemlist);
      });
  },
  filters : {
        formatCard(key){
            var card = [
                { key : '0' , value : '无偿' },
                { key : '1' , value : '有偿' },
               
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key == key){
                    return card[i].value;
                }
            }
            return '未知赏金';
        },
        formatType(key){
            var card = [
                { key : '0' , value : '找队友' },
                { key : '1' , value : '找项目' },
               
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key == key){
                    return card[i].value;
                }
            }
            return '未知赏金';
        },
        classCard(key){
            var card = [
                { key : '0' , value : 'bl' },
                { key : '1' , value : 're' },
               
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key == key){
                    return card[i].value;
                }
            }
            return '';
        },
        userPhoto(key){
            return ('http://yugengkai.top:8080/xuptbbs/images/avatar/'+key)
        }
       
    }
};
</script>
<style lang="scss" scoped>
.card {
  line-height: 70px;
  margin: 0 auto;
  width: 60%;
  height: 70px;
  /* border-top: 1px solid #999; */
  border-bottom: 1px solid #999;
  margin-top: 3px;
  font-size: 16px;
  overflow: hidden;
}

.card div {
  float: left;
  margin-right: 15px;
}

.titleBox {
  width: 30%;

  font-weight: 600;
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
  font-size: 14px;
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
font-size: 14px;
  padding: 3px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 1px #ccc;
  background-color:
                /* rgb(249,205,173) */ #df8c7a;
}
.re{
    color: #e54847;
}
.bl{
    color: #42c02e;
}
</style>