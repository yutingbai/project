<template>
  <div class="allBox">
    <div class="card" v-for="item in itemlist" :key="item.id">
      <div class="userBox">
        <img :src="item.userVO.avatarUrl" alt="用户头像" />
        <div>{{item.userVO.nickname}}</div>
        <div>
          <svg
            t="1569135820525"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="978"
            width="200"
            height="200"
          >
            <path
              d="M726.277689 227.555556l-91.886933 138.899911L539.420444 227.555556 726.277689 227.555556zM619.793067 398.222222 415.9488 398.222222l101.910756 387.629511L619.793067 398.222222zM422.752711 375.466667l190.225067 0-95.118222-139.127467L422.752711 375.466667zM401.351111 366.455467 496.310044 227.555556 309.464178 227.555556 401.351111 366.455467zM496.264533 793.156267 392.430933 398.222222 168.721067 398.222222 496.264533 793.156267zM169.039644 375.466667l210.989511 0-91.909689-138.934044L169.039644 375.466667zM747.463111 236.782933 655.712711 375.466667l210.625422 0L747.463111 236.782933zM643.310933 398.222222l-103.844978 394.899911L866.656711 398.222222 643.310933 398.222222z"
              p-id="979"
              fill="#ea6f5a"
            />
          </svg>
          <span>{{item.looked}}</span>
        </div>
      </div>
      <div class="titleBox" @click="handleToDetail(item.id)">
        <span>{{item.title}}</span>
      </div>
      <div class="imgBox">
        <!-- <img src="img" v-for="img in item.path" :key="img" alt="文章配图" /> -->
      </div>
      <div class="tagBox">
        <p class="type">{{item.board | formatCard}}</p>
        <p :class=" item.classification | classCard ">{{item.classification}}</p>
      </div>
      <div class="iBox"><!-- @click="handleToLike(item.id,item.title,item.isLike,item.userVO.id)" -->
        <span >
          <svg
            t="1569136294571"
            class="icon"
            viewBox="0 0 1139 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3980"
            width="200"
            height="200"
          >
            <path
              ref="likeBtn"
              :class="item.isLike | classCard"
              d="M889.018182 193.163636c-41.890909-46.545455-97.745455-69.818182-162.909091-69.818181-48.872727 0-97.745455 16.290909-144.290909 46.545454-11.636364 6.981818-13.963636 20.945455-6.981818 32.581818 6.981818 11.636364 20.945455 13.963636 32.581818 6.981818 37.236364-25.6 76.8-39.563636 118.690909-39.563636 51.2 0 95.418182 18.618182 128 55.854546 39.563636 44.218182 58.181818 109.381818 51.2 179.2-9.309091 104.727273-74.472727 302.545455-393.309091 446.836363C193.163636 707.490909 128 509.672727 118.690909 404.945455c-6.981818-69.818182 11.636364-134.981818 51.2-179.2 32.581818-34.909091 76.8-55.854545 128-55.854546 116.363636 0 195.490909 114.036364 195.490909 116.363636 6.981818 11.636364 20.945455 13.963636 32.581818 6.981819 11.636364-6.981818 13.963636-20.945455 6.981819-32.581819-4.654545-4.654545-93.090909-137.309091-235.054546-137.30909-65.163636 0-121.018182 23.272727-162.909091 69.818181-48.872727 53.527273-72.145455 132.654545-62.836363 214.109091 11.636364 116.363636 81.454545 335.127273 430.545454 488.727273 2.327273 2.327273 6.981818 2.327273 9.309091 2.327273 4.654545 0 6.981818 0 9.309091-2.327273 349.090909-153.6 418.909091-372.363636 430.545454-488.727273 9.309091-81.454545-13.963636-160.581818-62.836363-214.109091z"
              fill="#333333"
              p-id="3981"
            />
          </svg>
          <span>{{item.likeCount}}</span>
        </span>

        <span @click="handleToJoin(item.id)">
          <svg
            t="1569136036050"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3853"
            width="200"
            height="200"
          >
            <path
              :class="item.isCollection | classCard"
              d="M279.169699 930.984536c-16.133446 0-27.341718-5.196349-34.58468-10.520611-15.205307-11.17655-23.391756-29.723975-24.38334-55.098899-2.750647-71.184249-4.956895-189.407837-5.40408-218.492246-16.356526-23.839965-82.312704-120.254851-120.494305-179.862437-11.992125-18.627243-15.31787-40.196491-9.178033-59.175751 6.108115-18.691711 20.786419-33.305547 41.412179-41.23617 65.699328-25.102724 175.161369-64.627926 201.926966-74.28589 17.652032-23.296589 91.378174-120.414487 135.092791-175.784562 11.768021-14.934131 29.275767-23.50432 48.015573-23.50432 0.096191 0 0.159636 0 0.272199 0 19.682271 0.127913 38.661531 9.449209 50.749848 25.022906 43.123147 55.434543 114.65839 151.0973 131.990127 174.345794 26.989701 9.737782 137.538493 49.90255 202.710818 74.957179 27.293623 10.505261 37.878702 27.805276 41.939181 40.564881 5.468548 17.220197 2.494821 36.487006-8.18645 52.939723-38.581714 59.095933-106.535385 161.666006-122.57264 185.922457l-3.294023 132.390239c-0.255827 11.992125-10.761088 20.977777-22.080901 21.185508-11.879562-0.287549-21.249977-10.233062-20.977777-22.288632l3.421936-138.706085c0.096191-4.124947 1.358951-8.154727 3.64604-11.592013 0 0 81.944314-123.595946 125.883035-190.846606 3.405563-5.276167 4.6366-11.112082 3.166109-15.60542-2.142803-6.588045-10.008958-10.872628-16.244986-13.271258-73.90215-28.396747-206.628034-76.364225-207.970612-76.859505-3.965312-1.438769-7.402597-3.997034-9.945513-7.387247-0.847298-1.182942-86.485747-116.065436-135.363967-178.887226-3.948939-5.084808-10.505261-8.266267-17.044188-8.314363-3.629667-0.048095-9.769504 1.182942-14.470573 7.131421-49.326429 62.501496-137.523143 179.01514-138.402163 180.149986-2.558265 3.390213-6.011924 5.867638-9.91379 7.30743-1.295506 0.463558-132.694161 47.711652-207.075219 76.156494-5.835915 2.174526-13.286608 6.412037-15.71696 14.102183-2.094708 6.332219-0.479931 14.34266 4.365424 21.904892 43.25106 67.490114 122.637108 182.915983 123.404588 184.083575 2.462075 3.565199 3.805676 7.770987 3.869121 12.088316 0.048095 1.423419 2.382257 143.422504 5.516644 224.168526 0.463558 10.889001 2.910283 18.739806 6.763031 21.633716 4.02978 2.910283 12.503778 2.910283 23.184025-0.079818 76.747965-21.505803 210.417337-62.310138 211.728192-62.677505 4.109598-1.26276 8.538467-1.310855 12.647041 0 1.375324 0.463558 135.76408 42.771129 211.344452 64.068178 11.464099 3.229554 18.195408 15.189957 15.013949 26.78197-3.229554 11.576663-15.158235 18.339694-26.574239 15.141862-66.722634-18.755156-178.6314-53.723575-206.29239-62.389956-27.565822 8.410554-138.802276 42.11519-206.340485 61.046355C295.07904 929.897785 286.588669 930.984536 279.169699 930.984536L279.169699 930.984536z"
              p-id="3854"
              fill="#333333"
            />
          </svg>
          <span>{{item.joinCount}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "all",
  inject:['reload'],
  data() {
    return {
      itemlist: [],
      page: 1,
      id: window.localStorage.getItem("userId")
    };
  },
  watch: {
    $route: "judgeHelp"
  },
  mounted() {
    this.judgeHelp();
  },
  methods: {
    judgeHelp() {
      let router = this.$route.path;
      var reg = /\//g;
      router = router.split(reg)[3];
      console.log(router);
      if (router == "all") {
        this.axios
          .get(
            `/xuptbbs/post?board=ARTICLE&id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
      if (router == "web") {
        this.axios
          .get(
            `/xuptbbs/post/classification?classification=23&id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
      if (router == "java") {
        this.axios
          .get(
            `/xuptbbs/post/classification?classification=22&id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
      if (router == "other") {
        this.axios
          .get(
            `/xuptbbs/post/classification?classification=21&id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
      if (router == "mystar") {
        this.axios
          .get(
            `/xuptbbs/post/collection?id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
      if (router == "myPost") {
        this.axios
          .get(
            `/xuptbbs/post/mypost?id=${this.id}&page=${this.page}&per_page=10`
          )
          .then(res => {
            this.itemlist = res.data.content;
            console.log(this.itemlist);
          });
      }
    },
    handleToDetail(cardId) {
      // console.log(cardId);
      this.$router.push("/posted/detail/" + cardId);
    },
    handleToLike(cardId,cardTitle,cardisLike,cardOvId) {
      this.axios
        .post("/xuptbbs/postlike", {
          myId: this.id,
          postId: cardId,
          summary: cardTitle,
          type: cardisLike,
          userId: cardOvId
        })
        .then(res => {

      
        //  this.reload();
        }); 
    
    }
  },
  filters: {
    formatCard(key) {
      var card = [
        { key: "ARTICLE", value: "文章" },
        { key: "QUESTION", value: "问答" },
        { key: "PROJECT", value: "项目" },
        { key: "PRACTICE", value: "实习" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key == key) {
          return card[i].value;
        }
      }
      return "未知";
    },
    classCard(key) {
      var card = [
        { key: "全部文章", value: "blue" },
        { key: "产品测试", value: "org" },
        { key: "产品运营", value: "bl" },
        { key: "其他相关", value: "red" },
        { key: "Java后台", value: "blue" },
        { key: "web前端", value: "faa" },
        { key: "0", value: "no" },
        { key: "1", value: "yes" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key == key) {
          return card[i].value;
        }
      }
      return "";
    }
  }
};
</script>


<style lang="scss" scoped>
.yes {
  fill: #ea6f5a;
}
.blue {
  background-color: #97d1c7;
  color: #fbf7eb;
}
.org {
  background-color: #64abd3;
  color: #fffefb;
}
.faa {
  background-color: #ffb84f;
  color: #fffefb;
}
.bl {
  background-color: #c1e4de;
  color: #58928a;
}
.red {
  background-color: #b7d6ec;
  color: #4c88aa;
}
.ba {
  background-color: #fbf7eb;
  color: #70b6aa;
}
.card {
  margin: 0 auto;
  width: 60%;
  max-width: 965px;
  height: 160px;
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
  margin-bottom: 10px;
  width: 70%;
}

.imgBox {
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
  p {
    padding: 1px 2px;
    // color: #fff;
    border-radius: 5px;
    margin-right: 5px;
    float: left;
  }

  // width: 70%;
}

.tagBox .type {
  background-color: #ea6f5a;
  color: #fffefb;
}
.iBox {
  color: #333;
  float: left;
  width: 60%;
  margin-left: 5%;
  margin-top: 15px;
}
.iBox span {
  margin-right: 10px;
  font-size: 10px;
}
svg {
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.1em;
}
</style>

