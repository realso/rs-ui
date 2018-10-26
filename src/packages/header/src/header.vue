<template>
  <header class="mui-bar mui-bar-transparent">
    <slot name="left"></slot>
    <h1 class="mui-title" v-text="title"></h1>
    <div class="mui-pull-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * rs-header
 * @module components/header
 * @desc 顶部导航
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <rs-header title="我是标题">
 *   <a slot="left" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="handleBack"></a>
 *   <rs-button slot="right">更多</rs-button>
 * </rs-header>
 */
export default {
  name: 'rs-header',
  props: {
    title: String
  }
};
</script>

<style lang="css"></style>