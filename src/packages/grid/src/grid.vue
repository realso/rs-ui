<template>
  <ul class="rs-grid" :class="['rs-grid-' + type,{'rs-grid-border':border}]">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * rs-grid
 * @module components/grid
 * @desc 九宫格
 * @param type {string} [type=default] - 显示背景，接受 default(浅灰), grey（灰白色）, white（白色）
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
          'grey',
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
      font-size: 17px;
      display: block;
      width: 100%;
      white-space: normal;
      margin: 0;
      padding: 0;
      list-style: none;
      &:before,&:after{
        display: table;
        content: ' ';
      }
      &:after{
        clear: both;
      }
      @descendent border {
        border-top: 1px solid #eee;
        border-left: 1px solid #eee;  
        .rs-gridItem {
          border-right: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
      }
      @descendent default {
        background: #f2f2f2;
      }
      @descendent grey {
        background: #c7c7cc;
      }
      @descendent white {
        background: #fff;
      }
    }
  }
</style>
