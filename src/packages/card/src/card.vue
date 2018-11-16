<template>
  <div class="rs-card">
    <div v-show="type==='header'||type==='default'" class="rs-card-header">
      <slot name="header"></slot>
    </div>
    <div class="rs-card-content">
      <div class="rs-card-content-inner">
        <slot name="content"></slot>
      </div>
    </div>
    <div v-show="type==='footer'||type==='default'" class="rs-card-footer">
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
<style lang="postcss">
@component-namespace rs {
    @component card {
      font-size: 14px;
      position: relative;
      overflow: hidden;
      margin: 10px;
      border-radius: 2px;
      background-color: white;
      background-clip: padding-box;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
      .rs-grid-title{
        font-size: 15px;
        line-height: 15px;
        display: block;
        width: 100%;
        height: 15px;
        text-overflow: ellipsis;
        color: #333;
      }
      @descendent header {
        position: relative;
        display: flex;
        min-height: 44px;
        padding: 10px 15px;
        -webkit-box-pack: justify;
          justify-content: space-between;
        -webkit-box-align: center;
          align-items: center;
      }
      @descendent footer {
        position: relative;
        display: flex;
        min-height: 44px;
        padding: 10px 15px;
        -webkit-box-pack: justify;
          justify-content: space-between;
        -webkit-box-align: center;
          align-items: center;
      }
      @descendent header{
        font-size: 17px;
        border-radius: 2px 2px 0 0;
        &:after{
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 1px;
          content: '';
          transform: scaleY(.5);
          background-color: #c8c7cc;
        }
      }
      @descendent footer{
        color: #6d6d72;
        border-radius: 0 0 2px 2px;
        &:after{
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          height: 1px;
          content: '';
          transform: scaleY(.5);
          background-color: #c8c7cc;
        }
      }
      @descendent content{
        font-size: 14px;
        position: relative;
        @descendent inner{
          position: relative;
          padding: 15px;
        }
      }
    }
  }
</style>
