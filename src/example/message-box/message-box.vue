<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="消息框messageBox" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-button size="normal" @click="alertbox">alertbox</rs-button>
        <rs-button size="normal" @click="confirmbox">openConfirm</rs-button>
        <rs-button size="normal" @click="promptmbox">promptmbox</rs-button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@component-namespace rs {
  @component loadmoreT {
    text-align: center;
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }  
}
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0
      }
    },
    methods: {
      alertbox() {
        this.$messagebox.alert('操作成功!', '提示');
      },
      confirmbox() {
        this.$messagebox.confirm('', {
        message: '您还未登录，无法获得分享奖励',
        title: '用户未登录',
        showConfirmButton: true,
        showCancelButton: true,
        closeOnClickModal: false,
        cancelButtonClass: 'cancelButton',
        confirmButtonClass: 'confirmButton',
        confirmButtonText: '立即登录',
        cancelButtonText: '明天再说'
      }).then(action => {
        if (action === 'confirm') {
          this.$toast('用户选择立即登录')
        }
      }).catch(err => {
        if (err === 'cancel') {
          this.$toast('用户选择明天再说')
        }
      })
      },
      promptmbox() {
        this.$messagebox.prompt('请输入姓名').then(({ value, action }) => {
          if (action === 'confirm') {
            if (!value || value.trim() === '') {
              this.$toast('用户没有输入')
            } else {
              this.$toast(value)
            }
          }
        },
        () => {
          this.$toast('取消')
        })
      } 
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  }
</script>