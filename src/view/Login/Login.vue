<template>
  <div class="container">
      <div class="logo_index">
        <img src="../../assets/LoginPage/LOGO-Big.png" alt="">
      </div>
      <div class="login-box">
          <div class="user-name">
              <span class="iconfont icon-yonghu"></span>
              <el-input v-model="input" placeholder="请输入用户名"></el-input>
          </div>
          <div class="user-pwd">
              <span class="iconfont icon-genggaimima"></span>
              <el-input v-model="input" placeholder="请输入密码"></el-input>
          </div>
          <div class="user-verification">
              <span class="iconfont icon-yanzhengma2"></span>
              <el-input v-model="input" placeholder="请输入密码"></el-input>
              <div class="verification-code">
                  <img src='../../assets/LoginPage/verification.png' alt="" />
              </div>
              <i class="invisibility">看不清</i>
          </div>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <el-button type="primary" style="width:100%;marginTop:30px">登录</el-button>
      </div>
    </div>
</template>
<script>
import '../../assets/font_j3qa801yzi7/iconfont.css'
export default {
  
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
  }
  .el-checkbox{
    float: left;
    color:#fff;
    margin-top: 10px;
  }
</style>
