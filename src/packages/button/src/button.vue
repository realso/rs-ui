<template>
  <button
    :type="nativeType"
    class="rs-btn"
    :class="['rs-btn-' + type, 'rs-btn--' + size, icon,{
      'rs-btn-outlined': outlined,'rs-btn-link': link,'rs-disabled': disabled
    }]"
    @click="handleClick"
    :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
/**
 * rs-button
 * @module components/button
 * @desc 按钮
 * @param type {string} [type=default] - 显示类型，接受 default, primary, danger,success,white,grey
 * @param outlined {boolean} [outlined=false] - 有无底色 默认有底色
 * @param size {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param disabled {boolean} [disabled=false] - 禁用 默认不禁用
 * @param icon {string} [icon] - 图标，例如mui-icon-home或者自定义的图标
 * @param slot {slot} - 显示文本
 * @param link {boolean} [link=false] - 是否是文字按钮 默认为无文字按钮
 *
 * @example
 * <rs-button type="primary" size="large" icon="mui-icon mui-icon-home" link="true">按钮</rs-button>
 */
export default {
  name: 'rs-button',
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    outlined: Boolean,
    link: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'danger',
          'success',
          'warning',
          'white',
          'grey'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component btn {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42;
      position: relative;
      display: inline-block;
      margin-bottom: 0;
      padding: 6px 12px;
      cursor: pointer;
      transition: all;
      transition-timing-function: linear;
      transition-duration: .2s;
      text-align: center;
      vertical-align: top;
      white-space: nowrap;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 3px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: #fff;
      background-clip: padding-box;
      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute 0 0 0 0;
      }
      &:not(.rs-disabled):active::after {
        opacity: .4;
      }
      @descendent default {
        color: #333;
        border: 1px solid #ccc;
        background-color: #fff;
        &.rs-btn-outlined{
          color: #ccc;
        }
      }
      @descendent primary {
        color: #fff;
        border: 1px solid #58cffa;
        background-color: #58cffa;
        &.rs-btn-outlined{
          color: #58cffa;
        }
      }
      @descendent danger {
        color: #fff;
        border: 1px solid #dd524d;
        background-color: #dd524d;
        &.rs-btn-outlined{
          color: #dd524d;
        }
      }
      @descendent success {
        color: #fff;
        border: 1px solid #4cd964;
        background-color: #4cd964;
        &.rs-btn-outlined{
          color: #4cd964;
        }
      }
      @descendent warning {
        color: #fff;
        border: 1px solid #f0ad4e;
        background-color: #f0ad4e;
        &.rs-btn-outlined{
          color: #f0ad4e;
        }
      }
      @descendent white {
        background-color: #fff;
        border:1px solid #fff;
        &.rs-btn-outlined{
          color: #fff;
        }
      }
      @descendent grey {
        color: #fff;
        border: 1px solid #c7c7cc;
        background-color: #c7c7cc;
        &.rs-btn-outlined{
          color: #c7c7cc;
        }
      }
      @modifier large {
        font-size: 18px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
        padding: 15px 0;
      }
      @modifier normal {
        font-size: 14px;
        padding: 6px 12px;
      }
      @modifier small {
        font-size: 12px;
        padding: 0 6px;
        height: 33px;
      }
      @descendent outlined {
        background-color: transparent;
      }
      @descendent link {
        padding-top: 6px;
        padding-bottom: 6px;
        color: #58cffa;
        border: 0;
        background-color: transparent;
      }
      @when disabled {
        opacity: .6;
      }
    }
  }
</style>
