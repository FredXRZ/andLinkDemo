<template>
  <div class="container">
      <div class="logo_index">
        <img src="../../assets/LoginPage/LOGO-Big.png" alt="">
      </div>
      <div class="login-box">
          <div class="user-name">
              <span class="iconfont icon-yonghu" @click="getMsg()"></span>
              <el-input v-model="userName" placeholder="请输入用户名" @blur="checkUserName()"></el-input>
          </div>
          <div class="user-pwd">
              <span class="iconfont icon-genggaimima"></span>
              <el-input v-model="userPwd" type="password" placeholder="请输入密码"></el-input>
          </div>
          <div class="user-verification">
              <span class="iconfont icon-yanzhengma2"></span>
              <el-input v-model="verificationCode" placeholder="请输入密码"></el-input>
              <div class="verification-code">
                  <img 
                    ref="captcha"
                    src='http://localhost:3000/api/captcha' 
                    alt="" />
              </div>
              <i class="invisibility" @click="getCaptcha()">看不清</i>
          </div>
          <el-checkbox v-model="checked" style="color:rgba(255,255,255,0.5)">记住密码</el-checkbox>
          <el-button type="primary" style="width:100%;marginTop:30px" @click="loginSystem()">登录</el-button>
      </div>
    </div>
</template>
<script>
import '../../assets/font_7uobeu4vjs3/iconfont.css';
import {Message} from 'element-ui';
import axios from 'axios'
export default {
  data(){
    return {
      userName:'', //用户名
      userPwd:'',  //用户密码
      verificationCode:'',  //图形验证码
      checked: false,  //是否记住密码
    }
  },
  mounted() {
    this.getCookie();
    this.getCaptcha()
  },
  methods:{
    //用户名规则验证
    checkUserName(){
      let userNameReg = /^1(3|4|5|7|8)\d{9}$/;
      if(!userNameReg.test(this.userName)){
        Message({
          type:'error',
          message:'请输入正确的手机号',
          center:true
        })
        return false;
      }
    },

    //获取图形验证码
    getCaptcha(){
      this.$refs.captcha.src='http://localhost:3000/api/captcha?time='+ new Date().getTime()
    },


    getMsg(){
      this.ajax({
        url:'/api/login',
        method:'GET',
        success:(res)=>{
          console.log(res)
        }
      })
    },

    //登录系统
    loginSystem(){
      if(!/^1(3|4|5|7|8)\d{9}$/.test(this.userName)){
        Message({
          type:'error',
          message:'请输入正确的手机号',
          center:true
        });
        return;
      }else if(!this.userPwd){
        Message({
          type:'error',
          message:'密码不能为空',
          center:true
        });
        return;
      }else if(!this.verificationCode){
        Message({
          type:'error',
          message:'验证码不能为空',
          center:true
        });
        return;
      };


      //判断是否记住密码
      let that = this;
      if(that.checked){
        that.setCookie(that.userName, that.userPwd, 7);
      }else{
        that.clearCookie();
      }
      let mobile = sessionStorage.setItem("userName",this.userName)
          this.$router.push({
            path:'/',
          })
      Message({
        type:'success',
        message:'登录成功！',
        center:true
      })
      /**
       * 等正式接口出来后打开
       */
        //发送post请求
      // this.ajax({
      //   url:'http://localhost:3000/api/login',
      //   method:'POST',
      //   data:{
      //     user_name:this.userName,
      //     user_pwd:this.userPwd,
      //     verificationCode:this.verificationCode,
      //     verificationCodeId:''
      //   },
      //   success:(res)=>{
      //       if(res.status == 'SUCCESS'){
      //         Message({
      //           type:'success',
      //           message:res.message,
      //           center:true
      //         });
      //         let mobile = sessionStorage.setItem("userName",this.userName)
      //         this.$router.push({
      //           path:'/',
      //         })
      //         //是否记住密码
      //         // if(this.checked){
      //         //   this.userName = sessionStorage.getItem("userName");
      //         // }
      //       }else{
      //         Message({
      //           type:'error',
      //           message:res.message,
      //           center:true
      //         })
      //       }
      //     }
      // })
    },

    //设置cookie
    setCookie(userName,userPwd,exdays){
      let exdate = new Date();
      //保存的天数
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
      //拼接cookie
      window.document.cookie = "userName" + "=" + userName + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "userPwd" + "=" + userPwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie(){
      if(document.cookie.length>0){
        let arr = document.cookie.split(';');
        for(let i = 0 ; i < arr.length ; i++){
          let arr2 = arr[i].split('=');
          console.log(arr2)
          if (arr2[0] == 'userName') {
              this.userName = arr2[1]; //保存到保存数据的地方
          }
          if(arr2[0] == ' userPwd'){
            this.userPwd = arr2[1]
            console.log(this.userPwd)
          }
        }
      }
    },

    //清楚cookie
    clearCookie(){
      this.setCookie("", "", -1);
    }
    

  }
}
</script>

<style lang="">
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height:100%;
    background-image:url(../../assets/LoginPage/Login_bg2x.png);
    background-size: cover;
    background-repeat: no-repeat; 
    overflow: hidden;
  }
  .logo_index{
    margin-top: 160px;
  }
  .login-box{
    padding:9px 82px 20px 77px;
    box-sizing: border-box;
    width: 460px;
    height: 338px;
    background-image:url(../../assets/LoginPage/Login-Bg@2x.png);
    background-size: cover;
    background-repeat: no-repeat; 
    margin:50px auto
  }
  .user-name,
  .user-pwd,
  .user-verification{
    margin-top: 40px;
    width: 100%;
    height:40px;
    border-bottom:1px solid #3FA5FD
  }
  .user-pwd{
    margin-top: 15px;
  }
  .user-verification{
    margin-top: 15px;
  }
  .user-name>span,
  .user-pwd>span,
  .user-verification>span{
    line-height: 40px;
    vertical-align: middle;
    float: left;
    color:#3FA5FD;
    font-size: 24px;
  }
  .user-name>.el-input,
  .user-pwd>.el-input{
    width: 88%;
    float: left;
    margin-left: 10px;
  }
  .user-verification>.el-input{
    width: 30%;
    float: left;
    margin-left: 10px;
  }
  .user-name input,
  .user-pwd input{
    float: left;
    width: 100%;
    border:none;
    padding-left: 0;
    color:rgba(255,255,255,0.5);
    background-color: transparent;
  }
  .user-verification input{
    float: left;
    width: 100%;
    border:none;
    padding-left: 0;
    color:rgba(255,255,255,0.5);
    background-color: transparent;
  }
  .verification-code{
    float: left;
    overflow: hidden;
    width: 40%;
  }
  .verification-code>img{
    width: 100%;
  }
  .invisibility{
    color:#3FA5FD;
    font-size: 14px;
    float: right;
    font-style: normal;
    text-decoration:underline;
    line-height: 40px;
    cursor: pointer;
  }
  .el-checkbox{
    float: left;
    color:#fff;
    margin-top: 10px;
  }
</style>
