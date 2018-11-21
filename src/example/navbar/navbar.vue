<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="选项卡navbar" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          选项卡选中的值：selected - 返回 item component 传入的 value<br/>
          例如：
          <pre>
&lt;rs-navbar v-model="selected"&gt;
  &lt;rs-nav-item id="1"&gt;页眉&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="2"&gt;点赞&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="3"&gt;页脚&lt;/rs-nav-item&gt;
&lt;/rs-navbar&gt;
          </pre>
        </h5>
        <rs-navbar v-model="selected">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>
        <h5>
          是否按钮：inverted {boolean} [inverted] - 选项卡是否是按钮样式，默认不是按钮样式<br/>
          例如：
          <pre>
&lt;rs-navbar v-model="selected" inverted&gt;
  &lt;rs-nav-item id="1"&gt;页眉&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="2"&gt;点赞&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="3"&gt;页脚&lt;/rs-nav-item&gt;
&lt;/rs-navbar&gt;
          </pre>
        </h5>
        <rs-navbar v-model="selected" inverted>
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>
        <h5>
          选项卡颜色：color {string} [color=primary] - 显示类型，接受 default(默认), primary, danger,success,white,grey<br/>
          例如：
          <pre>
&lt;rs-navbar v-model="selected" inverted color="primary"&gt;
  &lt;rs-nav-item id="1"&gt;页眉&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="2"&gt;点赞&lt;/rs-nav-item&gt;
  &lt;rs-nav-item id="3"&gt;页脚&lt;/rs-nav-item&gt;
&lt;/rs-navbar&gt;
          </pre>
        </h5>
        <rs-navbar v-model="selected" inverted color="primary">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
        <rs-navbar v-model="selected" inverted color="danger">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
        <rs-navbar v-model="selected" inverted color="white">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
        <rs-navbar v-model="selected" inverted color="grey">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
        <rs-navbar v-model="selected" color="danger">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
        <rs-navbar v-model="selected">
          <rs-nav-item id="1">
            首页1
          </rs-nav-item>
          <rs-nav-item id="2">
            首页
          </rs-nav-item>
        </rs-navbar>  
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'navbar',
    data (){
      return {
        selected: '1'
      }
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
