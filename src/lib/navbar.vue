<template>
    <header class="mui-bar mui-bar-transparent">
			<a @click="narbar()" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left {'mui-hidden':ISSHOWLEFT===0}"></a>
			<h1 class="mui-title">{{navTile}}</h1>
      <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right {'mui-hidden':item.isshow===0}" :key="item.id" v-for="item in buttons" @click="{itme.click}">{{item.name}}</button>
		</header>
</template>

<script>
export default {
  name: 'rs-navbar',   // 这里需要注意下，我们是采用的全局注入我们的组件，所以在后面因为我们的组件后，会直接使用这个命名的标签
  props: ['navTile','ISSHOWLEFT','buttons'],
  components: {
  },
  methods: {
    narbar () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
</style>    
