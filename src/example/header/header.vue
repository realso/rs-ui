<template>
  <div class="rs-layout rs-layout-top">
    <rs-header title="导航header" color="primary" transparent>
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          标题：{string} [title]<br/>
          例如：
          <pre>
&lt;rs-header title="导航header"&gt;&lt;/rs-header&gt;
          </pre>
        </h5>
        <h5>
          导航的背景: {string} [color] 导航的背景颜色默认蓝色 接受 primary(蓝色), white(白色)<br/>
          例如：
          <pre>
&lt;rs-header title="导航header" color="primary"&gt;
&lt;/rs-header&gt;
          </pre>
        </h5>
        <h5>
          透明导航：transparent {boolean} [transparent] - 导航是否是透明导航栏，默认不是透明<br/>
          结合顶部是图片使用，另外外面框子使用顶部不留44px的导航高度rs-layout
          例如：
          <pre>
&lt;rs-header title="导航header" color="primary" transparent&gt;
  &lt;a slot="left" class="mui-icon mui-icon-left-nav" href="/"&gt;&lt;/a&gt;
&lt;/rs-header&gt;
          </pre>
        </h5>
        <h5>
          标题：{slot} [left] - 显示在左侧区域<br/>
          例如：
          <pre>
&lt;rs-header title="导航header" color="primary"&gt;
  &lt;a slot="left" class="mui-icon mui-icon-left-nav" href="/"&gt;&lt;/a&gt;
&lt;/rs-header&gt;
          </pre>
        </h5>
        <h5>
          标题：{slot} [right] - 显示在右侧区域<br/>
          例如：
          <pre>
&lt;rs-header title="导航header" color="primary"&gt;
  &lt;a slot="left" class="mui-icon mui-icon-left-nav" href="/"&gt;&lt;/a&gt;
  &lt;rs-button link&gt;编辑&lt;/rs-button&gt;
&lt;/rs-header&gt;
          </pre>
        </h5>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'header',
    data (){
      return {}
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
