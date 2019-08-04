<template>
  <div id="my-login">
    <!-- header部分 -->	
		<!-- 页面顶部 -->
		<div class="login_top w-100">
			<div class="login_top-clear w-1100 ma">
				<span class="login_top-in lf">您好，欢迎光临汪星人萌宠商城！</span>
				<img class="ico-phone lf" src="../../public/images/header/ico-phone.png" alt="">
				<span class="login_top-info lf red">客服热线：</span>
				<span class="telephone lf">0593-7167171</span>
			</div>            
			<ul class="login_top-ul">
				<li class="login_top-li">
					<router-link to="/login">登录</router-link>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<router-link to="/reg">注册</router-link>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<a href="#">我的订单</a>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<a href="#">我的收藏</a>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<a href="#">客服中心</a>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<a href="#">商家服务</a>
				</li>
				<li class="login_top-li">/</li>
				<li class="login_top-li">
					<a href="#">手机版</a>
				</li>
			</ul>
		</div>	
    <!--logo部分-->
    <div class="logo relative ma w-1100">
    	<router-link to="/">
    		<img class="img1" src="../../public/images/header/logo.png"/>
    	</router-link>
    	<img class="absolute" src="../../public/images/login/tel.png" alt="" />
    	<ul class="absolute">
    		<li class="li-top">客户服务热线：9:00-18:00</li>
    		<li class="li-bottom">0593-7167171</li>
    	</ul>	  		   		
    </div> 
    <!--登录部分-->
		<div class="login_parent ma w-1100 mb20">
			<div class="login_container">
				<ul class="log_top clear mb4">
					<li class="log-1 fl ft16">账号登录</li>
					<li class="log-2 fl ft12">还没有账号?</li>
					<li class="log-3 fl ft12">
						<router-link to="/reg">免费注册</router-link>
					</li>
				</ul>									
				<input class="log_name mb4" type="text" name="uname" id="uname" 
					placeholder="请输入用户名" />			
				<input class="log_pwd mb4" type="password" name="upwd" id="upwd" 
					placeholder="请输入密码" />
				<p>
					<input type="checkbox" name="" id="check_login" value="" />
						<label class="ft12" for="check_login">
							自动登录
						</label>
					<a class="rt ft12" href="#">忘记密码？</a>
				</p>
				<input class="login_btn ft14" type="button" value="登录" />
			</div>
		</div>
		<my-footer/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
body{
    background: #F1F1F1;           	
}
/* 页面顶部样式 */
.login_top{
	font: 12px Arial,"simhei";
}
.login_top-clear,.login_top-ul{
	line-height: 30px;
}
.login_top-in{
	margin-right: 25px;
}
.ico-phone{
	margin-top: 6px;
}
.telephone{
	color: #0f69dc;
	text-decoration: underline;
}
.login_top-ul{
	width: 452px;
	margin-left: 828px;
}
.login_top-li{
	margin: 0 6px;
}
.login_top-li a:hover{
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
/*登录样式*/
.login_parent{
	height: 560px;								
	background-image: url(../../public/images/login/login_bg.jpg);
	background-size: 1200px auto; 		  
}
.login_parent:before{
  content:"";
  display:table;
}
.login_container{
	width: 244px;
	height: 254px;
	background: #fff;
	border-radius: 3px;
	margin: 96px 96px;
	padding: 48px;
} 
.log_top{
	border-bottom: 1px solid #dee2e6;	
}	
.mb4{
	margin-bottom: 24px;
}
.log-1{
	color: #212529;
	margin-bottom: 16px;
}
.log-2{
	margin-left: 56px;
}
.log-2,.log-3,p a{
	color: #aaa;
}
.log-2,.log-3{
	margin-top: 2px;
}
.log_top a{
	color: #ffb000;
	font-style: italic;
}
.log_name,.log_pwd{
	width: 205px;    				
  height: 37px;    
	padding-left: 37px;  
	border: 1px solid #dee2e6;			   			
}		
.log_name{
	background: url(../../public/images/login/login_name.png) no-repeat;								
}
.log_pwd{
	background: url(../../public/images/login/login_pwd.png) no-repeat;								
}
.log_pwd+p{
	margin-bottom: 16px;
}
.login_btn{
	color: #fff;
	width: 244px;
	letter-spacing: 5px;	
	background-color: #ffb000;
	vertical-align: middle;
	border: 1px solid transparent;
  padding: 6px 12px;
  line-height: 1.5;
	border-radius: 4px;
	outline: none;
}
</style>

