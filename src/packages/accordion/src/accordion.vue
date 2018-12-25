<template>
  <div class="rs-accordion" :class="active?'is-active':''">
    <a class="rs-accordion-header rs-accordion-right" :class="active?'is-up':'is-down'" @click="show">
      <slot name="header"></slot>
    </a>
    <div class="rs-accordion-content" v-show="active">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
/**
 * rs-accordion
 * @module components/accordion
 * @desc 折叠面板
 * @param 
 *
 * @example
 * <rs-accordion>按钮</rs-accordion>
 */
export default {
  name: 'rs-accordion',
  data () {
    return {
      active: false
    }
  },
  methods: {
    show () {
      this.active = !this.active
    }
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component accordion {
      position: relative;
      overflow: hidden;
      padding: 11px 15px;
      background: #fff;
      @when active{
        background: #eee;
      }
      @descendent header {
        position: relative;
        display: block;
        overflow: hidden;
        margin: -11px -15px;
        padding: inherit;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: inherit;
      }
      @descendent right {
        &:after{
          font-family: Muiicons;
          font-size: inherit;
          line-height: 1;
          position: absolute;
          top: 50%;
          display: inline-block;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          text-decoration: none;
          color: #bbb;
          -webkit-font-smoothing: antialiased;
          right: 15px;
          content: '\e583';
        }
        @when up{
          &:after{
            content: '\e580';
          }
        }
        @when down{
          &:after{
            content: '\e581';
          }
        }
      }
      @descendent content {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 11px -15px -11px;
        padding: 8px 15px;
        -webkit-transition: height .35s ease;
        -o-transition: height .35s ease;
        transition: height .35s ease;
        background: #fff;
        font-size: 14px;
      }
      
    }
  }
</style>
