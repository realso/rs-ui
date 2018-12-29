<template>
  <ul class="rs-checklist" :class="[{'rs-list-noborder':noborder}]">
    <div class="rs-checklist-checkbox" @change="$emit('change', currentValue)" v-for="(item,index) in items" :key="index">
      <label class="rs-checklist-label" :class="{'is-left':left,'is-disabled':disabled}">{{item||item.value}}</label>
      <input type="checkbox"
      class="rs-checklist-check"
      :class="[{'is-left':left,'is-disabled':disabled},'rs-checkbox-'+ color,'rs-checkbox-'+shape]" 
      :name="name"
      :disabled="disabled"
      v-model="currentValue"
      :value="item||item.value">
    </div>
  </ul>
</template>

<script>
/**
 * rs-checklist
 * @module components/checklist
 * @desc 九宫格
 * @param type {string} [type=default] - 显示背景，接受 default(浅灰), grey（灰白色）, white（白色）
 * @param noborder {boolean} [noborder] - 有无边框 默认有边框
 *
 * @example
 * <rs-checklist v-model="checked" name="name2" shape="markempty" color="success" :items="items">
 * </rs-checklist>
 */
export default {
  name: 'rs-checklist',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    noborder: Boolean,
    items: {
      type: Array,
      required: true
    },
    value: Array,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'grey',
          'white'
        ].indexOf(value) > -1
      }
    },
    label: String,
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
    },
    shape: {
      type: String,
      default: 'mark',
      validator (value) {
        return [
          'mark',
          'markempty'
        ].indexOf(value) > -1
      }
    }  
  },
  methods: {
    change: function(){
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
    @component checklist {
      position: relative;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
      background-color: #fff;
      @descendent checkbox {
        position: relative;
      }
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
        width: 100%;
        height: 33px;
        border: 0;
        outline: 0 !important;
        background-color: transparent;
        -webkit-appearance: none;
        text-align: right;
        overflow: hidden;
        &::before{
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
          color: #58cffa;
        }
        @when left {
          text-align: left;
          right: 0;
          left: 20px;
        }
        @when disabled {
          &::before,&:checked:before{
            color: #c8c9cc !important;
          }
        }
      }
      @descendent mark {
        &::before{
          content: '\e411';
        }
        &:checked:before{
          content: '\e442';
        }
      }
      @descendent markempty {
        &:checked:before{
          content: '\e472';
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
      &:before,&:after,.rs-checklist-checkbox:after{
        position: absolute;
        right: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
      }
      &:before{
        top: -1px;
      }
      &:after,.rs-checklist-checkbox:after{
        bottom: 0;
      }
      .rs-checklist-checkbox:after{
        left: 15px;
      }
      @descendent noborder {
        &:before,&:after{height: 0}
      } 
    }
  }
</style>
