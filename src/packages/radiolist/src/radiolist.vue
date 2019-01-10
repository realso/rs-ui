<template>
  <div class="rs-radiolist">
    <div class="rs-radiolist-radiobox" 
    v-for="(item,index) in items" :key="index"
    :class="[{'is-left':left,'is-checked':item.value==currentValue,'is-disabled':disabled},'rs-radiolist-'+ color]" 
    @change="$emit('change', currentValue)">
      <label class="rs-radiolist-label" :class="{'is-disabled':disabled}">{{item.label}}</label>
      <input type="radio"
      class="rs-radiolist-radio"
      :class="[{'is-disabled':disabled}]" 
      :name="name"
      :disabled="disabled"
      v-model="currentValue"
      :value="item.value">
    </div>
  </div>
</template>

<script>
/**
 * rs-radiolist
 * @module components/radiolist
 * @desc 九宫格
 * @param type {string} [type=default] - 显示背景，接受 default(浅灰), grey（灰白色）, white（白色）
 * @param noborder {boolean} [noborder] - 有无边框 默认有边框
 *
 * @example
 * <rs-radiolist v-model="checked" name="name2" color="success" :items="items">
 * </rs-radiolist>
 */
export default {
  name: 'rs-radiolist',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    value: String,
    name: String,
    disabled: Boolean,
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
      if(this.disabled) return false;
      this.$emit('input', val);
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
    @component radiolist {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      background-color: #fff;
      @descendent radiobox {
        position: relative;
        display: inline-block;
        padding-right: 30px;
        margin-right: 10px;
        &::before{
          position: absolute;
          top: 4px;
          right: 0;
          font-family: Muiicons;
          font-size: 28px;
          font-weight: normal;
          line-height: 1;
          text-decoration: none;
          color: #aaa;
          border-radius: 0;
          background: none;
          -webkit-font-smoothing: antialiased;
          content: '\e411';
        }
        @when checked {
          &::before{
            content: '\e441';
            color: #58cffa;
          }
        }
        @when disabled {
          &::before,&:checked:before{
            color: #c8c9cc !important;
          }
        }
        @when left {
          text-align: left;
          right: 0;
          padding-left: 30px;
          padding-right: 0;
          &::before{
            left: 0;
            right: auto;
          }
        }
      }
      @descendent label {
        display: inline-block;
        float: none;
        width: 100%;
        line-height: 1.1;
        @when disabled {
          color: #c8c9cc;
        }
      }
      @descendent radio{
        position: absolute;
        top: 4px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 33px;
        border: 0;
        outline: 0 !important;
        background-color: transparent;
        -webkit-appearance: none;
        text-align: right;
        overflow: hidden;
      }
      @descendent primary {
        @when checked {
          &::before{
            color: #58cffa;
          }
        }
      }
      @descendent danger {
        @when checked {
          &::before{
            color: #dd524d;
          }
        }
      }
      @descendent success {
        @when checked {
          &::before{
            color: #4cd964;
          }
        }
      }
      @descendent warning {
        @when checked {
          &::before{
            color: #f0ad4e;
          }
        }
      }
      @descendent white {
        @when checked {
          &::before{
            color: #fff;
          }
        }
      }
      @descendent grey {
        @when checked {
          &::before{
            color: #c7c7cc;
          }
        }
      }
    }
  }
</style>
