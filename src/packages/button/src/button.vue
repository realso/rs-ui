<template>
  <button
    :type="nativeType"
    class="mui-btn"
    :class="['mui-button-' + type, 'rs-btn-' + size, icon, {
      'mui-btn-outlined': outlined
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
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [outlined=false] - 有无底色
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，例如mui-icon-home或者自定义的图标
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <rs-button size="large" icon="mui-icon mui-icon-home" type="primary">按钮</rs-button>
 */
export default {
  name: 'rs-button',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    outlined: Boolean,
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'danger',
          'success',
          'warning'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>
<style lang="css">

</style>