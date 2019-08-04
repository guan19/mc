<template>
  <header id='header'>
    <div class="container p-0">
        <!-- header部分 -->
        <!-- 1.页面顶部 -->
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
        <!-- 2.商品搜索 -->
        <div class="top_title w-1100 ma">
			<router-link to="/" class="title lf">	
				<img src="../../public/images/header/logo.png"/>
			</router-link>
			<div id="app" class="top_input lf">
				<input v-focus class="input_search lf relative ft12" type="text" id="sosuo" placeholder="请输入关键字">
				<router-link to="/products">
                    <button class="btn1">搜索</button>
                </router-link>
				<p>
					<a class="ft14" href="#">泰迪</a>	
					<a class="ft14" href="#">金毛</a>	
					<a class="ft14" href="#">博美</a>	
					<a class="ft14" href="#">柯基</a>	
					<a class="ft14" href="#">哈士奇</a>	
					<a class="ft14" href="#">拉布拉多</a>
				</p>	
			</div>
			<div class="my-cart lf relative">
				<img class="absolute" src="../../public/images/header/cart.png" alt="" />
				<router-link to="/cart" class="absolute">我的购物车</router-link>
			</div>            
        </div>       
    </div>
    <!-- 3.导航搜索 -->
    <div class="nav w-100">
        <div class="nav-top w-1100 ma">
            <ul class="nav-ul">
                <li class="nav-li clear relative">                                   
                    <img class="lf" src="../../public/images/header/nav-con.png" alt="">
                    <p class="lf ft18"><a class="white" href="javascript:;">商品分类</a></p>   
                    <div class="nav-li-ul absolute">
                        <ul style="display: block;">                 
                            <li class="mt10 ft16">
                                <div class="nav-li-ul-div1 ma relative">
                                    <span class="absolute" href="javascript:;">大型萌宠</span>
                                    <em class="absolute"></em>
                                </div>  
                                <div class="nav-li-ul-div2 clear">
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">拉布拉多</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">哈士奇</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">博美犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">金毛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">萨摩耶</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">泰迪犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柯基犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">比熊犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">雪纳瑞</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">斗牛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">吉娃娃</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柴犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">斗牛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">吉娃娃</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柴犬</a></span>
                                </div>                      
                            </li>
                            <li class="mt10 ft16">
                                <div class="nav-li-ul-div1 ma relative">
                                    <span class="absolute" href="javascript:;">中型萌宠</span>
                                    <em class="absolute"></em>
                                </div>  
                                <div class="nav-li-ul-div2 clear">
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">拉布拉多</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">哈士奇</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">博美犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">金毛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">萨摩耶</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">泰迪犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柯基犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">比熊犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">雪纳瑞</a></span>   
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">斗牛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">吉娃娃</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柴犬</a></span>                      
                                </div>                      
                            </li>
                            <li class="mt10 ft16">
                                <div class="nav-li-ul-div1 ma relative">
                                    <span class="absolute" href="javascript:;">小型萌宠</span>
                                    <em class="absolute"></em>
                                </div>  
                                <div class="nav-li-ul-div2 clear">
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">拉布拉多</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">哈士奇</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">博美犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">金毛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">萨摩耶</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">泰迪犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柯基犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">比熊犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">雪纳瑞</a></span> 
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">斗牛犬</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">吉娃娃</a></span>
                                    <span class="ml10 lf"><a class="white ft12" href="javascript:;">柴犬</a></span>                        
                                </div>                      
                            </li>
                        </ul>
                    </div>                                         
                </li>
                <li class="nav-fs">
                   <a class="ft16" href="#">首页</a>                      
                </li>
                <li class="nav-fs">
                    <a class="ft16" href="#">所有商品</a>                        
                </li>
                <li class="nav-fs">
                    <a class="ft16" href="#">品牌特卖</a>
                </li>
                <li class="nav-fs">
                    <a class="ft16" href="#">萌宠视频</a>
                </li>               
                <li class="nav-fs">
                    <a class="ft16" href="#">萌宠问答</a>
                </li>
                <li class="nav-fs">
                    <a class="ft16" href="#">萌宠新闻</a>
                </li>
                <li class="nav-fs">
                    <a class="ft16" href="#">买家相册</a>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>
<script>
export default {
    directives: {
        focus:{
        inserted(elem){
          //DOM操作!
          elem.focus();
        }
      }
    },
  data () {
    return {

    }
  },
  methods:{
    reg () {
        this.$router.push({name: 'Reg'})
        }
    }
}
</script>
<style scope>
  @import url("../assets/css/header.css");
  .nav-li:hover .nav-li-ul{
    height: 480px;
  }
</style>