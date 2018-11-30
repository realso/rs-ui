<template>
  <li class="rs-listMedia" :class="['rs-listMedia-'+size,{'rs-listMedia-noborder':noborder}]" @click="Click()">
    <a :class="{'mui-navigate-right':isright}">
      <span class="rs-listMedia-object rs-listMedia-left"><slot name="left"></slot></span>
      <div class="rs-listMedia-body">
        <slot></slot>
      </div>
    </a>
  </li>
</template>
<script>
/**
 * rs-medialist-item
 * @desc 搭配 list 使用
 * @module components/rs-medialist-item
 *
 * @param size {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param noborder {boolean} [noborder] - 底部边框 默认有底部边框
 * @param isright {boolean} [isright=true] - 禁用 默认不禁用
 *
 * @example
 * <rs-list>
 *   <rs-medialist-item @click.native="click" noborder>
 *      <img slot="left" class="mui-media-object mui-pull-left" src="../images/shuijiao.jpg">
        幸福
        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
 *   </rs-medialist-item>
 *   <rs-medialist-item> 内容B </rs-medialist-item>
 *   <rs-medialist-item> 内容C </rs-medialist-item>
 * </rs-list>
 */
export default {
  name: 'rs-medialist-item',
  props: {
    isright: Boolean,
    noborder: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  methods: {
    Click (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style lang="postcss">
@component-namespace rs {
    @component listMedia {
      position: relative;
      overflow: hidden;
      padding: 11px 15px;
      @descendent right {
        float: right;
        img{width:100%;height:100%;display: block;}
      }
      @descendent left {
        float: left;
        margin-right: 10px;
        img{width:100%;height:100%;display: block;}
      }
      @descendent body {
        overflow: hidden;
      }
      @descendent object {
        line-height: 42px;
        max-width: 42px;
        height: 42px;
      }
      &:after{
      position: absolute;
      right: 0;
      bottom: 0;
      left: 15px;
      height: 1px;
      content: '';
      transform: scaleY(.5);
      background-color: #c8c7cc;
      }
      @descendent noborder {
        &:after{height: 0}
      }
    }

  }
</style>
