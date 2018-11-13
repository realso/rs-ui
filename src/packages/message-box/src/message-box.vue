<template>
  <div>
    <transition name="msgbox-bounce">
      <div class="mui-popup mui-popup-in" v-show="value">
        <div class="mui-popup-inner">
          <div class="mui-popup-title" v-if="title !== ''">
            {{ title }}
          </div>
          <div class="mui-popup-text" v-html="message"></div>
          <div class="mui-popup-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="rs-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="mui-popup-buttons">
          <span class="mui-popup-button" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</span>
          <span class="mui-popup-button mui-popup-button-bold" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<style src="../../../style/popup.css"></style>

<script type="text/babel">
import Popup from '../../../utils/popup'

let CONFIRM_TEXT = '确定'
let CANCEL_TEXT = '取消'

export default {
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
  computed: {},
  methods: {
    doClose () {
      this.value = false
      this._closing = true
      this.onClose && this.onClose()
      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = this.bodyOverflow
          document.body.style.paddingRight = this.bodyPaddingRight
        }
        this.bodyOverflow = null
        this.bodyPaddingRight = null
      }, 200)
      this.opened = false
      if (!this.transition) {
        this.doAfterClose()
      }
    },
    handleAction (action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return
      }
      var callback = this.callback
      this.value = false
      callback(action)
    },
    validate () {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!'
          this.$refs.input.classList.add('invalid')
          return false
        }
        var inputValidator = this.inputValidator
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue)
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!'
            this.$refs.input.classList.add('invalid')
            return false
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult
            return false
          }
        }
      }
      this.editorErrorMessage = ''
      this.$refs.input.classList.remove('invalid')
      return true
    },
    handleInputType (val) {
      if (val === 'range' || !this.$refs.input) return
      this.$refs.input.type = val
    }
  },
  watch: {
    inputValue () {
      if (this.$type === 'prompt') {
        this.validate()
      }
    },
    value (val) {
      this.handleInputType(this.inputType)
      if (val && this.$type === 'prompt') {
        setTimeout(() => {
          if (this.$refs.input) {
            this.$refs.input.focus()
          }
        }, 500)
      }
    },
    inputType (val) {
      this.handleInputType(val)
    }
  },
  data () {
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
    }
  }
}
</script>
