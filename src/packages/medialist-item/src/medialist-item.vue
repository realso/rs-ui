<template>
  <li class="mui-table-view-cell" @click="Click()">
    <a :class="{'mui-navigate-right':isright}">
      <slot name="left" class="mui-media-object mui-pull-left"></slot>
      <div class="mui-media-body">
        <slot></slot>
      </div>
    </a>
  </li>
</template>
<script>
/**
 * rs-medialist-item
 * @desc 搭配 list 使用
 * @module components/rs-medialist-item
 *
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 *
 * @example
 * <rs-list>
 *   <rs-medialist-item @click.native="click">
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
  },
  methods: {
    Click (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
