<template>
  <li class="rs-listItem" @click="Click()" :class="{'rs-listItem-noborder':noborder}">
    <a :class="{'mui-navigate-right':isright}">
      <span class="rs-listItem-right" :style="{'margin-right:15px':isright}"><slot name="right"></slot></span>
      <slot></slot>
    </a>
  </li>
</template>
<script>
/**
 * rs-list-item
 * @desc 搭配 list 使用
 * @module components/rs-list-item
 *
 * @param isright {boolean} [isright] - 右侧箭头 默认无右侧箭头
 * @param noborder {boolean} [noborder] - 底部边框 默认有底部边框
 *
 * @example
 * <rs-list>
 *   <rs-list-item @click.native="click" noborder> 内容A </rs-list-item>
 *   <rs-list-item> 内容B </rs-list-item>
 *   <rs-list-item> 内容C </rs-list-item>
 * </rs-list>
 */
export default {
  name: 'rs-list-item',
  props: {
    isright: Boolean,
    noborder: Boolean
  },
  methods: {
    Click (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="postcss">
@component-namespace rs {
  @component listItem {
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    @descendent right {
      float: right;
    }
    &:after{
      position: absolute;
      right: 0;
      bottom: 0;
      left: 15px;
      height: 1px;
      content: '';
      transform: scaleY(.5);
      background-color: #c8c7cc;
    }
    @descendent noborder {
      &:after{height: 0}
    }
  }
}
</style>
