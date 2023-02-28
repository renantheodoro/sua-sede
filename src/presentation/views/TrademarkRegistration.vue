<template>
  <main class="trademark-registration">
    <Banner shapeColor="orange">
      <template v-slot:content
        ><h1>Registro de Marca</h1>
        <p>
          Já pensou ter sua marca registrada por outra pessoa e precisar mudar:
          Logo, Site, Campanhas de marketing e tudo mais por causa disso? Não
          corra esse risco, registre sua marca e fique tranquilo.
        </p>
      </template>
      <template v-slot:button>
        <Button type="primary" @click="openFormNav($event)">
          Fale com a gente
        </Button>
      </template>
      <template v-slot:media>
        <img
          v-lazy="$getWebpUrl('banner-trademaker')"
          alt="Registro de marca para empresas"
        />
      </template>
    </Banner>

    <SocialProofSection sectionClass="section-default--no-padding-bottom" />

    <section
      class="section-default section-default--no-padding-bottom content-alternate-positions content-alternate-positions--one-item"
    >
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('trademark-content-1')"
                alt="Registro de marca INPI taxas"
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
            <h3>Ter um CNPJ não é o suficiente, proteja seu negócio.</h3>
            <p>
              Evite dor de cabeça, registrar sua marca é um dos passos mais
              importantes para seu negócio. Sem o registro você corre vários
              riscos que poderiam facilmente serem evitados logo no começo da
              sua jornada.
            </p>

            <p>
              Garanta a exclusividade do uso em todo o território brasileiro com
              a FormalizaAí.
            </p>
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
                <img src="@/assets/images/svg/icons/icon_stop.svg" alt="icon stop" />
              </div>
              <h3 class="content-icon-columns__item__title">Evite riscos</h3>
              <p class="content-icon-columns__item__text">
                Não corra o risco do seu concorrente copiar sua marca ou produto
                registrando primeiro do que você.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img src="@/assets/images/svg/icons/icon_infinity.svg" alt="icon infinity" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Defenda sua marca
              </h3>
              <p class="content-icon-columns__item__text">
                Com a marca registrada no INPI você tem os meios legais para
                defender sua marca.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--orange"
            >
              <div class="content-icon-columns__item__icon">
                <img src="@/assets/images/svg/icons/icon_star.svg" alt="icon star" />
              </div>
              <h3 class="content-icon-columns__item__title">
                Ganhe credibilidade
              </h3>
              <p class="content-icon-columns__item__text">
                Ter a sua marca registrada é o cartão de visitas da qual sua
                empresa não está de brincadeira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PlanPriceSection color="orange">
      <h2>Proteja sua marca por um preço justo e sem pegadinhas.</h2>

      <p>
        Registrar o nome e logo da sua empresa é essencial para seu negócio,
        evite dores de cabeça no futuro.
      </p>

      <template v-slot:card>
        <h2>Preço</h2>
        <h3>Plano Start</h3>
        <p>
          Registre sua marca e garanta segurança e proteção para seu negócio.
        </p>
        <div class="plan-price-section__card__bottom">
          <p><strong>R$1.490,90</strong> (por processo)</p>
          <a href="#" @click="openFormNav($event)"
            >Escolher plano
            <img
              src="@/assets/images/svg/icons/icon_angle_right_grey.svg"
              alt="icon angle right grey"
          /></a>
        </div>
      </template>
    </PlanPriceSection>

    <section class="section-default tax-table-section">
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column--4 column-desktop--6">
            <div class="tax-table-section__table-wrapper">
              <h2>Tabela de taxas para Registro de Marca</h2>

              <div class="overflow-wrapper">
                <table class="tax-table-section__table-wrapper__table">
                  <thead>
                    <th></th>
                    <th>Com desconto</th>
                    <th>Sem desconto</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Entrada com o pedido</td>
                      <td>R$ 142,00</td>
                      <td>R$ 335,00</td>
                    </tr>
                    <tr>
                      <td>Certificado de aprovação</td>
                      <td>R$ 298,00</td>
                      <td>R$ 745,00</td>
                    </tr>
                    <tr>
                      <td>Renovação (a cada 10 anos)</td>
                      <td>R$ 426,00</td>
                      <td>R$ 1.065,00</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>R$ 866,00</td>
                      <td>R$ 2.165,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="content__column column--4 column-desktop--1 only-desktop"
          ></div>
          <div class="content__column column--4 column-desktop--5">
            <div class="tax-table-section__content">
              <h2>Taxas do Governo para Registro de Marcas</h2>
              <p>
                Na tabela ao lado as taxas não inclusas no valor pago à Sua Sede
                e devem ser pagas diretamente ao INPI ao longo do processo.
                Algumas categorias possuem descontos, como: ME, MEI, EPP, entre
                outras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSection @openFormNav="openFormNav($event)" />

    <FAQ @openFormNav="openFormNav($event)" :faqContent="faqContent" />

    <BlogSection sectionClass="section-default--full-padding-bottom" />
  </main>
</template>
<script>
import Banner from "@/presentation/modules/Banner.vue";
import Button from "@/presentation/components/Button.vue";
import MediaShape from "@/presentation/components/MediaShape.vue";
import FAQ from "../modules/FAQ.vue";
import PlanPriceSection from "@/presentation/modules/PlanPriceSection.vue";

import { Pagination, FreeMode } from "swiper";

import SocialProofSection from "../modules/SocialProofSection.vue";
import TestimonialsSection from "../modules/TestimonialsSection.vue";
import BlogSection from "../modules/BlogSection.vue";
import faq from "@/content/faq_registration.json";

export default {
  name: "app-trademaker-registration",

  data() {
    return {
      faqContent: faq,
    };
  },

  props: {
    viewMode: {
      type: String, // service-view || address-view
      required: false,
    },
  },

  components: {
    Banner,
    Button,
    MediaShape,
    FAQ,
    SocialProofSection,
    PlanPriceSection,
    TestimonialsSection,
    BlogSection,
  },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
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

  setup() {
    return {
      modules: [Pagination, FreeMode],
    };
  },
};
</script>
