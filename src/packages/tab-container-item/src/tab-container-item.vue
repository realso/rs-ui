<template>
  <div
    class="mui-control-content" :class="{ 'mui-active': $parent.swiping || id === $parent.currentActive }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * rs-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <rs-tab-container v-model="selected">
 *   <rs-tab-container-item id="1"> 内容A </rs-tab-container-item>
 *   <rs-tab-container-item id="2"> 内容B </rs-tab-container-item>
 *   <rs-tab-container-item id="3"> 内容C </rs-tab-container-item>
 * </rs-tab-container>
 */
export default {
  name: 'rs-tab-container-item',
  props: ['id']
}
</script>
