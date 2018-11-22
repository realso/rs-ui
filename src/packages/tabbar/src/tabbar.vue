<template>
  <nav class="rs-tabbar">
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
 *   <rs-tab-item id="工作台" icon="mui-icon mui-icon-home" button=false>
 *     <span slot="label">工作台</span>
 *   </rs-tab-item>
 * </rs-tabbar>
 */
export default {
  name: 'rs-tabbar',
  props: {
    fixed: Boolean,
    value: {}
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component tabbar {
      position: fixed;
      z-index: 10;
      right: 0;
      left: 0;
      background-color: #f7f7f7;
      box-shadow: 0 0 1px rgba(0, 0, 0, .85);
      backface-visibility: hidden;
      bottom: 0;
      display: table;
      width: 100%;
      height: 50px;
      padding: 0;
      table-layout: fixed;
      -webkit-touch-callout: none;  
    }
  }
</style>

