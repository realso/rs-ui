<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>
<script>
/**
 * rs-swipe-item
 * @desc 搭配 swipe 使用
 * @module components/rs-swipe-item
 *
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 * @param to {String} [String] -
 *
 * @example
 * <rs-swipe>
 *   <rs-swipe-item> 内容A </rs-swipe-item>
 *   <rs-swipe-item> 内容B </rs-swipe-item>
 *   <rs-swipe-item> 内容C </rs-swipe-item>
 * </rs-swipe>
 */
export default {
  name: 'rs-swipe-item'
}
</script>
