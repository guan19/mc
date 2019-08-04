<template>
  <div>
    <my-header/>
    <div class="my_cart ft14">
    <!-- 上部分 -->
    <div class="my_cart_top w-1100 ma clear">
      <!-- 面包屑导航 -->
      <div class="crumbs">
        当前位置：<a href="javascript:;">首页</a>
        <span>></span>
        <a href="javascript:;">狗狗市场</a>
        <span>></span>
        <a href="javascript:;">拉布拉多</a>
        <span>></span>
        <span>CKU认证犬舍自繁自销价格特优惠哦——拉布拉多幼犬</span>                     
      </div>
      <!-- 左边 -->
      <div class="my_cart_left lf">
        <div class="my_cart_img mb10">
          <img id="mImg" src="../../public/images/details/246990.jpg" alt="">
          <div id="mask" class="absolute d-none"></div>
          <div id="super-mask" class="absolute"></div>
          <div id="div-lg" class="absolute d-none"></div>
        </div>
        <div class="text">
          <img class="cart_img mr5" src="../../public/images/details/304224.jpg" alt="">
          <img class="cart_img mr5" src="../../public/images/details/233332.jpg" alt="">
          <img class="cart_img mr5" src="../../public/images/details/317325.jpg" alt="">
          <img class="cart_img" src="../../public/images/details/233042.jpg" alt="">          
        </div>
        <!-- 关于分享 -->
        <div class="share relative" @mouseenter="onMouseOver" @mouseleave="onMouseOut">
          <p class="infoCoding lf mr10">商品编码：E2022216201</p>
          <i class="share_icon"></i>
          <span class="share_collect">收藏商品</span>
          <span class="share_tit" :class="{share_tit_border:shareShow,changeColor:changecolor}">
            <i class="tit_icon"></i>
            <span class="ft12" style="margin-left:5px">分享到：</span>
            <i class="tit_arrow relative" :class="{changePic:changepic}"></i>           
          </span>
          <ul class="absolute" v-show="share">
            <li class="qzone mr5" data-original-title="分享到QQ空间"></li>
            <li class="qq mr5" data-original-title="分享到QQ好友"></li>
            <li class="wx mr5" data-original-title="分享到微信"></li>
            <li class="wb pl5" data-original-title="分享到新浪微博"></li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <div class="my_cart_right lf">
        <h3 class="name">CKU认证犬舍自繁自销价格特优惠哦——拉布拉多幼犬</h3>
        <div class="my_cart_price">
          <p class="my_cart_p1">
            <span class="c999 mr10">萌&nbsp;&nbsp;&nbsp;宠&nbsp;&nbsp;&nbsp;价&nbsp;:</span>
            <span class="c93c ft20">¥</span>
            <span class="price_font c93c bold">2400</span>          
          </p> 
          <p class="my_cart_p2">
            <span class="c999 mr10">厂商指导价:</span>
            <span class="c999 through ft16">¥3000</span>
          </p>
        </div>
        <div class="personal_xx">
          <ul>
            <li><div>年龄</div><div>八月龄以下</div></li>
            <li><div>品种</div><div>拉布拉多</div></li>
            <li><div>防疫</div><div>8针疫苗</div></li>
            <li><div>驱虫</div><div>已驱虫</div></li>
            <li><div>血统证明</div><div>有血统证明</div></li>
          </ul>
        </div>
        <div class="server clear">
          <div class='server_label server_label_blue lf text'>担保交易</div>
          <div class='server_label server_label_green lf text'>7天退换</div>
          <div class='server_label server_label_orange lf text'>30天质保</div>
          <div class='server_label server_label_red lf text'>提供售后</div>
        </div>
        <div class="relative">
          <div class="delivery clear mt10">
            <span class="lf mt7">配&nbsp;&nbsp;送&nbsp;:</span>
            <div class="del_city lf">
              <span  class="mr5">请选择地区</span>
              <em @click="select" :class="{changePicture:changepicture}"></em>
            </div>            
          </div>
          <ul class="del_city_select absolute" v-show="city">
            <li style="margin-left:5px;"><a href="javascript:;">天津</a></li>
            <li><a href="javascript:;">河北</a></li>
            <li style="border-top: 1px solid #ccc"><a href="javascript:;">北京</a></li>
            <li style="border-top: 1px solid #ccc"><a href="javascript:;">山西</a></li>
            <li style="border-top: 1px solid #ccc"><a href="javascript:;">内蒙古</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">辽宁</a></li>
            <li><a href="javascript:;">吉林</a></li>
            <li><a href="javascript:;">黑龙江</a></li>
            <li><a href="javascript:;">上海</a></li>
            <li><a href="javascript:;">江苏</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">浙江</a></li>
            <li><a href="javascript:;">安徽</a></li>
            <li><a href="javascript:;">福建</a></li>
            <li><a href="javascript:;">江西</a></li>
            <li><a href="javascript:;">山东</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">河南</a></li>
            <li><a href="javascript:;">湖北</a></li>
            <li><a href="javascript:;">湖南</a></li>
            <li><a href="javascript:;">广东</a></li>
            <li><a href="javascript:;">广西</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">海南</a></li>
            <li><a href="javascript:;">重庆</a></li>
            <li><a href="javascript:;">四川</a></li>
            <li><a href="javascript:;">贵州</a></li>
            <li><a href="javascript:;">云南</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">西藏</a></li>
            <li><a href="javascript:;">陕西</a></li>
            <li><a href="javascript:;">甘肃</a></li>
            <li><a href="javascript:;">青海</a></li>
            <li><a href="javascript:;">宁夏</a></li>
            <li style="margin-left:5px;"><a href="javascript:;">新疆</a></li>
          </ul>     
          <div class="i_color clear mt10">
            <span class="lf mt7">颜&nbsp;&nbsp;色&nbsp;:</span>
            <ul class="color_name lf">
              <li class="mr10 w62">咖啡色<span class="goods_select relative"></span></li>
              <li class="mr10 w62">奶白色</li>
              <li class="mr10 w62">纯黑色</li>
            </ul>
          </div>
          <div class="num clear mt10">
            <span class="lf mt7">数&nbsp;&nbsp;量&nbsp;:</span>
            <div class="num_buy lf text">
              <span class="reduce_l ft18">-</span>
              <input class="text" type="text" value="1">
              <span class="reduce_r ft18">+</span>
            </div>
          </div>
          <div class="shopping">
            <a class="cart_add" href="javascript:;"></a>
            <a class="cart_buy" href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- 下部分 -->
    <div class="wrap w-1100 ma clear">
      <!-- 左边 -->
      <div class="l_side lf mt10">
        <div class="l_side_tit mb10">喜欢本萌宠的顾客还喜欢</div>
        <div>
          <ul>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price">￥1980<del class="ft12">￥2574元</del></p>
            </li>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price">￥1980<del class="ft12">￥2574元</del></p>
            </li>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price ft18">￥1980<del class="ft12">￥2574元</del></p>
            </li>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price">￥1980<del class="ft12">￥2574元</del></p>
            </li>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price">￥1980<del class="ft12">￥2574元</del></p>
            </li>
            <li class="ma">
              <a href="javascript:;"><img class="mt10" src="../../public/images/details/1.jpg" alt=""></a>
              <p class="other_name">CKU认证犬——拉布拉多幼犬</p>
              <p class="other_price">￥1980<del class="ft12">￥2574元</del></p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <div class="r_side rt mt10">
        <div class="r_side_nav ft16">萌宠展示</div>
        <div class="text">
          <img style="width:600px" src="../../public/images/details/zs1.jpg" alt="">
          <img style="width:600px" src="../../public/images/details/zs2.jpg" alt="">
          <img style="width:600px" src="../../public/images/details/zs3.jpg" alt="">
          <img style="width:600px" src="../../public/images/details/zs4.jpg" alt="">
          <img style="width:600px" src="../../public/images/details/zs5.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <my-footer/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      share:"",
      shareShow:"",
      city:false,
      changepic:"",
      changecolor:"",
      changepicture:false
    }
  },
  methods: {
    onMouseOver () {
      this.share = true,
      this.shareShow = true,
      this.changepic = true,
      this.changecolor = true
    },
    onMouseOut () {
      this.share = false,
      this.shareShow = false,
      this.changepic = false
      this.changecolor = false
    },
    select () {
      this.city = !this.city,
      this.changepicture = !this.changepicture
    }
  }
}
</script>
<style scope>
/* 上部分 */
.my_cart{
  padding-bottom: 20px;
}
/* 面包屑导航 */
.crumbs{
  margin: 10px 0;
}
.crumbs>a{
  color: #666;
}
.crumbs>a:hover {
  color: #ff6600;  
}
/* 左边 */
.my_cart_left{
  background: #fff;
  padding: 10px;
}
.my_cart_img{
  cursor: crosshair;
}
.cart_img{
  cursor: pointer;
  border: 1px solid #f2f2f2;
}
.cart_img:hover{
  opacity: 1;
  border: 1px solid #FF6600;
}
.text{
  text-align: center;
}
.d-none{
  display: none;
}
/* 关于分享 */
.share{
  padding: 12px 0;
  border-bottom: 1px #e2e2e2 dashed;
}
.share.changeColor{
  background: #fff !important;
}
.share_tit.changePicture{
  background: url(../../public/images/details/toolbar.png) no-repeat -36px -61px !important;
}
.share_icon{
  width: 19px;
  height: 15px;
  display: inline-block;
  background: url(../../public/images/details/sc.png) 2px -25px;
  margin-left: 10px;
}
.share_collect,.infoCoding,.share_icon{
  line-height: 30px;
}
.share_tit {
  padding: 0 9px;
  height: 22px;
  line-height: 22px;
  background: #fafafa;
  border: solid 1px #c2c2c2;
  border-radius: 2px;
  cursor: pointer;
  margin-left: 61px;
}
.share_tit .changePic{
  border-bottom-color: #999 !important;
  border-top-color: #fff !important;
  top: -11px !important;
}
.share_tit_border{
  border-bottom: none;
}
.share>ul{
  width:112px;
  border-radius: 2px;
  padding: 0 0 0 6px;
  left:315px;
  top:35px;
  border:1px solid #c2c2c2;
  border-top:none;
  cursor: pointer;
}
.qzone,.qq,.wx,.wb{
  width:22px;
  height:21px;
  padding:0px 2px;
  cursor: pointer;
}
.wb{
  border-top:1px solid #c2c2c2;
}
.qzone{
  background: url(../../public/images/details/share_icon.png) -30px 0px;
}
.qq{
  background: url(../../public/images/details/share_icon.png) -239px 0px;
}
.wx{
  background: url(../../public/images/details/share_icon.png) -209px 0px;
}
.wb{
  background: url(../../public/images/details/share_icon.png) 0px 0px;
}
.tit_icon{
  display: inline-block;
  width: 15px;
  height: 12px;
  background: url(../../public/images/details/share-sef3db69c23.png) no-repeat;
  background-position: -16px -19px;
}
.tit_arrow{
  border: solid 3px transparent;
  border-top-color: #999;
  top: 11px;
}
/* 右边 */
.my_cart_right{
  width: 717px;
  padding: 20px;
  background: #fff;
}
.name{
  color: rgb(51, 51, 51);
  font-size: 24px;
}
.my_cart_price{
  margin: 25px 0 0;
  background: #F1F1F1F1;
}
.c999 {
  color: #999;
}
.c93c {
  color: #e3393c;
}
.my_cart_p1{
  padding: 20px 0 0 20px;
}
.my_cart_p2{
  padding: 10px 0 20px 20px;
}
.personal_xx{
  height: 60px;
  line-height: 25px;
  padding: 20px 0;
}
.personal_xx ul li{
  width: 20%;
  text-align: center;
  border-right: 1px solid #eee;
  padding: 10px 0;
}
.personal_xx ul li:last-child{
  border: 0;
}
.server_label {
  height: 24px;
  line-height: 24px;
  width: 23%;
  border-radius: 5px;
  margin: 5px 10px 0 0;
}
.server_label_blue{
  color: #23b7ff;
  border: 1px solid #23b7ff;
}
.server_label_green {
  color: #24b895;
  border: 1px solid #24b895;
}
.server_label_orange {
  color: #ff6000;
  border: 1px solid #ff6000;
}
.server_label_red {
  border: 1px solid #ff5656;
  color: #ff5656;
}
.mt7{
  margin-top: 7px;
}
.i_color,.delivery,.num{
  padding-top: 12px;
}
.color_name,.del_city,.num_buy{
  margin-left: 16px;
}
.color_name li,.del_city{
  padding: 5px 17px;
  border: 1px solid #ccc;
}
.color_name li{
  padding-right: 0px;
  cursor: pointer;
}
.color_name li:hover{
  color: #ff6000;
  border: 1px solid #ff6000;
}
.w62{
  width: 62px;
}
.del_city{
  cursor: pointer;
}
.del_city em{
  display: inline-block;
  width: 9px;
  height: 8px;
  background: url(../../public/images/details/toolbar.png) no-repeat -22px -61px;
}
.del_city_select{
  width:285px;
  flex-wrap:wrap;
  background:#fff;
  left:59px;
  top:42px;
  border: 1px solid #ccc;
  z-index:10;
  border-top:none;
}
.del_city_select li{
  width:45px;
  padding:5px 4px 7px 7px;
}
.goods_select {
  display: inline-block;
  width: 17px;
  height: 16px;
  background: url(../../public/images/details/goods-select.png) 0 0 no-repeat;
  top: 8px;
  left: 2px;
}
.num_buy{
  border: 1px solid #e0e0e0;
}
.reduce_l,.reduce_r{
  display: inline-block;
  width: 26px;
  height: 28px;
  border-right: 1px solid #ccc;
  background: #eee;
  cursor: pointer;
}
.reduce_r{
  border-right: none;
  border-left: 1px solid #ccc;
}
.num_buy input{
  width: 50px;
  height: 20px;
  border: none;
}
.shopping{
  margin-left: 113px;
  margin-top: 41px;
}
.cart_add,.cart_buy{
  display: inline-block;
  width: 253px;
  height: 47px;
  text-indent: -9999px;
  background: url(../../public/images/details/shop.png) 0 -116px no-repeat;
  margin-right: 20px;
}
.cart_buy{
  width: 168px;
  background: url(../../public/images/details/shop.png) -282px -116px no-repeat;
}
/* 下部分 */
.l_side {
  width: 220px;
  display: inline;
  background: #fff;
}
.l_side ul{
  flex-wrap: wrap;
} 
.l_side ul li{
  width: 200px;
  height: 260px;
  border-top: 1px dashed #ccc;
} 
.l_side ul li:first-child{
  border: 0;
}
.l_side a{
  margin: 10px 10px;
}
.l_side_tit{
  height: 40px;
  line-height: 40px;
  background: #FFB000;
  color: #342E2E;
  font-weight: 700;
  text-align: center;
}
.other_name{
  height: 25px;
  margin: 10px auto 0;
}
.other_price{
  color: #f74447;
  width: 176px;
  margin: 2px auto 0;
}
.other_price del{
  color: #aaa;
  padding-left: 10px;
}
.r_side{
  width: 968px;
  background: #fff;
  margin-left: 10px;
}
.r_side_nav{
  height: 58px;
  line-height: 58px;
  border-top: 2px solid #e60000;
}
</style>
