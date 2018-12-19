<template>
  <rs-list-item :isright="isright" :noborder="noborder">
    <rs-datetime v-if="type==='date'||type==='datetime'||type==='time'" key="data" ref="date1" :type="type" v-model.lazy="currentValue" @confirm="handleChange"></rs-datetime>
    <div class="rs-field" v-if="type==='date'||type==='time'||type==='datetime'" @click.stop="open()">
      <span v-show="label" class="rs-field-label" :class="['rs-field-'+ width +'em']">{{label}}</span>
      <span v-show="label">：</span>
      <div class="rs-field-item">
        {{text}}
      </div>
    </div>
    <div v-else class="rs-field">
      <span v-show="label" class="rs-field-label" :class="['rs-field-'+ width +'em']">{{label}}</span>
      <span v-show="label" >：</span>
      <div class="rs-field-item">
        <div v-if="type==='label'">{{text}}</div>
        <div v-else :style="active?'margin-right: 38px':''">
          <textarea
            @change="$emit('change', currentValue)"
            ref="textarea"
            class="rs-field-input"
            :placeholder="placeholder"
            v-if="type === 'textarea'"
            :rows="rows"
            :disabled="disabled"
            :readonly="readonly"
            v-model="currentValue">
          </textarea>
          <input
            @change="$emit('change', currentValue)"
            ref="input"
            class="rs-field-input"
            :placeholder="placeholder"
            :number="type === 'number'"
            v-else
            :type="type"
            @focus="active = true"
            :disabled="disabled"
            :readonly="readonly"
            :value="currentValue"
            @input="handleInput">
        </div>
        <span v-if="!disableClear"
          v-show="currentValue && type !== 'textarea' && active" 
          class="rs-field-clear mui-icon mui-icon-closeempty" 
          @click.stop="handleClick"></span>
      </div>
      <slot name="button"></slot>
    </div>
  </rs-list-item>
</template>
<script>
export default {
  name: "rs-field",
  data() {
    return {
      active: false,
      currentValue: this.value
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('clearClick', evt)
    },
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
    handleChangeD(evt){
      this.$emit('handleChangeD', evt)
    },
    open() {
      this.$refs['date1'].open();
    },
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    isright: Boolean,
    noborder: Boolean,
    label: String,
    width: {
      type: Number,
      default: 4,
      validator (value) {
        return [
          3,
          4,
          5,
          6
        ].indexOf(value) > -1
      }
    },
    rows: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: String,
    text: String,
    attr: Object
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    },
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
}
</script>   
<style lang="postcss">
.rs-list .rs-listItem{padding: 5px 15px; line-height: 33px;}
.rs-list a:not(.mui-btn){margin: -5px -15px;}
@component-namespace rs {
    @component field {
       display:flex;
       display:-webkit-flex;
       margin:0 auto; 
       flex-direction:row; 
       width: 100%; 
       overflow: hidden;
      @descendent item {
        flex:1;
        position: relative;
      } 
      @descendent label {
        height: 33px; line-height: 33px;
        display: inline-block;
        margin-right: 10px;
        float: left;
        text-align:justify;
        text-align-last:justify;
        letter-spacing:-.15em;white-space:normal !important;
        &:after{
          display:inline-block;
          overflow:hidden;
          width:100%;
          height:0;
          content:' ';
          vertical-align:top;
        }
      }
      @descendent 3em {
        width: 3em;
      }
      @descendent 4em {
        width: 4em;
      }
      @descendent 5em {
        width: 5em;
      }
      @descendent 6em {
        width: 6em;
      }
      @descendent input {
        height: 21px !important;
        padding: 0 !important;
        line-height: 21px !important;
        margin-bottom: 0 !important;
        border: none !important;
        background: none !important;
        font-size: inherit;
      }
      @descendent clear {
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -19px;
        color: #fff;
        font-size: 16px;
        padding: 11px 15px;
        &::before{
          background: #ccc;
          border-radius: 100%;
        }
      }
    }
  }
</style>
