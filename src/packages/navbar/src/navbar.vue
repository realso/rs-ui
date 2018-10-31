<template>
  <div style="padding: 10px 10px;">
    <div class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * rs-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <rs-navbar :selected.sync="selected">
 *   <rs-nav-item>
 *     订单
 *   </rs-nav-item>
 * </rs-navbar>
 *
 */
export default {
  name: 'rs-navbar',
  props: {
    fixed: Boolean,
    value: {}
  }
}
</script>
