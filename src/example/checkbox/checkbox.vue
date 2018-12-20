<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="复选框checkBox" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          type {string} [type=default] - 显示类型，接受 default页眉页脚都有,content只有中间部分,header有页眉有中间部分, footer有中间部分有页脚<br/>
          例如：
          <pre>
&lt;rs-card type="default"&gt;
  &lt;span slot="header"&gt;页眉&lt;/span&gt;
  &lt;span slot="content"&gt;包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）&lt;/span&gt;
  &lt;span slot="footer"&gt;页脚&lt;/span&gt;
&lt;/rs-card&gt;
          </pre>
        </h5>
        <rs-checkbox v-model="checked" name="name1">复选框</rs-checkbox>
        <rs-checkbox v-model="checked1" name="name1" color="success">复选框</rs-checkbox>
        <rs-checkbox v-model="checked2" name="name1" color="white">复选框</rs-checkbox>
        <rs-checkbox v-model="checked3" name="name1" color="white" disabled>复选框</rs-checkbox>
        <rs-checkbox v-model="checked4" name="name1" disabled>复选框</rs-checkbox>
        <rs-checkbox v-model="checked5" name="name1" left>复选框</rs-checkbox>
        <rs-checkbox v-model="checked6" disabled name="name1" left>复选框</rs-checkbox>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'checkbox',
    data (){
      return {
        checked: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true
      }
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
