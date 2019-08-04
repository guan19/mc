<template>
  <div id="my-reg">
    <div class="my-reg_top w-100">
      <div class="reg_top-clear w-1100 ma">
        <span class="reg_top-in lf">您好，欢迎光临汪星人萌宠商城！</span>
        <img class="ico-phone lf" src="../../public/images/header/ico-phone.png" alt />
        <span class="reg_top-info lf red">客服热线：</span>
        <span class="telephone lf">0593-7167171</span>
      </div>
      <ul class="reg_top-ul">
        <li class="reg_top-li">
          <router-link to="/login">登录</router-link>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <router-link to="/reg">注册</router-link>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <a href="#">我的订单</a>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <a href="#">我的收藏</a>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <a href="#">客服中心</a>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <a href="#">商家服务</a>
        </li>
        <li class="reg_top-li">/</li>
        <li class="reg_top-li">
          <a href="#">手机版</a>
        </li>
      </ul>
    </div>
    <!--logo-->
    <div class="logo relative w-1100 ma">
      <router-link to="/">
        <img class="img1" src="../../public/images/header/logo.png" />
      </router-link>
      <img class="absolute" src="../../public/images/reg/tel.gif" alt />
      <ul class="absolute">
        <li class="li-top">客户服务热线：9:00-18:00</li>
        <li class="li-bottom">0593-7167171</li>
      </ul>
    </div>
    <!--用户注册-->
    <div class="parent w-1100 ma mb20">
      <div class="reg_container">
        <ul class="reg_top clear">
          <li class="reg-1 fl">新用户注册</li>
          <li class="reg-2 fl mt30">已有账号？</li>
          <li class="fl mt30">
            <router-link to="/login">立即登录</router-link>
          </li>
        </ul>
        <form>
          <div class="form-group mb4">
            <label class="ml14 ft14">用户名：</label>
            <input v-model="username" @blur="getUsername" class="ft12" id="uname" type="text" placeholder="请输入您的用户名" />
            <span class="ft12">
              {{userName === 1 ? '用户名为6-16位字母和数字组成' 
              : userName === 2 ? '用户名不能为空' 
              : userName === 3 ? '用户名格式正确' : '用户名格式不正确'}}
            </span>          
          </div>         
          <div class="form-group mb4">
            <label class="ft14">登录密码：</label>
            <input v-model="userpwd" @blur="getUserpwd" class="ft12" id="upwd" type="password" placeholder="请输入登录密码" />
            <span class="ft12">
              {{userPwd === 1 ? '密码为6位字母和数字组成' 
              : userPwd === 2 ? '密码不能为空' 
              : userPwd === 3 ? '密码格式正确' : '密码格式不正确'}}           
            </span>
          </div>
          <div class="form-group mb4">
            <label class="ft14">确认密码：</label>
            <input v-model="userpwds" @blur="getUserpwds" class="ft12" id="email" type="text" placeholder="请输入确认密码" />
            <span class="ft12">
              {{userPwds === 1 ? '密码与上面输入一致' 
              : userPwds === 2 ? '确认密码不能为空' 
              : userPwds === 3 ? '两次输入一致' : '两次输入不一致'}} 
            </span>
          </div>
          <div class="form-group mb4">
            <label class="ml28 ft14">邮箱：</label>
            <input v-model="useremail" @blur="getUseremail" class="ft12" id="phone" type="text" placeholder="请输入您的邮箱" />
            <span class="ft12">
              {{userEmail === 1 ? '请输入合法的邮箱地址' 
              : userEmail === 2 ? '邮箱地址不能为空' 
              : userEmail === 3 ? '邮箱格式正确' : '邮箱格式不正确'}} 
            </span>
          </div>
          <div class="form-group mb4">
            <label class="ml14 ft14">手机号：</label>
            <input v-model="userphone" @blur="getUserphone" class="ft12" id="user_name" type="text" placeholder="请输入您的手机号" />
            <span class="ft12">
              {{userPhone === 1 ? '请输入合法的手机号' 
              : userPhone === 2 ? '手机号不能为空' 
              : userPhone === 3 ? '手机号格式正确' : '手机号格式不正确'}} 
            </span>
          </div>
          <div class="check ft12">
            <input type="checkbox" id="check_info" />
            <label for="check_info">我已阅读并服务条款：</label>
            <a href="#">&lt;&lt;汪星人萌宠商城服务协议&gt;&gt;</a>
          </div>
          <div class="form-group mb4">
            <input class="reg_btn ft14" type="button" value="立即注册" />
          </div>
        </form>
      </div>
    </div>
    <my-footer/>
  </div>
