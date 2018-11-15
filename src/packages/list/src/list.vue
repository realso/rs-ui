<template>
  <ul class="mui-table-view" :class="['rs-font-' + size]">
    <slot></slot>
  </ul>
</template>
<script>
/**
 * rs-list
 * @module components/list
 * @desc 列表，依赖 list-item
 *
 * @param size {string} [size=14] - 尺寸，接受 12, 14, 16, 17
 * @example
 * <rs-list size="14">
 *   <rs-list-item>
 *     <span slot="left" class="mui-icon mui-icon-person"></span>
 *     首页
 *     <div slot="right">
 *        返回
 *     </div>
 *   </rs-list-item>
 * </rs-list>
 */
export default {
  name: 'rs-list',
  props: {
    size: String,
    default: '14',
    validator (value) {
      return [
        '12',
        '14',
        '15',
        '16'
      ].indexOf(value) > -1
    }
  }
}
</script>
<style lang="postcss">
@component-namespace rs {
    @component font {
      @descendent 12 {
        font-size: 12px;
      }
      @descendent 14 {
        font-size: 14px;
      }
      @descendent 15 {
        font-size: 15px;
      }
      @descendent 16 {
        font-size: 16px;
      }
    }
  }
</style>
