<template>
  <button
    :type="nativeType"
    class="mui-btn"
    :class="['mui-btn-' + type, 'rs-button--' + size, icon,{
      'mui-btn-outlined': outlined,'mui-btn-link': link
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
 * @param type {string} [type=default] - 显示类型，接受 default, primary, danger,success,white
 * @param outlined {boolean} [outlined=false] - 有无底色 默认有底色
 * @param disabled {boolean} [disabled=false] - 禁用 默认不禁用
 * @param size {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param icon {string} [icon] - 图标，例如mui-icon-home或者自定义的图标
 * @param slot {slot} - 显示文本
 * @param link {boolean} [link=false] - 是否是文字按钮 默认为无文字按钮
 *
 * @example
 * <rs-button type="primary" outlined="false" size="large" icon="mui-icon mui-icon-home" link="true">按钮</rs-button>
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
          'white'
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
    @component button {
      @modifier large {
        display: block;
        width: 100%;
      }
      @modifier normal {
        display: inline-block;
        padding: 0 12px;
      }
      @modifier small {
        display: inline-block;
        font-size: 14px;
        padding: 0 12px;
        height: 33px;
      }
    }
  }
  @component-namespace mui {
    @component btn {
      @descendent white {
        background: #fff;
      }
    }
  }
</style>