</template>
<script>
export default {
  name: 'Reg',
  data(){
    return {
      username: '',
      userName: 1,
      userpwd: '',
      userPwd: 1,
      userpwds: '',
      userPwds: 1,
      useremail: '',
      userEmail: 1,
      userphone: '',
      userPhone: 1
    }
  },
  methods: {
    // 获取用户名方法
    getUsername () {
      //用户名的规则：由6-16位字母和数字组成
      let reg = /^[a-zA-Z0-9]{6,15}$/i
      if(this.username == '') {
        this.userName = 2 * 1    
      }else if(reg.test(this.username)) {
        this.userName = 3 * 1
      }else {
        this.userName = 4 * 1
      }
    },
    getUserpwd () {
      let reg = /^[a-zA-Z0-9]{6}$/i
      if(this.userpwd == '') {
        this.userPwd = 2 * 1
      }else if(reg.test(this.userpwd)) {
        this.userPwd = 3 * 1
      }else {
        this.userPwd = 4 * 1
      }
    },
    getUserpwds () {
      if(this.useremail == '') {
        this.userPwds = 2 * 1
      }else if(this.useremail == this.useremail) {
        this.userPwds = 3 * 1
      }else {
        this.userPwds = 4 * 1
      }
    },
    getUseremail () {
      let reg = /^\w+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/i
      if(this.useremail == '') {
        this.userEmail = 2 * 1
      }else if(reg.test(this.useremail)) {
        this.userEmail = 3 * 1
      }else {
        this.userEmail = 4 * 1
      }
    },
    getUserphone () {
      let reg = /^^1[3,4,5,7,8]\d{9}$/  
      if(this.userphone == '') {
        this.userPhone = 2 * 1
      }else if(reg.test(this.userphone)) {
        this.userPhone = 3 * 1
      }else {
        this.userPhone = 4 * 1
      }
    }
  }
};
</script>
<style>
body{
    background: #F1F1F1;           	
}
/* 页面顶部样式 */
.my-reg_top{
	font: 12px Arial,"simhei";
}
.reg_top-clear,.reg_top-ul{
	line-height: 30px;
}
.reg_top-in{
	margin-right: 25px;
}
.ico-phone{
	margin-top: 6px;
}
.telephone{
	color: #0f69dc;
	text-decoration: underline;
}
.reg_top-ul{
	width: 452px;
	margin-left: 828px;
}
.reg_top-li{
	margin: 0 6px;
}
.reg_top-li a:hover{
	color: #ff6600;
}
/*logo样式*/
.logo{
	background: #fff;
}
.img1{
	width: 400px;
}
.logo a+img{
	top: 20px;
	right: 234px;
}
.logo ul{
	display: block;
	top: 19px;
	right: 50px;
}
.li-top{
	font: normal 12px/20px Verdana, Arial;
  color: #777;
  text-indent: 5px;
}
.li-bottom{
	font: bold 27px/30px Arial;
  color: #F60;
}
/*注册样式*/
.parent{
	height: 560px;								
	background-image: url(../../public/images/reg/reg_bg.jpg);
	background-size: 1200px auto; 			
}
.reg_container {
	color: #000;
	width: 569px;
	height: 465px;	 
	margin-left: 48px;													
}
.reg_top{
	border-bottom: 1px solid #dee2e6;
	margin-bottom: 16px;
}	
.reg-1 {
	color: #000;
	font-size: 28px;
  font-weight: 500;
	width: 300px;	
	margin: 20px 0 20px 20px;	       						
}			
.reg-2{
	color: #aaa;
}
.reg_top a{
	color: #ffb000;
	font-style: italic;
}
.mt30{
	margin-top: 30px;
}
.mb4{
	margin-bottom: 24px;
}
.form-group label {
  width: 70px;   				
}
.ml14{
	margin-left: 14px;
}
.ml28{
	margin-left: 28px;
}
.form-group input {
		width: 280px;
    height: 36px; 
    border: 1px solid #dadada;
    line-height: 36px;
    padding: 0 10px;  
    margin-right: 8px;		
}
.check{
	margin-left: 48px;	
	margin-bottom: 24px;			
}
.check a{
	color: #f00;				
}
.reg_btn{
	color: #fff;
	width: 200px;	
	letter-spacing: 5px;
	background-color: #ffb000;
	margin-left: 100px;
}
</style>
