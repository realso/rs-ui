<template>
  <div style="padding: 10px 10px;">
    <div class="rs-navbar"
      :class="['rs-navbar-'+ color ,{'is-inverted': !inverted}]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * rs-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {*} selected - 返回 item component 传入的 value
 * @param inverted {boolean} [inverted] - 选项卡是否是按钮样式，默认不是按钮样式
 * @param color {string} [color=primary] - 显示类型，接受 default(默认), primary, danger,success,white,grey
 * 
 * @example
 * <rs-navbar :selected.sync="selected" color="primary">
 *   <rs-nav-item>
 *     订单
 *   </rs-nav-item>
 * </rs-navbar>
 *
 */
export default {
  name: 'rs-navbar',
  props: {
    fixed: Boolean,
    inverted: Boolean,
    value: {},
    color: {
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
    }
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component navbar {
      font-size: 15px;
      font-weight: 400;
      position: relative;
      display: table;
      overflow: hidden;
      width: 100%;
      table-layout: fixed;
      border: 1px solid #58cffa;
      border-radius: 3px;
      background-color: transparent;
      -webkit-touch-callout: none;
      @when inverted {
        width: 100%;
        border: 0;
        border-radius: 0;
        .rs-navbar-item{
          color: inherit;
          border: 0;
        }
        .rs-navbar-item.is-active{
          color: #58cffa;
          border-bottom: 2px solid #58cffa;
          background: none;
        }
      }
      @descendent primary {
        border: 1px solid #58cffa;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #58cffa;
            border-bottom: 2px solid #58cffa;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #58cffa;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #fff;
          background-color: #58cffa;
        }
      }
      @descendent danger {
        border: 1px solid #dd524d;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #dd524d;
            border-bottom: 2px solid #dd524d;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #dd524d;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #fff;
          background-color: #dd524d;
        }
      }
      @descendent success {
        border: 1px solid #4cd964;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #4cd964;
            border-bottom: 2px solid #4cd964;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #4cd964;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #fff;
          background-color: #4cd964;
        }
      }
      @descendent warning {
        border: 1px solid #f0ad4e;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #f0ad4e;
            border-bottom: 2px solid #f0ad4e;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #f0ad4e;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #fff;
          background-color: #f0ad4e;
        }
      }
      @descendent white {
        border:1px solid #fff;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #333;
            border-bottom: 2px solid #fff;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #333;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #333;
          background-color: #fff;
        }
      }
      @descendent grey {
        border: 1px solid #c7c7cc;
        @when inverted {
          .rs-navbar-item.is-active{
            color: #c7c7cc;
            border-bottom: 2px solid #c7c7cc;
            background: none;
          }
        }
        .rs-navbar-item{
          color: #c7c7cc;
          border-color: inherit;
        }
        .rs-navbar-item.is-active{
          color: #fff;
          background-color: #c7c7cc;
        }
      }
    }
  }
</style>
