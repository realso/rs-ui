<template>
<div>
  <rs-header title="我的一天" color="primary">
    <router-link slot="left" :to="{path}"><span @click="handleBack" class="mui-icon mui-icon-left-nav mui-pull-left"></span></router-link>
  </rs-header>
  <div class="mui-content">
  <rs-list>
    <rs-list-item isright="true">
      <span slot="left" class="mui-icon mui-icon-person"></span>
        首页
      <div slot="right">返回</div>
    </rs-list-item>
  </rs-list>
  <rs-list>
    <rs-medialist-item isright="true">
      <img slot="left" class="mui-media-object mui-pull-left" src="../assets/logo.png">
      幸福
    </rs-medialist-item>
  </rs-list>
  </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      selected: '我的',
      tabbar: '工作台',
      path: ''
    }
  },
  components: {},
  created () {

  },
  methods: {
    handleBack () {
      console.log('0')
      this.MessageBox.confirm('确定执行此操作?').then(action => {
        console.log('1')
      })
    }
  }
}
</script>
