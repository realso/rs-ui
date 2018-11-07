<template>
  <div class="mui-card">
    <div v-show="type==='header'||type==='default'" class="mui-card-header">
      <slot name="header"></slot>
    </div>
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <slot name="content"></slot>
      </div>
    </div>
    <div v-show="type==='footer'||type==='default'" class="mui-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
/**
 * rs-card
 * @module components/card
 * @desc 九宫格
 * @param type {string} [type=default] - 显示类型，接受 default页眉页脚都有,content只有中间部分,header有页眉, footer有页脚
 *
 * @example
 * <rs-card type="default">
 *      <span slot="header">页眉</span>
 *      <span slot="content">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</span>
 *      <span slot="footer">页脚</span>
 * </rs-card>
 */
export default {
  name: 'rs-card',
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'content',
          'header',
          'footer'
        ].indexOf(value) > -1
      }
    }
  }
}
</script>
