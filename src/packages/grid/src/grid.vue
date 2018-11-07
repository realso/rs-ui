<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9" :class="{'rs-grid-border':border}">
    <slot></slot>
  </ul>
</template>

<script>
/**
 * rs-grid
 * @module components/grid
 * @desc 九宫格
 * @param type {string} [type=default] - 显示类型，接受 default, primary, danger,success,white
 * @param border {boolean} [border=false] - 有无边框 默认有边框
 *
 * @example
 * <rs-grid type="primary" border=true>
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
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    border: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'danger',
          'success',
          'warning',
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
        .mui-table-view-cell {
          border-right: none;
          border-bottom: none;
        }
      }
    }
  }
</style>
