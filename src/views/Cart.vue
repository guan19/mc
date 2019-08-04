<template>
  <div>
  <!-- 页面顶部 -->
	<div class="top w-100">
    <div class="top-clear w-1100 ma">
      <span class="top-in lf">您好，欢迎光临汪星人萌宠商城！</span>
        <img class="ico-phone lf" src="../../public/images/header/ico-phone.png" alt="">
        <span class="top-info lf red">客服热线：</span>
        <span class="telephone lf">0593-7167171</span>
    </div>            
      <ul class="top-ul">
        <li class="top-li">
          <router-link to='/login'>登录</router-link>				
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <router-link to='/reg'>注册</router-link>
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <a href="#">我的订单</a>
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <a href="#">我的收藏</a>
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <a href="#">客服中心</a>
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <a href="#">商家服务</a>
        </li>
        <li class="top-li">/</li>
        <li class="top-li">
          <a href="#">手机版</a>
        </li>
      </ul>
  </div>	
  <!-- 	head_cart 查看购物车-->
	<div class="head_cart w-1100 ma clear">
    <router-link to="/" class="lf">	
				<img class="head_cart_img1" src="../../public/images/header/logo.png"/>
		</router-link>    
    <div class="cart_process rt">
      <ul class="steps relative">
        <li class="process_cart absolute ft14">我的购物车</li>
        <li class="process_info absolute ft14">核对订单信息</li>
        <li class="process_success absolute ft14">订单提交成功</li>
      </ul>
    </div>
  </div>
  <div class="wrap w-1100 ma">
    <div class="cart_title">
      我的购物车
      <span class="ft14 c999 ml10">因为活动较为频繁，退出登录后，购物中的促销商品将会被移除！</span>
    </div>
  </div>
  <div class="proCart w-1100 ma">
    <div class="imfor_top bold">
      <div class="check_top lf">       
        <input type="checkbox" name="" value="">全选
      </div>
      <div class="pudc_top lf">商品</div>
      <div class="pices_top lf">单价(元)</div>
      <div class="num_top lf">数量</div>
      <div class="totle_top lf">金额</div>
      <div class="del_top lf">操作</div>
    </div>
    <div>
      <ul class="infor w-1100 ma mb10" style="background-color: white">
        <li class="checked center"><input type="checkbox"></li>
        <li class="pubc center clear">
          <a class="lf" href="javascript:;"><img src="../../public/images/details/233332.jpg" alt=""></a>
          <span class="des ft14 mt5 lf">
            <a  href="javascript:;">CKU认证犬——拉布拉多幼犬拉布拉多幼犬</a>
          </span>
          <p class="ft14 mt5 lf">CKU认证犬——拉布拉多幼犬</p>
        </li>
        <li class="pices center">
          <p>厂商指导价</p>
          <p>
            <span>￥</span>
            <span>3000</span>
          </p>        
        </li>
        <li class="num center clear">
          <span class="reduc lf ml50 center">-</span>
          <input class="text lf" type="text" value="1">
          <span class="add lf cenetr">+</span>
        </li>
        <li class="total center">
          <span>￥</span>
          <span>2400</span>
        </li>
        <li class="del center"><a href="javascript:;">删除</a></li>
      </ul>
      <ul class="infor w-1100 ma mb10" style="background-color: white">
        <li class="checked center"><input type="checkbox"></li>
        <li class="pubc center clear">
          <a class="lf" href="javascript:;"><img src="../../public/images/details/233332.jpg" alt=""></a>
          <span class="des ft14 mt5 lf">
            <a  href="javascript:;">CKU认证犬——拉布拉多幼犬拉布拉多幼犬</a>
          </span>
          <p class="ft14 mt5 lf">CKU认证犬——拉布拉多幼犬</p>
        </li>
        <li class="pices center">
          <p>厂商指导价</p>
          <p>
            <span>￥</span>
            <span>3000</span>
          </p>        
        </li>
        <li class="num center clear">
          <span class="reduc lf ml50 center">-</span>
          <input class="text lf" type="text" value="1">
          <span class="add lf cenetr">+</span>
        </li>
        <li class="total center">
          <span>￥</span>
          <span>2400</span>
        </li>
        <li class="del center"><a href="javascript:;">删除</a></li>
      </ul>
      <ul class="infor w-1100 ma mb10" style="background-color: white">
        <li class="checked center"><input type="checkbox"></li>
        <li class="pubc center clear">
          <a class="lf" href="javascript:;"><img src="../../public/images/details/233332.jpg" alt=""></a>
          <span class="des ft14 mt5 lf">
            <a  href="javascript:;">CKU认证犬——拉布拉多幼犬拉布拉多幼犬</a>
          </span>
          <p class="ft14 mt5 lf">CKU认证犬——拉布拉多幼犬</p>
        </li>
        <li class="pices center">
          <p>厂商指导价</p>
          <p>
            <span>￥</span>
            <span>3000</span>
          </p>        
        </li>
        <li class="num center clear">
          <span class="reduc lf ml50 center">-</span>
          <input class="text lf" type="text" value="1">
          <span class="add lf cenetr">+</span>
        </li>
        <li class="total center">
          <span>￥</span>
          <span>2400</span>
        </li>
        <li class="del center"><a href="javascript:;">删除</a></li>
      </ul>
    </div> 
    <div class="foot clear">
      <div class="foot_check lf">
        <input type="checkbox">全选
      </div>
      <a class="foot_del lf color_blue" href="javascript:;">删除</a>
      <a class="foot_qk lf color_blue" href="javascript:;">清空失效商品</a>
      <div class="foot_selected lf mr20">
        已选<span class="totalOne color color_red">0</span>件商品
      </div>
      <div class="foot_tol lf">
        <span>合计(不含运费):</span>
        <span class="foot_des color_red ft18">￥</span>
        <span class="foot_pices color_red ft26">0.00</span>
      </div>
      <a class="btn_account rt" href="javascript:;"></a>
    </div>   
  </div>
  <my-footer/>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scope>
