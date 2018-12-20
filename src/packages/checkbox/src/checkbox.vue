<template>
  <div class="rs-checkbox" @click="change">
    <label class="rs-checkbox-label" :class="{'is-left':left,'is-disabled':disabled}"><slot></slot></label>
    <input type="checkbox"
    class="rs-checkbox-check"
    :class="[{'is-left':left,'is-disabled':disabled},'rs-checkbox-'+ color]" 
    :name="name"  
    :disabled="disabled" 
    v-model="currentValue"
    :value="value">
  </div>
</template>

<script>
/**
 * rs-checkBox
 * @module components/CheckBox
 * @desc 复选框
 * @param label {string} [label="第一个选择"] - 
 * @param name {string} [name=default] - 
 * @param disabled {boolean} [disabled] - 禁用 默认不禁用
 * @param value {string}  - 选中值的数组
 * @param left {boolean} 对齐位置，默认右对齐，加上left复选框在左侧对齐
 * @param color {string} 选中的颜色，默认primary（蓝色），接受改变primary（蓝色），danger（红色）,success（绿色）,warning(黄色),white（白色）,grey（灰色）
 *
 * @example
 * <rs-button type="primary" size="large" icon="mui-icon mui-icon-home" link="true">按钮</rs-button>
 */
export default {
  name: 'rs-checkbox',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    label: String,
    name: String,
    disabled: Boolean,
    value: String,
    left: Boolean,
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
  },
  methods: {
    change: function(){
      if (this.disabled) return;
      this.value = !this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    }
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component checkbox {
      position: relative;
      @descendent label {
        display: inline-block;
        float: none;
        width: 100%;
        line-height: 1.1;
        padding: 11px 15px;
        padding-right: 58px;
        @when left {
          padding-right: 15px;
          padding-left: 58px;
        }
        @when disabled {
          color: #c8c9cc;
        }
      }
      @descendent check{
        position: absolute;
        top: 4px;
        right: 20px;
        display: inline-block;
        width: 28px;
        height: 26px;
        border: 0;
        outline: 0 !important;
        background-color: transparent;
        -webkit-appearance: none;
        &::before{
          content: '\e411';
          font-family: Muiicons;
          font-size: 28px;
          font-weight: normal;
          line-height: 1;
          text-decoration: none;
          color: #aaa;
          border-radius: 0;
          background: none;
          -webkit-font-smoothing: antialiased;
        }
        &:checked:before{
          content: '\e442';
          color: #58cffa;
        }
        @when left {
          left: 20px;
        }
        @when disabled {
          &::before,&:checked:before{
            color: #c8c9cc;
          }
        }
      }
      @descendent primary {
        &:checked:before{
          color: #58cffa;
        }
      }
      @descendent danger {
        &:checked:before{
          color: #dd524d;
        }
      }
      @descendent success {
        &:checked:before{
          color: #4cd964;
        }
      }
      @descendent warning {
        &:checked:before{
          color: #f0ad4e;
        }
      }
      @descendent white {
        &:checked:before{
          color: #fff;
        }
      }
      @descendent grey {
        &:checked:before{
          color: #c7c7cc;
        }
      }
    }
  }
</style>
