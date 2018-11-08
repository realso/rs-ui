<template>
  <a class="mui-tab-item"
    :class="{ 'mui-active': ($parent.value === id)&!button }">
    <div v-if="!button" @click="$parent.$emit('input', id)">
      <slot name="icon"></slot>
      <span class="mui-tab-label"><slot></slot></span>
    </div>
    <slot v-if="button"></slot>
  </a>
</template>

<script>
/**
 * rs-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <rs-tab-item button=false>
 *   <span slot="icon" class="mui-icon mui-home"></span>
 *   订单
 * </rs-tab-item>
 * <rs-tab-item button=true>
 * <rs-button>删除</rs-button>
 * </rs-tab-item>
 */
export default {
  name: 'rs-tab-item',
  props: {
    id: String,
    button: Boolean
  }
}
</script>
