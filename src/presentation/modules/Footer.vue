<template>
  <footer class="footer">
    <div class="footer__call-to-action" v-lazy:background-image="$getWebpUrl('footer-call_to_action')">
      <div class="container">
        <div class="content__row">
          <div class="footer__call-to-action__content">
            <h2>Ficou interessado? <br />Fale conosco!</h2>

            <Button type="tertiary" @click="openFormNav($event)">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__links">
      <div class="container">
        <div class="content__row">
          <div class="content__column column--1 column-desktop--2">
            <router-link
              :to="{ name: 'home' }"
              class="footer__links__link footer__links__link--title"
              >Home</router-link
            >
          </div>
          <div class="content__column column--3 column-desktop--4">
            <a
              @click.prevent
              class="footer__links__link footer__links__link--title"
              >Serviços</a
            >
            <router-link
              :to="{ name: 'tax-address' }"
              class="footer__links__link"
            >
              Endereço fiscal
            </router-link>
            <router-link
              :to="{ name: 'trademark-registration' }"
              class="footer__links__link"
            >
              Registro de Marca
            </router-link>
            <router-link
              :to="{ name: 'legalization' }"
              class="footer__links__link"
            >
              Legalização
            </router-link>
            <router-link
              :to="{ name: 'accounting' }"
              class="footer__links__link"
            >
              Contabilidade
            </router-link>
          </div>
          <div class="content__column column-desktop--6">
            <div class="content__row">
              <div class="content__column column--1 column-desktop--12">
                <img
                  src="@/assets/images/svg/footer_signature.svg"
                  class="footer_signature"
                  alt="footer signature"
                />
              </div>
              <div class="content__column column--3 column-desktop--12">
                <div class="footer_copyright">
                  <p class="footer_description">
                    COPYRIGHT © 2022 | TODOS OS DIREITOS RESERVADOS | <br />SUA
                    SEDE SERVIÇO LTDA | CNPJ: 46.138.201/0001-50
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1Ty7j_2R1CZKAAS965AOB1L5UolA6EIm3/view?usp=sharing"
                    target="_blank"
                    class="footer__links__link footer__links__link--underscore"
                    >POLÍTICA DE PRIVACIDADE</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content__row">
          <div class="content__column column--4 column-desktop--12">
            <div class="footer_social-media">
              <a href="https://instagram.com/sua.sede" target="_blank">
                <img
                  src="@/assets/images/svg/icons/icon_instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/svg/icons/icon_linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Button from "../components/Button.vue";

export default {
  name: "app-footer",

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },
  },

  components: { Button },
};
</script>
