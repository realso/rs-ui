<template>
	<div class="mui-layout">
    <div class="mui-content">
      <rs-list size="15">
        <rs-list-item v-for="(item, index) in navs" isright :key="index" @click.native="moveTo(item.path)">
          {{item.name}}
        </rs-list-item>
      </rs-list>
    </div>
	</div>
</template>

<script>
import navs from './nav.json'

export default {
  name: 'list',
  data () {
    return {
      navs: []
    }
  },
  created() {
  this.navs = navs
  },
  methods: {
    moveTo (path) {
      this.$router.push({path: path})
    }
  }
}	
</script>
