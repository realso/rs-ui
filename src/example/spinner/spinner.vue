<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="按钮button" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-spinner color="#26a2ff" type="snake"></rs-spinner>
    </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'spinner',
    data (){
      return {}
    },
    methods:{
        test(event,next){
            setTimeout(()=>{
                next(1);
            },2000);
        }
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
input, button, .mui-btn{margin-top: 10px;margin-left: 10px}
</style>
