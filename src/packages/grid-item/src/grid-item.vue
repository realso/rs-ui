<template>
  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link :to="{path}">
        <slot name="icon"></slot>
        <div class="mui-media-body"><slot></slot></div>
      </router-link>
    </li>
</template>
<script>
/**
 * rs-grid-item
 * @desc 搭配 grid 使用
 * @module components/rs-grid-item
 *
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 * @param to {String} [String] -
 *
 * @example
 * <rs-grid>
 *   <rs-grid-item> 内容A </rs-grid-item>
 *   <rs-grid-item> 内容B </rs-grid-item>
 *   <rs-grid-item> 内容C </rs-grid-item>
 * </rs-grid>
 */
export default {
  name: 'rs-grid-item',
  props: {
    path: String
  }
}
</script>
