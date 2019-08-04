<template>
  <div class="slide">
    <!-- 广告图片区域 -->
    <div class="slideshow">
      <ul>
        <li v-for="(img,index) in imgArray" :key="index" v-show="index===mark">
          <img :src="img">
        </li>
      </ul>
    </div>
    <!-- 指示器 -->
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