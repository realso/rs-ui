<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="加载更多loadmore" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-loadmore :bottom-method="loadBottom" :auto-fill=false  :bottom-all-loaded="allLoaded" ref="loadmore">
          <rs-list size="15">
            <rs-list-item v-for="(item, index) in list" :key="index">
              {{ item }}
            </rs-list-item>
          </rs-list>
          <div slot="bottom" class="rs-loadmoreb">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>  
          </div>
        </rs-loadmore>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@component-namespace rs {
  @component loadmoreb {
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
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      }
    },
    methods: {
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 1; i++) {
        this.list.push(i);
      }
    }
  }
</script>