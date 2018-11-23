<template>
  <div class="rs-numInput" :style="{'height':height+'px','lineHeight':height+'px','fontSize':size+'px'}">
    <input ref="input" :style="{'opacity':ISINPUTSHOW==false ? '0':'1','lineHeight':height+'px','fontSize':size+'px'}" 
      @focus="ISINPUTSHOW=true,$event.target.select()" 
      @blur="ISINPUTSHOW=false" class="rs-numInput-input" 
      v-model="currentValue" />
    <div v-if="ISINPUTSHOW==false" class="rs-numInput-label">{{text}}</div>
  </div>
</template>

<script>
/**
 * rs-numInput
 * @desc 按钮
 * @param height {string} [height='24'] - 输入框的高度
 * @param size {string} [size='14'] - 尺寸，默认14
 * @param value {string} [:value.sync='mxzl'] - 绑定的字段
 * @param text {string} [:text='parseFloat(currentValue).toFixed(2)'] - 显示的表现方式

 * @example
 * <rs-numInput height='24' model=mlex size='14'></rs-numInput>
 */
export default {
  name: 'rs-numInput',
  data () {
    return {
      ISINPUTSHOW: false,
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('text1', this.currentValue)
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
      this.$emit('text1', this.currentValue)
    }
  }, 
  props: {
    height: String,
    size: {
      type: String,
      default: '14'
    },
    value: String,
    text: String
  }
}
</script>
<style lang="postcss">
  @component-namespace rs {
    @component numInput {
      position: relative;
      overflow: hidden;
      text-align: right;
      font-size: 14px;
      @descendent input {
        position: absolute; 
        top: 0; 
        left: 0;
        width: 100%; 
        border: none; 
        height: 100%; 
        padding: 0; 
        text-align: right; 
        font-size: 14px;
        margin: 0;
        background: none;
      }
      @descendent label {
        height: 100%;
      } 
    }
  }
</style>
