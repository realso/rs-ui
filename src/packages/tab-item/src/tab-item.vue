<template>
  <a class="mui-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'mui-active': $parent.value === id }">
    <slot name="icon"></slot>
    <span class="mui-tab-label"><slot></slot></span>
  </a>
</template>

<script>
/**
 * rs-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <rs-tab-item>
 *   <span slot="icon" class="mui-icon mui-home"></span>
 *   订单
 * </rs-tab-item>
 */
export default {
  name: 'rs-tab-item',
  props: ['id']
};
</script>