<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="折叠面板accordion" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a> 
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-accordion>
          <div slot="header">复选框</div>
          <div slot="content">这是点开之后的内容！</div>
        </rs-accordion>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: '折叠面板accordion',
    data (){
      return {
      }
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
