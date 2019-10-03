<template>
  <div class="login_body">
    <div class="loginbox">
      <h4 class="title">
        <div class="normal-title">
          <router-link tag="div" to="/users/login">登录</router-link>
          <div>
            <b>·</b>
          </div>
          <router-link tag="div" to="/users/signup">注册</router-link>
        </div>
      </h4>
      <div class="inputBox">
        <input v-model="email" @blur="isEmail" class="login_text" type="email" placeholder="Email" />
        <div class="clickbtn" :disabled="disabled" @click="handleToVerify">{{ verifyInfo }}</div>
      </div>
      <div>
        <input v-model="username" class="login_text" type="text" placeholder="账户名" />
      </div>
      <div>
        <input v-model="password" class="login_text" type="password" placeholder="请输入您的密码" />
      </div>
      <div>
        <input v-model="passwordagain" class="login_text" type="password" placeholder="请输再次入您的密码" />
      </div>
      <div>
        <input v-model="verify" class="login_text" type="text" placeholder="验证码" />
      </div>
      <div class="login_btn">
        <input type="submit" value="注册" @click="handleToRegister" />
      </div>
      <div class="login_link">
        <router-link to="/mine/findPassword">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      passwordagain: "",
      verify: "",
      verifyInfo: "发送验证码",
      disabled: false
    };
  },
  mounted() {
    //邮箱格式验证
  },
  methods: {
    handleToVerify() {
      if (this.disabled) {
        return;
      }
      
        this.disabled = true;    
        this.axios.get("/xuptbbs/code/" + this.email).then(res => {
          var status = res.data.code;
          var This = this;
          if (status == 0) {
            This.countDown();
            alert("验证码已发送!");
          } else {
            this.disabled = false;   
            alert("验证码发送失败!" + res.data.errmsg);
          }
        });
      
    },
    handleToRegister() {
      this.axios
        .post("/xuptbbs/entrance/register ", {
          code: this.verify,
          email: this.email,
          nickname: this.username,
          password: this.password
        })
        .then(res => {
          // console.log(res);
          var status = res.data.code;
          var This = this;
          if (status == 0) {
            alert("注册成功!");
            this.$router.push("/users/login");
          } else {
            alert("注册失败!" + res.data.errcode);
          }
        });
    },
    countDown() {
      this.disabled = true;
      var count = 6;
      var timer = setInterval(() => {
        count--;
        this.verifyInfo = "剩余" + count + "秒";
        if (count === 0) {
          this.disabled = false;
          count = 6;
          this.verifyInfo = "发送验证码";
          clearInterval(timer);
        }
      }, 1000);
    },
    isEmail() {
      var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //正则表达式
      if (this.email === "") {
        //输入不能为空
        alert("输入不能为空!");
        return false;
      } else if (!reg.test(this.email)) {
        //正则验证不通过，格式不对
        // console.log(this.email)
        
        alert("邮箱格式错误!");
        return false;
      } else {
        // alert("通过！");
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
#content .login_body {
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.loginbox {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
  margin-left: -200px;
  margin-top: -250px;
}
.title {
  font-size: 18px;
  font-weight: 400;
  color: #969696; /* #ea6f5a; */
  cursor: pointer;
  margin: 0 auto 50px;
  padding: 10px;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  max-height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 30px 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #42c02e;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
.normal-title {
  width: 100%;
  div {
    float: left;
    margin: 5px;
    font-size: 22px;
    color: #e54847;
  }
  b {
    color: #e54847;
  }
  margin-left: 70px;
  margin-bottom: 30px;
}
.inputBox {
  position: relative;
}
.clickbtn {
  display: inline-block;
  font-size: 12px;
  width: 60px;
  padding: 0 10px;
  text-align: center;
  box-shadow: 0 0 2px #ccc;
  background-color: #f1f1f1;
  color: #e54847;
  border-radius: 5px;
  position: absolute;
  left: 240px;
  top: 0px;
}
.normal-title div.active {
  color: #333;
}
.normal-title div.router-link-active {
  color: #333;
}
</style>
