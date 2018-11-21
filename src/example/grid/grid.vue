<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="九宫格grid" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          显示背景：type {string} [type=default]，接受 default(浅灰), grey（灰白色）, white（白色）<br/>
          例如：
          <pre>
&lt;rs-grid type="default"&gt;
  &lt;rs-grid-item&gt;页眉&lt;/rs-grid-item&gt;
  &lt;rs-grid-item&gt;点赞&lt;/rs-grid-item&gt;
  &lt;rs-grid-item&gt;页脚&lt;/rs-grid-item&gt;
&lt;/rs-grid&gt;
          </pre>
        </h5>
        <rs-grid type="default">
          <rs-grid-item>1</rs-grid-item>
          <rs-grid-item>2</rs-grid-item>
          <rs-grid-item>3</rs-grid-item>
        </rs-grid>
        <rs-grid type="grey">
          <rs-grid-item>1</rs-grid-item>
          <rs-grid-item>2</rs-grid-item>
          <rs-grid-item>3</rs-grid-item>
        </rs-grid>
        <rs-grid type="white">
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-home"></span>
            Home
          </rs-grid-item>
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-phone"></span>
            Phone
          </rs-grid-item>
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-phone"></span>
            首页
          </rs-grid-item>
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-phone"></span>
            首页
          </rs-grid-item>
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-home"></span>
            Home
          </rs-grid-item>
          <rs-grid-item>
            <span slot="icon" class="mui-icon mui-icon-phone"></span>
            Phone
          </rs-grid-item>
        </rs-grid>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'grid',
    data (){
      return {}
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
.mui-icon{font-size: 2.4em;position: relative;}
</style>
