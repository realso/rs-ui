<template>
  <a class="mui-control-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'mui-active': $parent.value === id }">
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
