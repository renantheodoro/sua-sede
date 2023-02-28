<template>
  <svg
    v-if="isMobile"
    class="media-shape"
    :class="colorLogic"
    width="123"
    height="122"
    viewBox="0 0 123 122"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 122V0H123L117.169 6.06325H5.28444V116.304L0 122Z"
      fill="#5452F6"
    />
  </svg>

  <svg
    v-else
    class="media-shape"
    :class="colorLogic"
    :style="{ top: top, right: right, bottom: bottom, left: left }"
    width="308"
    height="304"
    viewBox="0 0 308 304"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 304V0H308L293.399 15.1084H13.2326V289.807L0 304Z" />
  </svg>
</template>
<script>
export default {
  name: "app-media-shape",

  props: {
    top: {
      type: String,
      required: false,
    },
    right: {
      type: String,
      required: false,
      default: "58px",
    },
    bottom: {
      type: String,
      required: false,
    },
    left: {
      type: String,
      required: false,
    },
    upsideDown: {
      type: Boolean,
      required: false,
    },
    color: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      colorLogic: {
        "media-shape--purple": this.color === "purple",
        "media-shape--orange": this.color === "orange",
        "media-shape--green": this.color === "green",
        "media-shape--upside-down": this.upsideDown,
      },
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
