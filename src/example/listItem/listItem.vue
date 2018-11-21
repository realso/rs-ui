<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="列表list" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          字体大小尺寸：size {string} [size=14] - ，接受 12, 14, 16, 17<br/>
          例如：
          <pre>
&lt;rs-list size="14"&gt;
  &lt;rs-list-item&gt;页眉&lt;/rs-list-item&gt;
  &lt;rs-list-item&gt;点赞&lt;/rs-list-item&gt;
  &lt;rs-list-item&gt;页脚&lt;/rs-list-item&gt;
&lt;/rs-grid&gt;
          </pre>
        </h5>
        <rs-list size="14">
          <rs-list-item>
            <span slot="left" class="mui-icon mui-icon-person"></span>
            首页
            <div slot="right">
            返回
            </div>
          </rs-list-item>
          <rs-list-item>
            <span slot="left" class="mui-icon mui-icon-person"></span>
            首页
            <div slot="right">
            返回
            </div>
          </rs-list-item>
        </rs-list>
        <h5>
          边框：noborder {Boolean} ，默认有底部边框线<br/>
          例如：
          <pre>
&lt;rs-list border size="14"&gt;
  &lt;rs-list-item&gt;页眉&lt;/rs-list-item&gt;
  &lt;rs-list-item&gt;点赞&lt;/rs-list-item&gt;
  &lt;rs-list-item&gt;页脚&lt;/rs-list-item&gt;
&lt;/rs-grid&gt;
          </pre>
        </h5>
        <rs-list size="14" noborder>
          <rs-list-item>
            <span slot="left" class="mui-icon mui-icon-person"></span>
            首页
            <div slot="right">
            返回
            </div>
          </rs-list-item>
          <rs-list-item noborder>
            <span slot="left" class="mui-icon mui-icon-person"></span>
            首页
            <div slot="right">
            返回
            </div>
          </rs-list-item>
        </rs-list>
        <h5>
          左侧是图片左右格式：
          例如：
          <pre>
&lt;rs-list size="14"&gt;
  &lt;rs-medialist-item&gt;
    &lt;img slot="left" src="../assets/logo.png"&gt;
    幸福
  &lt;/rs-medialist-item&gt;
  &lt;rs-medialist-item&gt;
    &lt;img slot="left" src="../assets/logo.png"&gt;
    幸福
  &lt;/rs-medialist-item&gt;
&lt;/rs-grid&gt;
          </pre>
        </h5>
        <rs-list size="14">
          <rs-medialist-item isright>
            <img slot="left" src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg">
            幸福
            <p class="mui-ellipsis" style="margin-bottom:0">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </rs-medialist-item>
          <rs-medialist-item isright>
            <img slot="left" src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg">
            幸福
            <p class="mui-ellipsis" style="margin-bottom:0">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </rs-medialist-item>
        </rs-list>  
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'listItem',
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
