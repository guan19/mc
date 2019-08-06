<template>
  <div class="slide ">
    <!-- 1.广告图片区域 -->
    <div class="slideshow">
      <ul>
        <li v-for="(img,index) in imgArray" :key="index" v-show="index===mark">
          <img :src="img">
        </li>
      </ul>
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" class="control-left" @click="moveToLeft">
      <img class="control-left-icon" src="../../public/images/index/banner/left_ar.png">
    </a>
    <a href="javascript:;" class="control-right" @click="moveToRight">
      <img class="control-right-icon" src="../../public/images/index/banner/right_ar.png">
    </a>
    <!-- 3.指示器 -->
    <div class="bar">
      <span v-for="(item,index) in imgArray" :key="index" :class="{'active':index===mark}" @click="move(index)"></span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      mark:0, //指示器位置标识
      imgArray:[
          require('../../public/images/index/banner/carousel-1.jpg'),
          require('../../public/images/index/banner/carousel-2.jpg'),
          require('../../public/images/index/banner/carousel-3.jpg'),
          require('../../public/images/index/banner/carousel-4.jpg'),
      ]
    }
  },
  methods: {
    moveToLeft(){     
      this.mark--;
      if(this.mark===-1){
        this.mark=3;
      }       
    },
    moveToRight(){
      this.mark++;
      if(this.mark===4){
        this.mark=0;
      }     
    },
    move(index){
      this.mark=index;
    },
    autoplay(){
      this.mark++;
      if(this.mark===4){
        this.mark=0;
      }
    },
    // 播放方法
    play(){
      setInterval(this.autoplay,5000)
    }
  },
  created() {
    this.play()
  },
  move(){
          
  }
}
</script>
<style>
/* 图片样式 */
.slide{
  width:1366px;
  overflow:hidden;
  position:relative;
}
.slideshow>ul>li{
  width:1366px;
}
.slideshow>ul img{
  width:100%;
  height:480px;
}
/*左右箭头样式*/
.control-left,
.control-right{
  width:40px;
  height:100px;
  background-color:rgba(95, 95, 92, 0.3);
  top:34%;
  margin-left:40px;
  border-radius:0.25rem;
  position: absolute;
}
.control-right{
  right:17px;
  margin-right:40px;
}
.control-left-icon,
.control-right-icon{
  margin-top:21px;
}
/* 指示器样式 */
.bar{
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 10px;
  z-index: 10;
  text-align: center;
}
.slide .bar span{
  display: inline-block;
  width: 10px; 
  height: 10px;
  background-color: #fff;
  border-color: gray;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
}
.active{
  background: #ff6600 !important;
}
</style>