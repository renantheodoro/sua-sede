<template>
  <main class="legalization">
    <Banner shapeColor="orange">
      <template v-slot:content
        ><h1>Legalização</h1>
        <p>
          Economize tempo, dinheiro e ganhe eficiência nos processos de
          legalização da sua empresa.
        </p>
      </template>
      <template v-slot:button>
        <Button @click="openFormNav($event)" type="primary">
          Fale com a gente
        </Button>
      </template>
      <template v-slot:media>
        <img
          v-lazy="$getWebpUrl('banner-legalization')"
          alt="Legalização de empresas"
        />
      </template>
    </Banner>

    <SocialProofSection sectionClass="section-default--no-padding-bottom" />

    <section
      class="section-default content-alternate-positions content-alternate-positions--one-item"
    >
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('legalization-content')"
                alt="Abertura de empresa alterações contratuais encerramento de empresa"
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
            <h3>
              Economize tempo e ganhe eficiência nos processos de legalização.
            </h3>
            <p>
              A solução da Sua Sede tem como objetivo aumentar a eficiência com
              transparência e com valor justo nos seus processos de
              formalização. Seja para abrir sua empresa ou fazer uma alteração
              cadastral, conte conosco!
            </p>

            <!-- <p>
              Garanta a exclusividade do uso em todo o território brasileiro com
              a FormalizaAí.
            </p> -->
            <Button @click="openFormNav($event)"> Conheça mais </Button>
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
                <img src="@/assets/images/svg/icons/icon_user.svg" alt="icon user" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Atendimento humanizado
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
                <img src="@/assets/images/svg/icons/icon_dollar.svg" alt="icon dollar" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Preços sem pegadinha
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
                <img src="@/assets/images/svg/icons/icon_heart.svg" alt="icon heart" />
              </div>
              <h3 class="content-icon-columns__item__title">Transparência</h3>
              <p class="content-icon-columns__item__text">
                Acompanhe os processos de todos os seus clientes de forma
                humanizada através dos nossos canais de comunicação.
              </p>
            </div>
          </div>
        </div>
        <div class="content__row">
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img src="@/assets/images/svg/icons/icon_target.svg" alt="icon target" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Cobertura nacional
              </h3>
              <p class="content-icon-columns__item__text">
                Conte conosco para a expansão e cobertura de atuação do seu
                escritório. Conquiste mais clientes realizando processos em
                todas as capitais.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img src="@/assets/images/svg/icons/icon_docs.svg" alt="icon docs" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Formulário inteligente
              </h3>
              <p class="content-icon-columns__item__text">
                Conte com nosso processo de coleta de informações utilizando o
                nosso formulário e agilize suas demandas de legalização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PlanPriceSection color="green">
      <h2>Legalização do seu negócio de um jeito simples e inovador.</h2>

      <p>
        Apoio completo nos seus processos de abertura, alteração, encerramento e
        muito mais.
      </p>

      <template v-slot:card>
        <h2>Preço</h2>
        <h3>Plano Start</h3>
        <p>Todas as etapas para formalizar sua empresa de um jeito simples!</p>
        <div class="plan-price-section__card__bottom">
          <p><strong>R$ 660,00</strong> (por processo)</p>
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
import faq from "@/content/faq_legalization.json";

export default {
  name: "app-legalization",

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
