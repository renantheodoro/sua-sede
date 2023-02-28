<template>
  <section class="banner" :class="{ 'banner--mobile': isMobile }">
    <div class="container">
      <div class="content__row">
        <div class="content__column column--4 column-desktop--3">
          <div class="banner__content mobile_container mobile__container--1rem">
            <div class="banner__content__wrapper">
              <slot name="content"></slot>
              <slot v-if="!isMobile" name="button"></slot>
            </div>
          </div>
        </div>
        <div class="content__column column--4 column-desktop--9">
          <div class="banner__media">
            <slot name="media"></slot>

            <MediaShape :color="shapeColor" top="58px" left="200px" />
            <MediaShape
              :color="shapeColor"
              bottom="58px"
              right="70px"
              :upsideDown="true"
            />
          </div>
        </div>
      </div>
      <div v-if="isMobile" class="content__row mobile_container">
        <div class="content__column column--4 only-mobile">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MediaShape from "@/presentation/components/MediaShape.vue";

export default {
  name: "app-banner",

  props: {
    shapeColor: {
      type: String,
      required: true,
    },
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

  components: { MediaShape },
};
</script>
<style lang=""></style>
