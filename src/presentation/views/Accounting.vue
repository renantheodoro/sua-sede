<template>
  <main class="accounting">
    <Banner shapeColor="orange">
      <template v-slot:content
        ><h1>Contabilidade digital</h1>
        <p>
          Seu tempo é muito importante para cuidar de tudo sozinho. Deixe a
          burocracia com a gente
        </p>
      </template>
      <template v-slot:button>
        <Button type="primary" @click="openFormNav($event)">
          Fale com a gente
        </Button>
      </template>
      <template v-slot:media>
        <img
          v-lazy="$getWebpUrl('banner-accounting')"
          alt="Contabilidade digital para pequenas empresas prestadores de serviço"
        />
      </template>
    </Banner>

    <SocialProofSection />

    <section
      class="content-icon-columns content-icon-columns--steps section-default section-default--no-padding-bottom"
    >
      <div class="container">
        <div class="content__row">
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_phone.svg"
                  alt="icon phone"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 1 </span>
                <p class="content-icon-columns__item__text">
                  Entre em contato conosco
                </p>
              </div>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_chart-pie.svg"
                  alt="chart pie"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 2 </span>
                <p class="content-icon-columns__item__text">
                  Forneça os acessos necessários
                </p>
              </div>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_laugh-squint.svg"
                  alt="laugh squint"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 3 </span>

                <p class="content-icon-columns__item__text">
                  Pronto! Agora é com a gente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="section-default content-alternate-positions content-alternate-positions--one-item"
    >
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('accounting-content')"
                alt="Contabilidade digital imposto de renda"
                class="content-alternate-positions__media__image"
              />
              <MediaShape
                color="orange"
                right="40px"
                bottom="-46px"
                :upsideDown="true"
              />
            </div>
          </div>
          <div class="content__column column-4 column-desktop--6">
            <h3>Conheça os benefícios em ter sua empresa com a SuaSede</h3>
            <p>
              Da emissão de nota ao imposto de renda. Cobertura da sua empresa
              de ponta a ponta!
            </p>

            <Button type="primary" @click="openFormNav($event)">
              Conheça mais
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="content-icon-columns section-default">
      <div class="container">
        <div class="content__row">
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_building_orange.svg"
                  alt="icon building"
                />
              </div>
              <h3 class="content-icon-columns__item__title">
                Abertura de empresa
              </h3>
              <p class="content-icon-columns__item__text">
                Consultores disponíveis para te ajudar sempre que você precisar,
                conte conosco para realização dos seus processos.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img src="@/assets/images/svg/icons/icon_file.svg" alt="icon_file" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Emissão de nota fiscal
              </h3>
              <p class="content-icon-columns__item__text">
                Preços justos com transparência e previsibilidade.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_signature.svg"
                  alt="icon signature"
                />
              </div>
              <h3 class="content-icon-columns__item__title">
                Obrigações fiscais
              </h3>
              <p class="content-icon-columns__item__text">
                Acompanhe os processos de todos os seus clientes de forma
                humanizada através dos nossos canais de comunicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PlanPriceSection color="purple">
      <h2>Mais tempo livre para você e muito menos burocracia.</h2>

      <p>
        Contabilidade de forma simples, rápida e segura desde os primeiros
        passos da sua jornada empreendedora.
      </p>

      <template v-slot:card>
        <h2>Preço</h2>
        <h3>Plano Start</h3>
        <p>Todas as etapas para formalizar sua empresa de um jeito simples!</p>
        <div class="plan-price-section__card__bottom">
          <p>a partir de <strong>R$149,90</strong></p>
          <a href="#" @click="openFormNav($event)"
            >Escolher plano
            <img
              src="@/assets/images/svg/icons/icon_angle_right_grey.svg"
              alt="icon angle right grey"
          /></a>
        </div>
      </template>
    </PlanPriceSection>

    <TestimonialsSection @openFormNav="openFormNav($event)" />

    <FAQ @openFormNav="openFormNav($event)" :faqContent="faqContent" />

    <BlogSection sectionClass="section-default--full-padding-bottom" />
  </main>
</template>
<script>
import Banner from "@/presentation/modules/Banner.vue";
import Button from "@/presentation/components/Button.vue";
import SocialProofSection from "@/presentation/modules/SocialProofSection.vue";
import MediaShape from "@/presentation/components/MediaShape.vue";
import PlanPriceSection from "@/presentation/modules/PlanPriceSection.vue";
import TestimonialsSection from "../modules/TestimonialsSection.vue";
import BlogSection from "../modules/BlogSection.vue";
import FAQ from "../modules/FAQ.vue";
import faq from "@/content/faq_accounting.json";

export default {
  name: "app-accounting",

  data() {
    return {
      faqContent: faq,
    };
  },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },
  },

  components: {
    Banner,
    Button,
    SocialProofSection,
    MediaShape,
    PlanPriceSection,
    TestimonialsSection,
    BlogSection,
    FAQ,
  },
};
</script>
<style lang=""></style>
