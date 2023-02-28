<template lang="">
  <section :class="`section-default testimonials ${sectionClass}`">
    <div class="container">
      <div class="testimonials__content-row content__row">
        <div
          class="testimonials__content-column content__column column-4 column-desktop--4"
        >
          <h2 class="heading-1 font-regular">
            Veja a opinião de quem já usa nossas soluções.
          </h2>

          <Button type="tertiary" @click="openFormNav($event)"
            >Quero conhecer mais</Button
          >
        </div>
        <div class="content__column column-4 column-desktop--8">
          <swiper
            class="swiper testimonials-carousel"
            :modules="modules"
            :space-between="25"
            :width="isMobile ? 180 : null"
            :slides-per-view="isMobile ? 1 : 2"
            :pagination="{ clickable: true, dynamicBullets: true }"
          >
            <swiper-slide class="slide">
              <div class="testimonials-carousel__item">
                <div class="testimonials-carousel__item__media">
                  <img
                    src="@/assets/images/svg/icons/icon_quotation_marks.svg"
                    alt="icon_quotation_marks"
                  />
                </div>

                <p class="testimonials-carousel__item__content">
                  "Foi uma experiência muito boa, espaço grande e com vários
                  lugares diferentes para escolher."
                </p>
                <h4 class="testimonials-carousel__item__title">Ana Simões</h4>
                <h5 class="testimonials-carousel__item__subtitle">WOBA</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="testimonials-carousel__item">
                <div class="testimonials-carousel__item__media">
                  <img
                    src="@/assets/images/svg/icons/icon_quotation_marks.svg"
                    alt="icon quotation marks"
                  />
                </div>
                <p class="testimonials-carousel__item__content">
                  "Como sempre muito bom!!! Silencioso, confortável, internet de
                  qualidade e bem localizado."
                </p>
                <h4 class="testimonials-carousel__item__title">Cintia Taiar</h4>
                <h5 class="testimonials-carousel__item__subtitle">WOBA</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="testimonials-carousel__item">
                <div class="testimonials-carousel__item__media">
                  <img
                    src="@/assets/images/svg/icons/icon_quotation_marks.svg"
                    alt="icon quotation marks"
                  />
                </div>

                <p class="testimonials-carousel__item__content">
                  "Ao lado do metrô, colaboradores prestativos e atenciosos.
                  Ambiente confortável, limpo e organizado."
                </p>
                <h4 class="testimonials-carousel__item__title">
                  Darlam Santos
                </h4>
                <h5 class="testimonials-carousel__item__subtitle">WOBA</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="testimonials-carousel__item" href="#one!">
                <div class="testimonials-carousel__item__media">
                  <img
                    src="@/assets/images/svg/icons/icon_quotation_marks.svg"
                    alt="icon quotation marks"
                  />
                </div>

                <p class="testimonials-carousel__item__content">
                  "O espaço é maravilhoso, nos atenderam super bem e a sala
                  estava limpa, organizadinha e tinha até café pra gente! AMEI e
                  voltaremos sempre!"
                </p>
                <h4 class="testimonials-carousel__item__title">
                  Gustavo Avelino
                </h4>
                <h5 class="testimonials-carousel__item__subtitle">WOBA</h5>
              </div>
            </swiper-slide>
            <swiper-slide class="slide">
              <div class="testimonials-carousel__item" href="#one!">
                <div class="testimonials-carousel__item__media">
                  <img
                    src="@/assets/images/svg/icons/icon_quotation_marks.svg"
                    alt="icon quotation marks"
                  />
                </div>

                <p class="testimonials-carousel__item__content">
                  "Lugar bem tranquilo e silencioso para trabalhar. A equipe que
                  trabalha lá é muito prestativa e atenciosa."
                </p>
                <h4 class="testimonials-carousel__item__title">
                  Alex Serikaku
                </h4>
                <h5 class="testimonials-carousel__item__subtitle">WOBA</h5>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/presentation/components/Button.vue";
import { Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "app-testimonials-section",

  components: { Button, Swiper, SwiperSlide },

  props: {
    sectionClass: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      itemWidth: null,
      itemsLength: null,
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

  mounted() {
    const items = document.getElementsByClassName(
      "testimonials-carousel__item"
    );
    this.itemWidth = items[0].offsetWidth;
    this.itemLength = items.length;
  },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
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
