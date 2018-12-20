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
        <div v-else :style="currentValue && type !== 'textarea' && (active||type === 'label')&&isclear?'margin-right: 38px':''">
          <textarea
            @change="$emit('change', currentValue)"
            ref="textarea"
            class="rs-field-textarea"
            :placeholder="placeholder&&!disabled&&!readonly"
            v-if="type === 'textarea'"
            :rows="rows"
            :disabled="disabled"
            :readonly="readonly"
            v-model="currentValue">
          </textarea>
          <div v-else class="rs-field--input">
            <input 
            :number="type === 'number'"
            :type="type" ref="input" 
            :placeholder="placeholder&&!disabled&&!readonly"
            :style="Inputstyle"
            @click="active = true;ISINPUTSHOW=true,$event.target.select()" 
            class="rs-field-input"
            :disabled="disabled"
            :readonly="readonly"
              @blur="change"
              v-model="currentValue" />
            <div v-if="text" v-show="ISINPUTSHOW==false" class="rs-field-inputtext"><span v-if="text==''">{{placeholder}}</span>{{text}}</div>
          </div>
        </div>
        <span v-if="isclear"
          v-show="currentValue && type !== 'textarea' && (active||type === 'label')" 
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
      ISINPUTSHOW: false,
      active: false
    }
  },
  computed:{
      currentValue:{
        get(){
          return this.value;
        },
        set(v){
          this.value = v;
        }
      },
      Inputstyle: function() {
        if(this.text){
          if(this.ISINPUTSHOW==false){
            return 'opacity:0'
          }else{
            return 'opacity:1'
          }
        }else{
          return 'opacity:1'
        }
      }
  },
  methods: {
    handleClick (evt) {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
      this.$emit('clearClick', evt)
    },
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
    change() {
      this.active = false;
      this.ISINPUTSHOW = false;
      this.$emit('input', this.currentValue)
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
      default: 'label'
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
    isclear: Boolean,
    value: String,
    text: String
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
      @modifier input {
        position: relative;
        overflow: hidden;
        height: 33px;
        line-height: 33px;
      }
      @descendent input {
        position: absolute; 
        top: 0; 
        left: 0;
        width: 100%; 
        border: none !important; 
        height: 33px !important; 
        line-height: 33px !important;
        padding: 0 !important;
        font-size: inherit;
        margin-bottom: 0 !important;
        background: none !important;
      }
      @descendent inputtext{
        height: 33px;
      }
      @descendent textarea {
        padding: 5px 0 !important;
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
