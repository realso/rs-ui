<template>
  <li class="mui-table-view-cell">
    <router-link :class="{'mui-navigate-right':isright}" :to="{path}">
      <slot name="left" class="mui-media-object mui-pull-left"></slot>
      <div class="mui-media-body">
        <slot></slot>
      </div>
    </router-link>
  </li>
</template>
<script>
/**
 * rs-medialist-item
 * @desc 搭配 list 使用
 * @module components/rs-medialist-item
 *
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 * @param to {String} [String] -
 *
 * @example
 * <rs-list>
 *   <rs-medialist-item>
 *      <img slot="left" class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
        幸福
        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
 *   </rs-medialist-item>
 *   <rs-medialist-item> 内容B </rs-medialist-item>
 *   <rs-medialist-item> 内容C </rs-medialist-item>
 * </rs-list>
 */
export default {
  name: 'rs-medialist-item',
  props: {
    isright: Boolean,
    path: String
  }
}
</script>
