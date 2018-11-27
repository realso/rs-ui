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
            <rs-numInput height='24' v-model.lazy="mlex" :text="mlex|toFixed(2)" size='14'></rs-numInput>
            <rs-numInput height='24' :value.sync="mlex" size='14' :text="mlex|toFixed(2)"></rs-numInput>
          </rs-tab-container-item>
          <rs-tab-container-item id="报表查询">
            <rs-numInput height='24' v-model.lazy="mlex" :text="mlex|toFixed(2)" size='14'></rs-numInput>
            <rs-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</rs-button>
            <rs-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</rs-button>
            <rs-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</rs-button>
            <rs-button @click.native="open('picker4')" size="large">自定义模板</rs-button>
            <rs-button @click.native="open('picker5')" size="large">设定初始值</rs-button>
            <rs-datetime
              ref="picker1"
              v-model="value"
              :closeOnClickModal="false"
              @visible-change="handleVisibleChange"
              @confirm="handleChange">
            </rs-datetime>
            <rs-datetime
              ref="picker2"
              type="date"
              v-model="value2"
              @confirm="handleChange">
            </rs-datetime>
            <rs-datetime
              ref="picker3"
              type="time"
              v-model="value3"
              @confirm="handleChange">
            </rs-datetime>
            <rs-datetime
              ref="picker4"
              type="date"
              v-model="value4"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日"
              @confirm="handleChange">
            </rs-datetime>
            <rs-datetime
              ref="picker5"
              type="time"
              v-model="value5"
              @confirm="handleChange">
            </rs-datetime>
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
        mlex: 10,
        text: '10.00',
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      }
    },
    filters: {
      toFixed(value,cm){
        return parseFloat(value).toFixed(cm)
      }
    },
    methods:{
      text1(val) {
        this.text=parseFloat(val).toFixed(2)
      },
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.$toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