/* 页面顶部样式 */
.top{
	font: 12px Arial,"simhei";
}
.top-clear,.top-ul{
	line-height: 30px;
}
.top-in{
	margin-right: 25px;
}
.ico-phone{
	margin-top: 6px;
}
.telephone{
	color: #0f69dc;
	text-decoration: underline;
}
.top-ul{
	width: 452px;
	margin-left: 828px;
}
.top-li{
	margin: 0 6px;
}
.top-li a:hover{
	color: #ff6600;
}
/* head_cart 查看购物车 */
.head_cart {
	background: #fff;
}
.cart_title{
	font-size: 24px;
}
.wrap {
	padding: 15px 0 10px 0;
}
.head_cart {
	height: 100px;
	border-bottom: 2px solid #e5e5e5;
}
.head_cart_img1{
	width: 400px;		
}
.steps {
	width: 387px;
	height: 22px;
	margin-top: 35px;
	background: url(../../public/images/cart/cart_process.png) no-repeat;
}
.steps .process_cart {
	color: #ee5533;
	left: 10px;
	top: 26px;
}
.steps .process_info {
	left: 146px;
	top: 26px;
}
.steps .process_success {
	left: 293px;
	top: 26px;
}
.imfor_top {
	height: 36px;
	margin-bottom: 16px;
	background: -moz-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
	background: -webkit-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	background: -o-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	background: -ms-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	box-shadow: 3px 3px 6px #ccc;
}
.imfor_top>div {
	text-align: center;
}
.imfor_top>div {
	height: 36px;
	line-height: 36px;
	border-top: 1px solid #bbb;
}
.center{
	text-align: center;
}
.check_top,.checked {
	width: 117px;
}
.pudc_top,.pubc {
	width: 425px;
}
.pices_top,.pices {
	width: 176px;
}
.num_top,.num {
	width: 174px;
}
.totle_top,.total {
	width: 154px;
}
.del_top,.del {
	width: 150px;
}
.infor {
	height: 115px;
	border: 1px solid #e8e8e8;
	justify-content: center;
	align-items: center;
}
.infor>div {
	height: 115px;
}
.des{
	display: inline-block;
}
.ml50{
	margin-left: 50px;
}
.pices+.num>span {
	display: inline-block;
	height: 24px;
	width: 24px;
	border: 1px solid #bbb;
	background: #e8e8e8;
	line-height: 24px;
	color: #444;
	cursor: pointer;
}
.infor .num>input {
	width: 17px;
	height: 24px;
	padding: 0 4px;
	font: 12px SimHei;
	border: none;
	border-top: 1px solid #bbb;
	border-bottom: 1px solid #bbb;
}
.foot {
	height: 49px;
	background: -moz-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
	background: -webkit-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	background: -o-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	background: -ms-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
	box-shadow: 3px 3px 6px #ccc;	
	margin-bottom: 50px;
}
.foot_del,.foot_check,.foot_qk,.foot_selected {
	cursor: pointer;
	margin: 14px 0 0 15px;
}
.foot_tol{
	margin: 3px 0 0 4px;	
}
.foot_selected{
	margin-left: 460px;
}
a.color_blue {
	color: #458df0;
}
.color_red {
	color: #e61940;
}
.ft26{
	font-size: 26px;
}
.btn_account {
	width: 171px;
	height: 49px;
	display: inline-block;
	background: url(../../public/images/cart/cart_tj.png) 0 -272px no-repeat;
}
</style>
