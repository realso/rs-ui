<template>
  <li class="mui-table-view-cell">
    <router-link :class="{'mui-navigate-right':isright}" :to="{path}">
      <slot name="right"></slot>
      <slot></slot>
    </router-link>
  </li>
</template>
<script>
/**
 * rs-list-item
 * @desc 搭配 list 使用
 * @module components/rs-list-item
 *
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 * @param to {String} [String] -
 *
 * @example
 * <rs-list>
 *   <rs-list-item> 内容A </rs-list-item>
 *   <rs-list-item> 内容B </rs-list-item>
 *   <rs-list-item> 内容C </rs-list-item>
 * </rs-list>
 */
export default {
  name: 'rs-list-item',
  props: {
    isright: Boolean,
    path: String
  }
}
</script>
