<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="弹出Indicator" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content">
      <div class="mui-content-padded">
      <rs-button @click.native="openIndicator" size="large">点击弹出 Indicator</rs-button>
      <rs-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</rs-button>
      <rs-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</rs-button>
    </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      openIndicator() {
        this.$indicator.open();
        setTimeout(() => this.$indicator.close(), 2000);
      },
      openIndicatorWithSpinner() {
        this.$indicator.open({ spinnerType: 'fading-circle',text: '说啥呢' });
        setTimeout(() => this.$indicator.close(), 2000);
      },
      openIndicatorWithText() {
        this.$indicator.open('加载中...');
        setTimeout(() => this.$indicator.close(), 2000);
      }
    },
    beforeDestroy() {
      this.$indicator.close();
    }
  };
</script>