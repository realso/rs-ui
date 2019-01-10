<template>
  <div>
    <rs-header :title="(activeIndex+1)+'/'+length" color="white">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" @click="handleClick()"></a>
      <div v-show="length>0" slot="right" @click.stop="del(activeIndex)">
        <rs-button link>删除</rs-button>
      </div>
    </rs-header>
    <div class="rs-showImg1">
      <div class="rs-showImg1-content">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in imgList" :key="index"><img :src="item.src"/></swiper-slide>
      </swiper>
      </div>
    </div>
  </div>
</template>
<script>
  
/**
 * rs-imageShow
 * @module components/imageShow
 * @desc 图片上传
 * @param col {number} [col=4] - 显示图片一行有多少个，接受 3, 4, 5默认4个
 * @param activeIndex {number} [activeIndex=4] - 第几张图片默认为1
 * @param imgList {Array} [imgList={]] - 图片数组
 *
 * @example
 * 
 */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let vm = null;
export default {
  name: 'rs-imageShow',
  props: {
    imgList: Array,
    activeIndex:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      swiperOption: {//swiper3
        direction: 'horizontal',
        initialSlide: this.activeIndex,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        observer:true,
        observeParents:true,
        onTransitionEnd: function(swiper){
          vm.activeIndex = swiper.activeIndex
        }
      }
    }
  },
  created() {
    vm = this
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    },
    length(){
      return this.imgList.length
    },
    index1() {
      return this.activeIndex+1
    } 
  }, 
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    del(index) {
      var _this = this;
      if(this.length<=1){
        _this.$emit('click')
      }
      this.$emit('del', index)
    }
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component showImg1 {
      overflow: hidden;
      text-align: center;
      height: calc(100vh - 44px);
      margin-top: 44px;
      background: #000;
      img{width: 100%; display: block;}
      @descendent content {
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
      } 
    }
  }
</style>
