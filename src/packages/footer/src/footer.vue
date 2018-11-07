<template>
  <footer class="r-fixed-b rs-tab-b2">
    
  </footer>
</template>

<script>
/**
 * rs-footer
 * @module components/footer
 * @desc 顶部导航
 * @param {string} [title] - 标题
 * @param {string} [color] -导航的背景颜色默认灰色 接受 primary(蓝色), white(白色)
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <rs-footer title="我是标题" color="primary">
 *   <a slot="left" class="mui-icon mui-icon-left-nav mui-pull-left c-fff" @click="handleBack"></a>
 *   <rs-button slot="right">更多</rs-button>
 * </rs-footer>
 */
export default {
  name: 'rs-footer',
  props: {
    title: String,
    color: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
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
      color: #fff;
      box-shadow: none;
      -webkit-box-shadow: none;
      @descendent white {
        background: #fff;
      }
      @descendent primary {
        background: #58cffa;
      }
      @descendent title {
        color: #fff;
      }
    }
  }
</style>
