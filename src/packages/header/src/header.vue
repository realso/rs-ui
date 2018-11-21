<template>
  <header class="rs-bar" :class="['rs-bar-' + color,{'rs-bar-transparent': transparent}]">
    <span class="rs-bar-left">
      <slot name="left"></slot>
    </span>
    <h1 class="rs-bar-title" v-text="title"></h1>
    <div class="rs-bar-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * rs-header
 * @module components/header
 * @desc 顶部导航
 * @param title {string} [title="我是标题"] - 标题
 * @param transparent {boolean} [transparent] - 导航是否是透明导航栏，默认不是透明
 * @param color {string} [color] -导航的背景颜色默认灰色 接受 primary(浅蓝色), blue(蓝色)， white(白色)
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <rs-header title="我是标题" color="primary" transparent>
 *   <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left c-fff" @click="handleBack"></a>
 *   <rs-button slot="right">更多</rs-button>
 * </rs-header>
 */
export default {
  name: 'rs-header',
  props: {
    title: String,
    transparent: Boolean,
    color: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'blue',
          'white'
        ].indexOf(value) > -1
      }
    }
  }
}
</script>

<style lang="postcss">
@component-namespace rs {
    @component bar {
      position: fixed;
      z-index: 10;
      right: 0;
      left: 0;
      height: 44px;
      padding-right: 10px;
      padding-left: 10px;
      border-bottom: 0;
      backface-visibility: hidden;
      box-shadow: 0 1px 6px #ccc;
      top: 0;
      display: block;
      color: #333;
      @descendent white {
        color: #333;
        background: #fff;
        a{
          color: #333;
          line-height:44px;
        }
      }
      @descendent primary {
        color: #fff;
        background: #58cffa;
        a{
          color: #fff;
          line-height:44px;
        }
      }
      @descendent blue {
        color: #fff;
        background: #29b1e8;
        a{
          color: #fff;
          line-height:44px;
        }
      }
      @descendent transparent {
        top: 0;
        background-color: rgba(247, 247, 247, 0);
        box-shadow: none;
      }
      @descendent left {
        float: left;
        height: 44px;
      }
      @descendent title {
        font-size: 17px;
        font-weight: 500;
        left: 40px;
        right: 40px;
        line-height: 44px;
        display: inline-block;
        overflow: hidden;
        width: auto;
        margin: 0;
        text-overflow: ellipsis;
        text-align: center;
        position: absolute;
        white-space: nowrap;
      }
    }
  }
</style>
