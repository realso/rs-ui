<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="按钮button" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
            imgList {Arry} [imgList]<br/>
            col {number} [col=4] - 显示图片一行有多少个，接受 3, 4, 5默认4个<br/>
            limit {number} [limit=4] - 图片最多多少个，接受1,2,3,4等正整数默认4个<br/>
            例如：
        </h5>
        <rs-image-upload @on-add-image="addImage" @on-del-image="delImage" :imgList="imgList"/>
        <rs-image-upload @on-add-image="addImage" @on-del-image="delImage" :imgList="imgList" :takePicture="true" @on-take-picture="takePicture"/>
    </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'button',
    data (){
      return {
        imgList: [
            {
                file:{
                    height:375,
                    lastModified:1538289162153,
                    name:"3.jpg",
                    size:174269,
                    src:"data:image/jpeg;base64",
                    type:"image/jpeg",
                    webkitRelativePath:"",
                    width:800
                }
           }
        ]
      }
    },
    methods:{
        addImage(file){
          this.imgList.push(file)
          console.log("新增一个图片")
        //    this.$callAction({action:`${Constants.STORE_NAME}/addImage`,param:file},);
        },
        delImage(index){
            this.imgList.splice(index, 1);
            console.log("删除一个图片")
            // this.$callAction({action:`${Constants.STORE_NAME}/delImage`,param:item},);
        },
        takePicture(el){
           console.log("我要拍照了")
        }
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
input, button, .mui-btn{margin-top: 10px;margin-left: 10px}
</style>
