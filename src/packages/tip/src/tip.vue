<template>
  <div class="rs-tip">
    <div class="rs-tip-title"><slot name="title"></slot></div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * rs-tip
 * @module components/tip
 * @desc 提示
 *
 * @example
 * <rs-button type="primary" outlined="false" size="large" icon="mui-icon mui-icon-home" link="true">按钮</rs-button>
 */
export default {
  name: 'rs-tip',
  methods: {},
  props: {}
}
</script>
<style lang="postcss">
@component-namespace rs {
    @component tip {
      padding: 11px 15px;
      background: #fff;
      font-size: 14px;
      @descendent title {
        font-size: 15px;
        margin-bottom: 5px;
      }
    }
  }
</style>
