<template>
  <ul class="rs-list" :class="['rs-font-' + size, {'rs-list-noborder':noborder}]">
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
 * @param noborder {Boolean} [noborder] - 边框，默认有边框
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
    noborder: Boolean,
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
  @component list {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
    a:not(.mui-btn){
      position: relative;
      display: block;
      overflow: hidden;
      margin: -11px -15px;
      padding: inherit;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: inherit;
    }
    &:before,&:after{
      position: absolute;
      right: 0;
      left: 0;
      height: 1px;
      content: '';
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background-color: #c8c7cc;
    }
    &:before{
      top: -1px;
    }
    &:after{
      bottom: 0;
    }
    @descendent noborder {
      &:before,&:after{height: 0}
    }
  }
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
