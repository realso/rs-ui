<template>
  <nav class="mui-bar mui-bar-tab">
    <slot></slot>
  </nav>
</template>

<script>
/**
 * rs-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {*} value - 返回 item component 传入的 id
 *
 * @example
 * <rs-tabbar v-model="selected">
 *   <rs-tab-item id="首页">
 *     <span slot="icon" class="mui-icon mui-home"></span>
 *     <span slot="label">首页</span>
 *   </rs-tab-item>
 * </rs-tabbar>
 *
 * <rs-tabbar v-model="selected">
 *   <rs-tab-item :id="['传入数组', '也是可以的']">
 *     <span slot="icon" class="mui-icon mui-home"></span>
 *     <span slot="label">首页</span>
 *   </rs-tab-item>
 * </rs-tabbar>
 */
export default {
  name: 'rs-tabbar',
  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>