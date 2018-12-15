<template>
  <div class="rs-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="rs-msgbox" v-show="value">
        <div class="rs-msgbox-header" v-if="title !== ''">
          <div class="rs-msgbox-title">{{ title }}</div>
        </div>
        <div class="rs-msgbox-content" v-if="message !== ''">
          <div class="rs-msgbox-message" v-html="message"></div>
          <div class="rs-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="rs-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="rs-msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="postcss">
  @component-namespace rs {
    @component msgbox {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background: #f9f9f9;
      width: 270px;
      border-radius: 13px;
      font-size: 14px;
      -webkit-user-select: none;
      overflow: hidden;
      backface-visibility: hidden;
      transition: .2s;
      @descendent header {
        padding: 15px 0 0;
      }
      @descendent content {
        padding: 5px 15px 15px;
        border-bottom: 1px solid #ddd;
        min-height: 21px;
        position: relative;
      }
      @descendent input {
        padding-top: 15px;
        & input {
          border: 1px solid #dedede;
          border-radius: 5px;
          padding: 4px 5px;
          width: 100%;
          appearance: none;
          outline: none;
          margin: 0;
        }
        & input.invalid {
          border-color: #ff4949;
          &:focus {
            border-color: #ff4949;
          }
        }
      }
      @descendent errormsg {
        color: red;
        font-size: 12px;
        margin-top: 2px;
      }
      @descendent title {
        text-align: center;
        padding-left: 0;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 500;
        color: #000;
      }
      @descendent message {
        color: #000;
        margin: 0;
        text-align: center;
        line-height: 21px;
      }
      @descendent btns {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 40px;
        line-height: 40px;
      }
      @descendent btn {
        line-height: 35px;
        display: block;
        background: #f9f9f9;
        flex: 1;
        margin: 0;
        border: 0;
        font-size: 17px;
        &:focus {
          outline: none;
        }
        &:active {
          background: #f9f9f9;
        }
      }
      @descendent cancel {
        width: 50%;
        border-right: 1px solid #ddd;
        &:active {
          color: #000;
        }
      }
      @descendent confirm {
        color: #26a2ff;
        width: 50%;
        &:active {
         color: #26a2ff;
        }
      }
    }
  }
  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
<style src="../../../style/popup.css"></style>

<script type="text/babel">
  import Popup from '../../../utils/popup'
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';
  
  export default {
    name: 'rs-message',
    mixins: [ Popup ],
    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      confirmButtonClasses() {
        let classes = 'rs-msgbox-btn rs-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' rs-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'rs-msgbox-btn rs-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' rs-msgbox-cancel-highlight';
        }
        return classes;
      }
    },
    methods: {
      doClose() {
        this.value = false;
        this._closing = true;
        this.onClose && this.onClose();
        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;
        if (!this.transition) {
          this.doAfterClose();
        }
      },
      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },
      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },
      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },
    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },
      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },
      inputType(val) {
        this.handleInputType(val);
      }
    },
    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
