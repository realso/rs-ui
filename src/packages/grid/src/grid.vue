<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9" :class="['rs-grid-' + type,{'rs-grid-border':border}]">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * rs-grid
 * @module components/grid
 * @desc 九宫格
 * @param type {string} [type=default] - 显示类型，接受 default(浅灰), gary（深灰）, white（白色）
 * @param border {boolean} [border=false] - 有无边框 默认有边框
 *
 * @example
 * <rs-grid type="default" border=true>
 *    <rs-grid-item>
 *      <span slot="icon" class="mui-icon mui-icon-home"></span>
 *      内容A
 *    </rs-grid-item>
 *    <rs-grid-item>
 *      <span slot="icon" class="mui-icon mui-icon-home"></span>
 *      内容B
 *    </rs-grid-item>
 * </rs-grid>
 */
export default {
  name: 'rs-grid',
  props: {
    border: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'gary',
          'white'
        ].indexOf(value) > -1
      }
    }
  }
}
</script>
<style lang="postcss">
@component-namespace rs {
    @component grid {
      @descendent border {
        border: none !important;
        .mui-table-view-cell {
          border-right: none !important;
          border-bottom: none !important;
        }
      }
      @descendent default {
        background: #f2f2f2 !important;
      }
      @descendent gary {
        background: #ccc !important;
      }
      @descendent white {
        background: #fff !important;
      }
    }
  }
</style>
