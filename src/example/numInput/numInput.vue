<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="输入框转换numInput" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
            数字转换后：text {string} [:text="mlex|toFixed(2)"] <br/>
            字体大小：size {string} [size='14'] 默认为（14）, 可设置为12,13,14数字即可<br/>
            输入框的类型：nativeType {string} [nativeType='number']默认为number 可设置为number text等类型<br/>
            输入框的高度：height {string} [height='24'] 默认为24, 可设置为12,13,14数字即可<br/>
            例如：&lt;rs-numInput height='24' v-model.lazy="mlex" :text="mlex|toFixed(2)" size='14'&gt;&lt;/rs-numInput&gt;
        </h5>
        <rs-numInput height='24' v-model.lazy="mlex" :text="mlex|toFixed(2)" size='14'></rs-numInput>
        <rs-numInput height='24' v-model.lazy="mlex" size='14' :text="mlex|toFixed(2)" disabled></rs-numInput>  
    </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'button',
    data (){
      return {
          mlex: '20'
      }
    },
    methods:{}
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
