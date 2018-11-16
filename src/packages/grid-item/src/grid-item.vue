<template>
  <li class="rs-gridItem mui-col-xs-4 mui-col-sm-3" @click="Click()">
      <a>
        <slot name="icon"></slot>
        <div class="rs-grid-title"><slot></slot></div>
      </a>
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
 *   <rs-grid-item @click.native="Click()"> 内容A </rs-grid-item>
 *   <rs-grid-item @click.native="Click()"> 内容B </rs-grid-item>
 *   <rs-grid-item @click.native="Click()"> 内容C </rs-grid-item>
 * </rs-grid>
 */
export default {
  name: 'rs-grid-item',
  props: {
    path: String
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
    @component gridItem {
      margin: 0;
      padding: 11px 15px;
      vertical-align: top;
      text-align: center;
      float: left;
      .rs-grid-title{
        font-size: 15px;
        line-height: 15px;
        display: block;
        width: 100%;
        height: 15px;
        text-overflow: ellipsis;
        color: #333;
      }
    }
  }
</style>
