<template>
  <button
    type="submit"
    class="button btn waves-effect waves-light"
    :class="isEnabled ? 'button--tertiary' : 'button--disabled'"
    :disabled="!isEnabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "app-button-submit",

  props: {
    isEnabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
