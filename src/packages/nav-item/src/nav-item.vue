<template>
  <a class="rs-navbar-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-active': $parent.value === id }">
    <slot></slot>
  </a>
</template>

<script>
/**
 * rs-nav-item
 * @module components/nav-item
 * @desc 搭配 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} - 文字
 *
 * @example
 * <rs-nav-item>
 *   订单
 * </rs-nav-item>
 */
export default {
  name: 'rs-nav-item',
  props: ['id']
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component navbar {
      @descendent item {
        line-height: 30px;
        display: table-cell;
        overflow: hidden;
        width: 1%;
        transition: background-color .1s linear;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #58cffa;
        border-color: #58cffa;
        border-left: 1px solid #58cffa;
        &:first-child{
          border-left-width: 0;
        }
        @when active{
          color: #fff;
          background-color: #58cffa;
        }
      }
    }
  }
</style>      
