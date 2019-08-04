<template>
  <div>
    <my-header/>
    <div class="product_content w-1100 ma mb20">
    <div class="product_option ft14">
      <div class="product_option1 clear w-1100">
        <div class="product_option1L lf">
          <h3 class="ft14">当前位置：</h3>
        </div>
        <div class="product_add_nav lf">
          <a href="javascript:;">首页</a>
          <span>></span> 
          <a href="javascript:;">狗狗市场</a>
          <span>></span>
        </div>
      </div>
      <!-- 宠类选择 -->
      <div class="product_option1 clear w-1100">
        <div class="product_option1L lf">
          <h3 class="ft14">宠类：</h3>
        </div>
        <div class="product_option1C lf">
          <ul class="side_option" id="ul_list1">
            <li class="product_option1C3 mr10"><a href="javascript:;">全部</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">泰迪犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">金毛犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">阿拉斯加</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">博美犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">比熊犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">边境牧羊犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">巴哥犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">比格犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">柴犬</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">茶杯犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">德国牧羊犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">法国斗牛犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">贵宾犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">博美哈士奇</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">吉娃娃</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">京巴犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">柯基犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">拉布拉多</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">罗威纳</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">腊肠犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">恶霸犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">牛头梗</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">秋田犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">萨摩耶</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">松狮犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">沙皮犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">雪纳瑞</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">小鹿犬</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">西高地</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">约克夏</a></li>
            <li class="product_option1C1 mr10" v-show="infor1"><a href="javascript:;">英国斗牛犬</a></li>
          </ul>
        </div>
        <div id="product_option1R1" class="product_option1R rt">
          <a class="mt10 lf" @click="showInfo1">更多</a> 
        </div>
      </div>
      <!-- 年龄选择 -->
      <div class="product_option1 clear w-1100">
        <div class="product_option1L lf">
          <h3 class="ft14">年龄：</h3>
        </div>
        <div class="product_option1C lf">
          <ul class="side_option">
            <li class="product_option1C3 mr10"><a href="javascript:;">全部</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">3月龄以下</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">3~5月龄</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">5~12月龄</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">1岁以上</a></li>              
          </ul>
        </div>       
      </div>
      <!-- 地区选择 -->
      <div class="product_option1 clear w-1100">
        <div class="product_option1L lf">
          <h3 class="ft14">地区：</h3>
        </div>
        <div class="product_option1C lf">
          <ul class="side_option" id="ul_list2">
            <li class="product_option1C3 mr10"><a href="javascript:;">全部</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">北京</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">天津</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">上海</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">重庆</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">河北</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">山西</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">辽宁</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">吉林</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">山东</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">江苏</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">浙江</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">安徽</a></li>
            <li class="product_option1C1 mr10"><a href="java2script:;">福建</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">浙江</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">安徽</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">福建</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">江西</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">山东</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">河南</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">湖北</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">湖南</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">广东</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">海南</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">四川</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">贵州</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">云南</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">陕西</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">甘肃</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">青海</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">内蒙古</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">广西</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">西藏</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">宁夏</a></li>
            <li class="product_option1C1 mr10" v-show="infor2"><a href="javascript:;">新疆</a></li>
          </ul>
        </div>
        <div id="product_option1R2" class="product_option1R rt">
          <a class="mt10 lf" @click="showInfo2">更多</a> 
        </div>
      </div>
      <!-- 售后保障 -->
      <div class="product_option1 clear w-1100">
        <div class="product_option1L lf">
          <h3 class="ft14">保障：</h3>
        </div>
        <div class="product_option1C lf">
          <ul class="side_option">
            <li class="product_option1C3 mr10"><a href="javascript:;">全部</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">担保交易</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">7天退换</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">30天质保</a></li>
            <li class="product_option1C1 mr10"><a href="javascript:;">提供售后</a></li>              
          </ul>
        </div>
      </div>
    </div>
    <!-- 萌宠列表 -->
    <div class="product_list mt10">
      <div class="sort clear mb10">
        <div class="sort_left lf">
          <ul>
            <li class="active"><a class="text_center" href="javascript:;">综合</a></li>
            <li><a class="paixu1" href="javascript:;">销量</a></li>
            <li><a class="paixu1" href="javascript:;">人气</a></li>
            <li><a class="paixu2" href="javascript:;">价格</a></li>
            <li><a class="paixu1" href="javascript:;">新品</a></li>
            <li><a class="paixu1" href="javascript:;">评论</a></li>
          </ul>          
        </div>
        <div class="sort_right rt clear mt10">
          <p class="p1 lf">共24件商品</p>
          <p class="p2 lf mr10">1/2</p>
          <p class="lf list_icon1"></p>
          <p class="lf list_icon2"></p>
        </div>
      </div>
      <!-- goods -->
      <div class="goods clear">
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>           
          </div>        
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
            <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>           
          </div>        
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
            <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>           
          </div>        
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list mr20 lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
          <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="goods_list lf mb20">
          <a href="javascript:;">
            <img src="../../public/images/products/320150.jpg" alt="">
          </a>
            <div class="goods_price1 clear">
            <span class="span1 ft16 lf">萌宠价：</span>
            <span class="span2 ft16 lf ft20">￥</span>
            <span class="span3 lf bold">2000</span>
          </div>
          <div class="goods_price2 clear">
            <span class="ft16 lf c333">市场价：</span>
            <span class="ft16 lf through c999">￥</span>
            <span class="ft16 lf through c999">2800</span>
          </div>
          <div class="ft14 mb3 ff6">广东|3月龄以下|2针疫苗|已驱虫</div>
          <div class="goods_infor">
            <a class="c666" href="javascript:;">出售超高品质的世界哈士奇幼犬</a>
          </div>
        </div>
        <div class="pages rt">
          <a href="javascript:;" class="previous disabled">上一页</a>
					<a href="javascript:;" class="current">1</a>
          <a href="javascript:;">2</a>
          <a href="javascript:;">3</a>
          <a href="javascript:;">4</a>
          <a href="javascript:;">5</a>
          <a href="javascript:;" class="next">下一页</a>
          <span>共2页</span>
          <span>
            到第<input class="go_page_text" type="text" value="1">页
          </span>
          <input class="products_btn" type="button" value="确定">
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
      infor1: false,
      infor2: false
    }
  },
  methods: {
    showInfo1 () {
      this.infor1=!this.infor1
    },
    showInfo2 () {
      this.infor2=!this.infor2
    }
  },
}
</script>
<style>
/* product_option部分 */
.product_option {
  width: 100%;
  background: #fff;
}
.product_option1:not(:last-child) {
  display: inline-block;
  border-bottom: 1px solid #eee;
}
.product_option1L {
  width: 90px;
}
.product_option1L h3 {
  width: 80px;
  text-align: right;
  padding-right: 20px;
  font-weight: 100;
} 
.product_add_nav {
  height: 40px;
}
.product_option1L,.product_add_nav a,.product_add_nav span {
  color: #999;
  line-height: 40px;
}
.product_searchC, .product_option1C {
  width: 860px;
}
.side_option {
  overflow: hidden;
  flex-flow: wrap;
}
.dis_none{
  display:none;
}
.product_option1C ul li {
  height: 30px;
  line-height: 30px;
  margin-top: 6px;
}
.product_option1C3 a {
  padding: 0 10px;
  color: #fff;
  border: 1px solid #ff6000;
  background: #ff6000;
}
.product_option1C1 a {
  padding: 0 10px;
  color: #666;
  border: 1px solid #fff;
  /* white-space: nowrap; */
}
.product_option1R {
  width: 60px;
  margin-right: 32px;
}
.product_option1R a {
  text-indent: 15px;
  width: 100%;
  background: url(../../public/images/products/product_option1Rbg1.png) no-repeat right;
  color: #ff6000;
}
/* 萌宠列表 */
.sort{
  background: #fff;
}
.sort_left ul li {
  padding: 10px 26px;
  border-right: 1px solid #ddd;
}
.sort_left ul li a {
  width: 52px;
  display: block;
}
.paixu1 {
  background: url(../../public/images/products/paixu-ico.png) no-repeat 29px -13px;
}
.paixu2 {
  background: url(../../public/images/products/paixu-ico.png) no-repeat 29px -189px;
}
.text_center{
  text-align: center;
}
.active {
  background: #ff6000;
}
.sort_left ul li:not(:first-child) a:hover,.product_option1C1 a:hover {
  color: #ff6000;
}
.list_icon1,.list_icon2 {
  display: block;
  width: 26px;
  height: 26px;
  margin-right: 6px;
  background: url(../../public/images/products/list_icon.png) no-repeat -9px -62px;
}
.list_icon2 {
  margin-right: 16px;
  background: url(../../public/images/products/list_icon.png) no-repeat -37px -62px;
}
.p1,.p2 {
  margin: 2px 12px 0 0;
}
.p1 {
  color: #999;
}
/* goods */
.goods_list {
  width: 265px;
  padding: 10px 10px 15px 10px;
  background: #fff;
}
.goods_list img {
  width: 265px;
  transition: all 0.5s linear;
}
.goods_list img:hover {
  transform: scale(1.05);
}
.goods_price1 {
  color: #fff;
  background: linear-gradient(to right,#f10180 30%,#fe4e05 100%);
  height: 33px;
  margin-top: -4px;
}
.span1,.span2 {
  display: block;
  margin: 9px 0 0 14px;
}
.span2 {
  margin: 5px 0 0 -4px;
}
.span3 {
  font-size: 24px;
  margin: 2px 0 0 2px;
}
.goods_price2 span:first-child{
  margin: 9px 2px 4px 2px;
  padding: 3px 0;
}
.goods_price2 span:not(:first-child){
  margin: 9px 2px 4px 0;
  padding: 3px 0;
}
.goods_infor a{ 
  font-size: 15px;
  width: 240px;
  margin-top: 4px;
}
.c333{
  color: #333;
}
.mb3{
  margin-bottom: 3px;
}
.ff6{
  color: #ff6000;
}
.pages {
  height: 39px;
  line-height: 39px;
}
.disabled {
  color: #bfbfbf;
  background: #f2f2f2;
  border: 1px solid #bfbfbf;
}
.pages a {
  color: #FF8A00;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  background: #f7f7f7;
}
.pages a.current {
  color: #fff;
  background: #FF8A00;
  border-color: #FF8A00;
}
.next+span{
  margin: 0 10px 0 14px;
}
.go_page_text,.btn {
  width: 35px;
  height: 32px;
  border: 1px solid #e6e6e6;
  text-align: center;
  margin: 0 3px 0 3px;
  outline: 0;
}
.products_btn {
  width: 43px;
  height: 39px;
  border-radius: 4px;
  background: #f7f7f7;
  border: 1px solid #ddd;
}
</style>