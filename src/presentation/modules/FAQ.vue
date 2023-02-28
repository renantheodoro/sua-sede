<template>
  <section :class="`faq-section section-default ${sectionClass}`">
    <div class="container">
      <div class="content__row">
        <div
          class="content__column faq-section__thumb-column column--4 column-desktop--5"
        >
          <img
            v-lazy="$getWebpUrl('faq_image')"
            class="faq-section__thumb-column__image"
          />
          <div class="faq-section__thumb-column__footer">
            <img
              src="@/assets/images/svg/icons/icon_phone-plus.svg"
              class="faq-section__thumb-column__footer__icon"
            />
            <div class="faq-section__thumb-column__footer__content">
              <h3>Ficou com dúvidas?</h3>
              <p>Nossa Equipe está pronta para atendê-lo</p>
              <Button @click="openFormNav($event)" type="tertiary-leaked">
                Fale com a gente
              </Button>
            </div>
          </div>
        </div>
        <div
          class="content__column faq-section__collapsible-column column--4 column-desktop--7"
        >
          <h2>Respostas às suas perguntas sobre espaços de escritório</h2>

          <ul class="collapsible">
            <li v-for="(content, index) in faqContent" :key="index">
              <div class="collapsible-header">
                {{ content.question }}
                <img
                  src="@/assets/images/svg/icons/icon_angle_down.svg"
                  alt="icon angle down"
                  class="icon"
                />
              </div>
              <div class="collapsible-body">
                <span v-html="content.answer"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../components/Button.vue";

import M from "materialize-css";

export default {
  name: "app-faq",

  components: { Button },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },
  },

  props: {
    faqContent: {
      type: Array,
      required: true,
    },
    sectionClass: {
      type: String,
      required: false,
    },
  },

  mounted() {
    M.Collapsible.init(document.querySelectorAll(".collapsible"));
  },
};
</script>
<style lang=""></style>
