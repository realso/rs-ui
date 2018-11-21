<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="加载更多loadmore" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
          <rs-list size="15">
            <rs-list-item v-for="(item, index) in list" :key="index">
              {{ item }}
            </rs-list-item>
          </rs-list>
          <div slot="top" class="rs-loadmoreT">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          </div>
        </rs-loadmore>
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
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  }
</script>