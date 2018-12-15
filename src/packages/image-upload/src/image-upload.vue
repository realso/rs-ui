<template>
  <div class="rs-image">
    <div class="rs-image-item" :style="col|width" v-for="(item,index) in imgList" :key="index">
        <div class="rs-image-close" @click.stop="del(index)"><span class="mui-icon mui-icon-closeempty"></span></div>
        <img class="rs-image-show" :src="item.file.src"/>
        <input class="rs-image-file" @change="change($event)" type="file" multiple/>
    </div>
    <div v-if="limit>0" class="rs-image-item" :style="col|width">
        <span class="rs-image-icon mui-icon mui-icon-plusempty"></span>
        <input class="rs-image-file" @change="change($event)" type="file" multiple/>
    </div>
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
export default {
  name: 'rs-image-upload',
  data() {
    return {
      showFace: false,
      size: 0,
      tempImgs:[]
    }
  },
  props: {
    imgList: Array,
    col: {
      type: Number,
      default: 4
    },
    limit:{//限制图片上传的数量
      type: Number,
      default: 4
    }
  },
  methods: {
    change (el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = ''
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != '') {
            this.fileAdd(files[i]);
        } else {
            //文件夹处理
            this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
          files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function (file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
              _this.foldersAdd(file[i]);
          } else {
              _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
            _this.fileAdd(file)
        })
    },
    fileAdd(file) {
      if (this.limit !== undefined) this.limit--;
      if (this.limit !== undefined && this.limit < 0) return;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf('image') == -1) {
          this.$toast('请选择图片文件');
      } else {
        let reader = new FileReader();
        let image = new Image();
        let _this = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
            file.src = this.result;
            image.onload = function(){
                let width = image.width;
                let height = image.height;
                file.width = width;
                file.height = height;
                _this.imgList.push({
                    file
                });
                console.log(_this.imgList)
            };
            image.src= file.src;
          }
        }
    },
    del(index) {
      this.size = this.size - this.imgList[index].file.size;//总大小
      this.imgList.splice(index, 1);
      if (this.limit !== undefined) this.limit = 4-this.imgList.length;
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
  @component-namespace rs {
    @component image {
      overflow: hidden;
      text-align: center;
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
        z-index: 9999;
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
