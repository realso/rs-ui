<template>
  <div>
    <rs-header title="按钮" color="primary">
      <router-link slot="left" class="mui-icon mui-icon-left-nav mui-pull-left" :to="'/'"><span ></span></router-link>
    </rs-header>
    <div class="mui-content">
      <rs-button size="normal" @click="alertbox">alertbox</rs-button>
      <rs-button size="normal" @click="confirmbox">openConfirm</rs-button>
      <rs-button size="normal" @click="promptmbox">promptmbox</rs-button>
      <span @click="openConfirm">openConfirm</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MessageBox',
  data () {
    return {
      examplename: 'MessageBox'
    }
  },
  mounted () {
  },
  methods: {
    alertbox () {
      this.$messagebox.alert('提示', '操作成功')
    },
    confirmbox () {
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
    promptmbox () {
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
  }
}
</script>
<style scoped>
ul {
  padding: 10px;
}
li {
  margin: 20px 0;
}
</style>
