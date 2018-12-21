<template>
  <ul class="rs-checklist" :class="[{'rs-list-noborder':noborder}]">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * rs-checklist
 * @module components/checklist
 * @desc 九宫格
 * @param type {string} [type=default] - 显示背景，接受 default(浅灰), grey（灰白色）, white（白色）
 * @param noborder {boolean} [noborder] - 有无边框 默认有边框
 *
 * @example
 * <rs-checklist noborder>
 *    <rs-checkbox>
 *      香蕉
 *    </rs-checkbox>
 *    <rs-checkbox>
 *      苹果
 *    </rs-checkbox>
 * </rs-grid>
 */
export default {
  name: 'rs-checklist',
  props: {
    noborder: Boolean,
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
    @component checklist {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      background-color: #fff;
      &:before,&:after,.rs-checkbox:after{
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
      &:after,.rs-checkbox:after{
        bottom: 0;
      }
      .rs-checkbox:after{
        left: 15px;
      }
      @descendent noborder {
        &:before,&:after{height: 0}
      } 
    }
  }
</style>
