<template>
  <div class="mui-layout mui-layout-top">
    <rs-header title="懒加载lazyload" color="primary">
      <a slot="left" class="mui-icon mui-icon-left-nav" href="/"></a>
    </rs-header>
  	<div class="mui-content">
      <div class="mui-content-padded">
        <rs-list size="15">
          <rs-list-item v-for="(item, index) in list" :key="index">
            <img v-lazy="item" class="rs-lazyload-image">
          </rs-list-item>
        </rs-list>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
  @component-namespace rs {
    @component lazyload {
      @descendent image {
        display: block;
        width: 100%;
      }
      @descendent image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
          'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
        ]
      };
    }
  };
</script>