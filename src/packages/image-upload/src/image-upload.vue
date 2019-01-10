<template>
  <div>
    <div class="rs-image">
      <div class="rs-image-item" :style="col|width" v-for="(item,index) in imgList" :key="index">
          <div class="rs-image-close" @click.stop="del(index)"><span class="mui-icon mui-icon-closeempty"></span></div>
          <img class="rs-image-show" :src="item.src" @click.stop="showImg(index)"/>
          {{item.src}}
      </div>
      <div v-if="ISCANADD" class="rs-image-item" :style="col|width">
          <span class="rs-image-icon mui-icon mui-icon-plusempty"><img class="rs-image-show" ref="tempImg"/></span>
          <div v-if="takePicture" class="rs-image-file" @click.stop="showcontrol1()"></div>
          <input v-if="!takePicture" class="rs-image-file" @change="change($event)" type="file" multiple/>
      </div>
    </div>
    <rs-popup class="rs-image-control" v-model="showcontrol" :closeOnClickModal="false" position="bottom">
      <ul class="rs-image-clist">
        <li @click.stop="paizhao()">
          拍照或录像
        </li>
        <li>
          <input class="rs-image-file" @change="change($event)" type="file" multiple/>
          照片图库
        </li>
      </ul>
      <ul class="rs-image-clist">
        <li @click.stop="hidecontrol()">
          取消
        </li>
      </ul>
    </rs-popup>
    <rs-popup v-if="showImg1&&imgList.length>0" v-model="showImg1" class="rs-showImg" :closeOnClickModal="false" position="right">
      <rs-imageShow :activeIndex="activeIndex" :imgList="imgList" @click.native="hideImg" @del="del(index)"></rs-imageShow>
    </rs-popup>
  </div>  
</template>

<script>
/**
 * rs-image-upload
 * @module components/imageUpload
 * @desc 图片上传
 * @param col {number} [col=4] - 显示图片一行有多少个，接受 3, 4, 5默认4个
 * @param limit {number} [limit=4] - 图片最多多少个，接受1,2,3,4等正整数默认4个
 * @param imgList {Array} [imgList={]] - 图片数组
 *
 * @example
 * <rs-button type="primary" size="large" icon="mui-icon mui-icon-home" link="true">按钮</rs-button>
 */
import lrz  from 'lrz'
export default {
  name: 'rs-image-upload',
  data() {
    return {
      showFace: false,
      size: 0,
      tempImgs:[],
      showImg1: false,
      showcontrol: false,
      activeIndex: 0
      }
  },
  props: {
    imgList:{type:Array,default:[]},
    col: {
      type: Number,
      default: 4
    },
    limit:{//限制图片上传的数量
      type: Number,
      default: 4
    },
    quality:{
      type:Object,
      default:function(){return {width:1024}}
    },
    takePicture: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    ISCANADD(){
      return  this.imgList.length-this.limit<0
    },
    REMLENTH(){
      return this.limit-this.imgList.length;
    }
  },
  methods: {
    showImg (index) {
      this.activeIndex = index
      this.showImg1 = true
    },
    hideImg (index) {
      this.showImg1 = false
    },
    showcontrol1 (el) {
      this.showcontrol = true;
    },
    hidecontrol () {
      this.showcontrol = false;
    },
    paizhao (){
      this.showcontrol = false;
      this.$emit("on-take-picture");
    },
    change (el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = '';
      this.showcontrol = false;
    },
    fileList(fileList) {
      let files = fileList.files;
      let  len = files.length>this.REMLENTH?this.REMLENTH: files.length;
      for (let i = 0; i < len; i++) {
        //判断是否为文件夹
        if (files[i].type != '') {
            this.fileAdd(files[i]);
        }
      }
      if(len<files.length){
        this.$toast(`超出最大上传数量${this.limit}张！`);
      }
    },
    fileAdd(file) {
      if(!this.ISCANADD){
        return;
      }
      //判断是否为图片文件
      if (file.type.indexOf('image') == -1) {
          this.$toast('请选择图片文件');
      } else {
        lrz(file, this.quality).then((ret)=>{
            this.$emit("on-add-image",{src:ret.base64,base64:ret.base64,fileName:file.name,fileSize:file.size});
        });
       }
    },
    del(index) {
      this.$emit("on-del-image",index);
    }
  },
  filters: {
    width (value) {
      return 'width:'+ Math.round(100/value-1) +'%;height:'+ Math.round(100/value-2)+'vw'
    }
  }
}
</script>
<style lang="postcss">
  .rs-showImg{ width: 100%; text-align: center; background: none;}
  .rs-showImg img{width: 100%;}
  .swiper-slide{position:relative;}
  .rs-showImg .rs-image-close{left: auto; right: -20px; top: -20px; position: absolute;}
  
  @component-namespace rs {
    @component image {
      overflow: hidden;
      text-align: center;
      @descendent control {
        background: none !important;
        width: 90%;
      }
      @descendent clist {
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
        background: #fff;
        border-radius: 5px;
        text-align: center;
        list-style: none;
        li {
          padding: 11px 0;
          position: relative;
          border-bottom: 1px solid #eee;
          &:last-child{
            border-bottom: none;
          }
        }
      }
      @descendent item {
        float: left;
        position: relative;
        border: 1px dashed #999;
        border-radius: 5px;
        overflow: hidden;
        margin-right: 1%;
        margin-bottom: 1vw;
      }
      @descendent close {
        position: absolute;
        top: -10px;
        left: -10px;
        padding: 10px;
        z-index: 999;
        span{
          font-size: 22px;
          color: #fff;
          border-radius: 100%;
          background: #f00;
        }
      }
      @descendent icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -17px;
        margin-left: -17px;
        color: #333;
        font-size:34px;
        font-weight: bold;
        z-index: 99;
      }
      @descendent file {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 999;
      }
      @descendent show {
          width: 100%;
          height: 100%;
          display: block;
      }
    }
  }
</style>
