<template>
  <div class="rs-layout rs-layout-top">
    <rs-header title="卡片card" color="primary">
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
        <rs-card type="default">
          <span slot="header">页眉</span>
          <span slot="content">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</span>
          <span slot="footer">页脚</span>
        </rs-card>
        <rs-card type="header">
          <span slot="header">页眉</span>
          <span slot="content">包含页眉的卡片，页眉常用来显示面板标题</span>
        </rs-card>
        <rs-card type="content">
          <span slot="content">包含中间的卡片</span>
        </rs-card>
        <rs-card type="footer">
          <span slot="content">包含页脚的卡片，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</span>
          <span slot="footer">页脚</span>
        </rs-card> 
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'card',
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
