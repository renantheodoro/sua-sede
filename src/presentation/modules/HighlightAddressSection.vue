<template>
  <section :class="`section-default ${sectionClass}`">
    <div class="container">
      <h2>Endereços em destaque</h2>
      <CommonCarousel viewMode="address-view">
        <swiper-slide class="slide">
          <div class="swiper-wrapper__item" href="#one!">
            <img
              v-lazy="$getWebpUrl('address-alameda_santos')"
              alt="alameda santos"
              class="swiper-wrapper__item__media"
            />
            <div class="swiper-wrapper__item__content">
              <h3>Alameda Santos</h3>
              <address>Alameda Santos, 415 - Vila Mariana</address>
              <!-- <p>A partir de R$ 110,90/por mês</p> -->
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building.svg"
                  class="icon"
                  alt="icon building"
                />
                Endereço Virtual
              </span>
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building.svg"
                  class="icon"
                  alt="icon building"
                />
                Salas de Reunião
              </span>
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building.svg"
                  class="icon"
                  alt="icon building"
                />
                Coworking
              </span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <!-- swiper-wrapper__item--disabled" -->
          <div class="swiper-wrapper__item" href="#one!">
            <img
              v-lazy="$getWebpUrl('address-berrini')"
              alt="berrini"
              class="swiper-wrapper__item__media"
            />
            <div class="swiper-wrapper__item__content">
              <h3>Berrini</h3>
              <address>R. Surubim, 373 - Cidade Monções</address>
              <!-- <p>A partir de R$ 110,90/por mês</p> -->
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building_grey.svg"
                  class="icon"
                  alt="icon building"
                />
                Salas de Reunião
              </span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <!-- swiper-wrapper__item--disabled" -->
          <div class="swiper-wrapper__item" href="#one!">
            <img
              v-lazy="$getWebpUrl('address-vila_mariana')"
              alt="vila mariana"
              class="swiper-wrapper__item__media"
            />
            <div class="swiper-wrapper__item__content">
              <h3>Vila Madalena</h3>
              <address>R. Fidalga, 593 - Vila Madalena</address>
              <!-- <p>A partir de R$ 110,90/por mês</p> -->
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building.svg"
                  class="icon"
                  alt="icon building"
                />
                Endereço Virtual
              </span>
              <span class="flag">
                <img
                  src="@/assets/images/svg/icons/icon_building.svg"
                  class="icon"
                  alt="icon building"
                />
                Salas de Reunião
              </span>
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

export default {
  name: "app-highlight-address-section",

  props: {
    sectionClass: {
      type: String,
      required: false,
    },
  },

  components: { CommonCarousel, SwiperSlide },
};
</script>
<style lang=""></style>
