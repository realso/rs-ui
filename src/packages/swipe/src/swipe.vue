<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :key="str.id">
        <router-link :to="str.path">
          <img :src="str.url"/>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'rs-swipe',
  props: ['listImg'],
  mounted () {
    var option
    if (this.listImg.length > 1) {
      option = {
        loop: true,
        autoplay: 3000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      }
    }
    var swiper = new Swiper('.swiper-container', option)
  }
}
</script>
