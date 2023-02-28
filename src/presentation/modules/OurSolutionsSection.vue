<template>
  <section v-if="isMobile" class="section-default">
    <div class="container">
      <h2>Nossas soluções</h2>

      <div class="common-carousel common-carousel--service-view">
        <div
          class="swiper-slide"
          v-for="(service, index) in servicesList"
          :key="index"
        >
          <div class="swiper-wrapper__item" href="#one!">
            <img
              v-lazy="$getWebpUrl(service.media)"
              :alt="service.media"
              class="swiper-wrapper__item__media"
            />
            <div class="swiper-wrapper__item__content">
              <h3>{{ service.name }}</h3>
              <p>
                {{ service.description }}
              </p>
              <router-link :to="{ name: service.link }">
                Saiba mais
                <span>
                  <img
                    src="@/assets/images/svg/icons/icon_angle_right.svg"
                    alt="icon angle right"
                  />
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="section-default">
    <div class="container">
      <h2>Nossas soluções</h2>
      <CommonCarousel viewMode="service-view">
        <swiper-slide
          class="slide"
          v-for="(service, index) in servicesList"
          :key="index"
        >
          <div class="swiper-wrapper__item" href="#one!">
            <img
              v-lazy="$getWebpUrl(service.media)"
              :alt="service.media"
              class="swiper-wrapper__item__media"
            />
            <div class="swiper-wrapper__item__content">
              <h3>{{ service.name }}</h3>
              <p>
                {{ service.description }}
              </p>
              <router-link :to="{ name: service.link }">
                Saiba mais
                <span>
                  <img
                    src="@/assets/images/svg/icons/icon_angle_right.svg"
                    alt="icon angle right"
                  />
                </span>
              </router-link>
            </div>
          </div>
        </swiper-slide>
      </CommonCarousel>
    </div>
  </section>
</template>
<script>
import CommonCarousel from "@/presentation/components/CommonCarousel.vue";
import { SwiperSlide } from "vue-awesome-swiper";

import content from "@/content/our_solutions.json";

export default {
  name: "app-our-solutions-section",

  components: { CommonCarousel, SwiperSlide },

  data() {
    return {
      servicesList: content,
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
};
</script>
<style lang=""></style>
