<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="加载更多loadmore" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content bk-fff">
      <rs-loadmore class="rr-loadmore" :bottom-method="loadBottom" :top-status.sync="topStatus" :bottom-all-loaded="allLoaded" :top-method="loadTop" :auto-fill=false  ref="loadmore">
        <rs-list class="rr-line-21 rr-list-rili" size="14" noborder>
          <div v-if="list.length<=0&&topStatus==''" class="rs-list-nodata">
           <span>无对应数据！</span>
          </div>
          <rs-list-item v-for="(item, index) in list" :key="index" @click.native="move()">
            {{ item }}
          </rs-list-item>
          <div v-if="allLoaded&&list.length>=pageSize" class="rs-list-nodata">
            <span>没有数据啦</span>
          </div>
        </rs-list>
      </rs-loadmore>
    </div>
  </div>
</template>

<style>
.rr-loadmore{min-height: 100%;}
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0,
        pageSize: 10
      }
    },
    methods: {
      loadTop() {
        setTimeout(() => {
          this.topStatus = "loading";
          this.allLoaded = false;
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          if(this.list.length<this.pageSize){
            this.allLoaded =true;
          }
          this.topStatus = "";
          this.$refs.loadmore.onTopLoaded();
        }, 500);
      },
      loadBottom() {
        setTimeout(() => {
          this.topStatus = "loading";
          let lastValue = this.list[this.list.length - 1];
          this.topStatus = "";
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          if (data.data.items.length == 0) {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 500);
      },
      move(){
        this.$router.push({path:"/loadmoreup"});
      }
    },
    created() {
      for (let i = 1; i <= 10; i++) {
        this.list.push(i);
      }
    }
  }
</script>