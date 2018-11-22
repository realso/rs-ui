<template>
  <a class="rs-tabbar-item"
    :class="{ 'is-active': ($parent.value === id)&&(!button) }">
    <div v-if="!button" @click="$parent.$emit('input', id)">
      <span class="rs-tabbar-icon" :class="icon"><span class="mui-badge" v-if="badge" v-text="badge"></span></span>
      <span class="rs-tabbar-label"><slot name="label"></slot></span>
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
 * @param {icon} [icon="mui-icon mui-icon-email"] - icon 图标
 * @param {button} [button] - 底部悬浮是否是按钮样式，默认不是按钮
 * @param {badge} [badge=9] - 选项卡消息提示的个数，默认不显示
 * @param {slot} - 文字
 *
 * @example
 * <rs-tab-item icon="mui-icon mui-home" badge=9>
 *   订单
 * </rs-tab-item>
 * <rs-tab-item button>
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
<style lang="postcss">
  @component-namespace rs {
    @component tabbar {
      @descendent item {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
        @when active {
          color: #58cffa;
        }
      }
      @descendent icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
        &:active
        {
          background: none;
        }
      }
      @descendent label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
