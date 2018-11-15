<template>
  <a class="mui-tab-item"
    :class="{ 'mui-active': ($parent.value === id)&!button }">
    <div v-if="button !== true" @click="$parent.$emit('input', id)">
      <span :class="icon"><span class="mui-badge" v-if="badge" v-text="badge"></span></span>
      <span class="mui-tab-label"><slot name="label"></slot></span>
    </div>
    <slot v-if="button == true"></slot>
  </a>
</template>

<script>
/**
 * rs-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {icon} [icon="mui-icon mui-icon-email"] - icon 图标
 * @param {button} [button=false] - 底部悬浮是否是按钮样式，默认不是按钮
 * @param {badge} [badge=9] - 选项卡消息提示的个数，默认不显示
 * @param {slot} - 文字
 *
 * @example
 * <rs-tab-item icon="mui-icon mui-home" badge=9>
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
    button: Boolean,
    icon: String,
    badge: String
  }
}
</script>
