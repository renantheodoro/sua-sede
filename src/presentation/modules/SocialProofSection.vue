<template>
  <section
    v-if="isMobile"
    :class="`section-default social-proof  ${sectionClass}`"
  >
    <div class="container">
      <h2>Quem confia em nós</h2>

      <swiper
        class="swiper"
        :modules="modules"
        :space-between="25"
        :slides-per-view="3"
        :pagination="{ clickable: true, dynamicBullets: false }"
      >
        <swiper-slide
          class="slide"
          v-for="(socialProof, index) in socialProofList"
          :key="index"
        >
          <img v-lazy="$getPngUrl(socialProof.media)" :alt="socialProof.name" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section v-else :class="`section-default social-proof  ${sectionClass}`">
    <div class="container">
      <h2>Quem confia em nós</h2>

      <ul class="social-proof__list">
        <li
          class="social-proof__list__item"
          v-for="(socialProof, index) in socialProofList"
          :key="index"
        >
          <img v-lazy="$getPngUrl(socialProof.media)" :alt="socialProof.name" />
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { Pagination, FreeMode } from "swiper";
import { Swiper } from "vue-awesome-swiper";
import { SwiperSlide } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/pagination";

import content from "@/content/social_proof.json";

export default {
  name: "app-social-proof-section",

  components: { Swiper, SwiperSlide },

  props: {
    sectionClass: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      socialProofList: content,
    };
  },

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
