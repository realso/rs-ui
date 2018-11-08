<template>
  <vue-scrollbar classes="my-scrollbar" v-bind:speed=100 >
    <div class="should-have-a-children scroll-me">
      <slot></slot>
    </div>
  </vue-scrollbar>
</template>

<script>
/**
 * rs-scroll
 * @module components/scroll
 * @desc 滚动区域
 *
 * @example
 * <rs-scroll>
 *   <rs-button>更多</rs-button>
 * </rs-scroll>
 */
import vueScrollbar from 'vue-scrollbar';

export default {
  name: 'rs-scroll',
  components: { vueScrollbar },
  props: {}
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
