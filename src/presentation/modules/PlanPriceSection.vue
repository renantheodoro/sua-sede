<template>
  <section
    :class="`section-default plan-price-section plan-price-section--${color}`"
  >
    <div class="container">
      <div class="plan-price-section__wrapper">
        <div class="content__row">
          <div class="content__column column--4 column-desktop--5">
           <slot></slot>
          </div>
          <div class="content__column only-desktop column-desktop--1"></div>
          <div class="content__column column--4 column-desktop--6">
            <div class="plan-price-section__card">
              <slot name="card"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "app-plan-price-section",

  props: {
    color: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
