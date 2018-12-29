<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="复选框checkBox" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" href="/"></a> 
    </rs-header>
	<div class="mui-content">
      <div class="mui-content-padded">
        <h5>
          name {string} [name=default] - <br/>
          disabled {boolean} [disabled] - 禁用 默认不禁用<br/>
          value {string}  - 选中值的数组<br/>
          left {boolean} 对齐位置，默认右对齐，加上left复选框在左侧对齐<br/>
          color {string} 选中的颜色，默认primary（蓝色），接受改变primary（蓝色），danger（红色）,success（绿色）,warning(黄色),white（白色）,grey（灰色）<br/>
          例如：
          <pre>
&lt;rs-checkbox v-model="checked" name="name1"&gt;
  复选框
&lt;/rs-checkbox&gt;
          </pre>
        </h5>
        <!-- <rs-checkbox v-model="checked" name="name1">复选框</rs-checkbox>
        <rs-checkbox v-model="checked1" name="name1" color="success">复选框</rs-checkbox> -->
        <rs-checkbox v-model="checked2" name="name1" color="white">复选框</rs-checkbox>
        <rs-checkbox v-model="checked3" name="name1" color="white" disabled>复选框</rs-checkbox>
        <rs-checkbox v-model="checked4" name="name1" disabled>复选框</rs-checkbox>
        <rs-checkbox v-model="checked5" name="name1" left>复选框</rs-checkbox>
        <rs-checkbox v-model="checked6" disabled name="name1" left>复选框</rs-checkbox>
        <rs-checklist v-model="checked" name="name2" shape="markempty" color="success" :items="items" left>
        </rs-checklist>
        {{checked}}
      </div>
    </div>  
  </div>
</template>
<script>
export default {
    name: 'checkbox',
    data (){
      return {
        checked: [],
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        items: [
          '苹果',
          '梨子',
          '橘子'
        ]
      }
    },
    methods:{
    }
}
</script>
<style scoped>
h5{margin-top: 10px}
</style>
