<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="底部选项卡tabbar" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a>
      <div slot="right">
        <rs-button link @click="save">保存</rs-button>
      </div>
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          选项卡选中的值：selected - 返回 item component 传入的 value<br/>
          icon 图标: {icon} [icon="mui-icon mui-icon-email"]<br/>
          button 底部按钮: {button} [button] - 底部悬浮是否是按钮样式，默认不是按钮<br/>
          badge 选项卡消息提示: {badge} [badge=9] - 选项卡消息提示的个数，默认不显示<br/>
          例如：
          <pre>
&lt;rs-tabbar v-model="selected"&gt;
  &lt;rs-tab-item id="工作台" icon="mui-icon mui-icon-home" badge=9
  &gt;页眉&lt;/rs-tab-item&gt;
  &lt;rs-tab-item id="3" button&gt;&lt;rs-button size="large" type="danger"&gt;取消&lt;/rs-button&gt;&lt;/rs-tab-item&gt;
&lt;/rs-navbar&gt;
          </pre>
        </h5>
        <rs-tab-container v-model="selected">
          <rs-tab-container-item id="工作台">
            工作台
          </rs-tab-container-item>
          <rs-tab-container-item id="报表查询">
            <rs-numInput height='24' :value.sync="mlex" size='14'></rs-numInput>
          </rs-tab-container-item>
        </rs-tab-container>
        <rs-tabbar v-model="selected">
          <rs-tab-item id="工作台" icon="mui-icon mui-icon-home">
            <span slot="label">工作台</span>
          </rs-tab-item>
          <rs-tab-item id="报表查询" icon="mui-icon mui-icon-home">
            <span slot="label">报表查询</span>
          </rs-tab-item>
        </rs-tabbar>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'tabbar',
    data (){
      return {
        selected: '工作台',
        mlex: 0
      }
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
