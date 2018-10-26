<template>
  <div style="padding: 10px 10px;">
    <div class="mui-segmented-control">
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
 *   <rs-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </rs-tab-item>
 * </rs-navbar>
 *
 * <rs-navbar :selected.sync="selected">
 *   <rs-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </rs-tab-item>
 * </rs-navbar>
 *
 */
export default {
  name: 'rs-navbar',
  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>