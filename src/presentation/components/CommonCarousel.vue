<template>
  <swiper
    :class="`swiper common-carousel common-carousel--${viewMode}`"
    :modules="modules"
    :space-between="spaceBetween"
    :slides-per-view="isMobile ? 1 : 2"
    :pagination="{ clickable: true, dynamicBullets: false }"
  >
    <slot></slot>
  </swiper>
</template>
<script>
import { Pagination, FreeMode } from "swiper";
import { Swiper } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "app-common-carousel",

  props: {
    viewMode: {
      type: String, // service-view || address-view
      required: false,
    },
    spaceBetween: {
      type: Number,
      required: false,
      default: 25
    },
  },

  components: { Swiper },

  computed: {
    isMobile() {
      if (window.screen.width <= 767) {
        return true;
      } else {
        return false;
      }
    },
  },

  setup() {
    return {
      modules: [Pagination, FreeMode],
    };
  },
};
</script>
<style lang=""></style>
