<template>
  <main class="tax-address">
    <Banner shapeColor="orange">
      <template v-slot:content
        ><h1>Endereço Virtual</h1>
        <p>Para quem está começando ou para quem está querendo destaque!</p>

        <div class="item-content">
          <div class="item-media">
            <img
              src="@/assets/images/svg/icons/icon_user_plus.svg"
              alt="Endereço virtual fiscal comercial em São Paulo"
            />
          </div>
          <div class="item-inner">
            <p>Ideal para indivíduos e pequenas empresas</p>
          </div>
        </div>
        <div class="item-content">
          <div class="item-media">
            <img
              src="@/assets/images/svg/icons/icon_chair-office.svg"
              alt="icon chair office"
            />
          </div>
          <div class="item-inner">
            <p>
              Acesso a mesas compartilhadas e salas de reunião em qualquer um
              dos endereços
            </p>
          </div>
        </div>
        <div class="item-content">
          <div class="item-media">
            <img
              src="@/assets/images/svg/icons/icon_handshake.svg"
              alt="icon handshake"
            />
          </div>
          <div class="item-inner">
            <p>Gestão de correspondência e atendimento telefônico</p>
          </div>
        </div>

        <!-- <div class="banner__card">
          <div class="banner__card__media">
            <img
              src="@/assets/images/webp/testimonial-image_example.webp"
              alt=""
            />
          </div>
          <div class="banner__card__inner">
            <p>
              Espaço super legal, bem organizado, limpo, silencioso e com
              atendimento incrível!”
            </p>
            <p><strong>Luciana Negreiros</strong></p>
          </div>
        </div> -->
      </template>
      <template v-slot:media>
        <img v-lazy="$getWebpUrl('banner-virtual_address')" />
      </template>
    </Banner>

    <section
      class="content-alternate-positions content-alternate-positions--no-margin-bottom section-default section-default--full-padding-top"
    >
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('tax_address-professional-address')"
                alt="Endereço profissional nas melhores regiões de São Paulo"
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
            <h3>Endereço profissional</h3>
            <p>
              A primeira impressão é a que fica! E nós temos a solução que você
              precisa. Endereço fiscal e comercial com gestão de
              correspondências nos melhores locais para você apresentar sua
              empresa de maneira profissional.
            </p>
            <Button @click="openFormNav($event)">
              Fale conosco e saiba mais!
            </Button>
          </div>
        </div>

        <div class="content__row flex-v-center text-right">
          <div class="content__column column-4 column-desktop--6">
            <h3>Estabeleça sua empresa em qualquer um dos nossos endereços</h3>
            <p>
              Encontre a localidade certa para a sua empresa. Temos endereços
              virtuais nas melhores regiões de São Paulo/capital.
            </p>
            <Button @click="openFormNav($event)">
              Fale conosco e saiba mais!
            </Button>
          </div>
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('tax_address-your_company_our_address')"
                alt="Atendimento telefônico incluso no plano de endereço virtual fiscal comercial"
                class="content-alternate-positions__media__image"
              />
              <MediaShape color="orange" top="-57px" left="37px" />
            </div>
          </div>
        </div>

        <div class="content__row flex-v-center no-pad-t">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('address-content-1')"
                alt="Localidade certa para sua empresa endereço virtual"
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
            <h3>Atendimento telefônico.</h3>
            <p>
              Já pensou ter um serviço de atendimento telefônico profissional
              para seu negócio? Atendemos as chamadas com o script da sua
              empresa e as redirecionamos para você onde e quando quiser.
            </p>
            <Button @click="openFormNav($event)">
              Fale conosco e saiba mais!
            </Button>
          </div>
        </div>

        <div class="content__row flex-v-center text-right">
          <div class="content__column column-4 column-desktop--6">
            <h3>Conheça nossos produtos avulsos</h3>
            <p>
              Precisa de algumas diárias no escritório físico ou alugar uma sala
              para uma reunião importante? Não há problema, na SuaSede você pode
              contar com isso a qualquer momento, fácil e simples.
            </p>
            <Button @click="openFormNav($event)">
              Fale conosco e saiba mais!
            </Button>
          </div>
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('address-content-2')"
                alt="Diárias escritório coworking salas de reunião alugue por hora"
                class="content-alternate-positions__media__image"
              />
              <MediaShape color="orange" top="-57px" left="37px" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-icon-columns section-default">
      <div class="container">
        <div class="content__row">
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_eye.svg"
                  alt="icon eye"
                />
              </div>
              <h3 class="content-icon-columns__item__title">Visibilidade</h3>
              <p class="content-icon-columns__item__text">
                Passe mais credibilidade e profissionalismo para seus clientes
                com um endereço comercial nas melhores localidades do Brasil.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_flash.svg"
                  alt="icon flash"
                />
              </div>
              <h3 class="content-icon-columns__item__title">Economia</h3>
              <p class="content-icon-columns__item__text">
                Passe mais credibilidade e profissionalismo para seus clientes
                com um endereço comercial nas melhores localidades do Brasil.
              </p>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div
              class="content-icon-columns__item content-icon-columns__item--purple"
            >
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon_clock.svg"
                  alt="icon clock"
                />
              </div>
              <h3 class="content-icon-columns__item__title">Tempo</h3>
              <p class="content-icon-columns__item__text">
                Economize seu tempo terceirizando o recebimento e organização de
                correspondências e atendimento telefônico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="plans-comparison section-default">
      <div class="container">
        <h2>Comparação entre os planos</h2>

        <CommonCarousel
          v-if="isMobile"
          viewMode="address-view"
          :spaceBetween="16"
        >
          <swiper-slide
            v-for="(plan, index) in plansContent"
            :key="index"
            class="slide"
          >
            <div class="swiper-wrapper__item">
              <div
                class="plans-comparison__card"
                :class="index == 1 ? 'plans-comparison__card--highlight' : ''"
              >
                <img
                  v-lazy="$getWebpUrl(plan.media)"
                  alt="Planos de endereço virtual fiscal comercial"
                />
                <h3 class="plans-comparison__card__title">{{ plan.title }}</h3>
                <p class="plans-comparison__card__text">
                  {{ plan.text }}
                </p>
                <p class="plans-comparison__card__price">
                  <strong>{{ plan.price }}</strong>
                </p>

                <div
                  v-for="(item, index) in plan.contentItems"
                  :key="index"
                  class="plans-comparison__card__content-item"
                >
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.content }}</p>
                </div>

                <Button @click="openFormNav($event)" type="tertiary-leaked">
                  Entre em contato
                </Button>

                <legend v-for="(item, index) in plan.legends" :key="index">
                  {{ item.text }}
                </legend>
              </div>
            </div>
          </swiper-slide>
        </CommonCarousel>

        <div v-else class="content__row">
          <div
            v-for="(plan, index) in plansContent"
            :key="index"
            class="content__column column--4 column-desktop--4"
          >
            <div
              class="plans-comparison__card"
              :class="index == 1 ? 'plans-comparison__card--highlight' : ''"
            >
              <img :src="$getWebpUrl(plan.media)" :alt="plan.media" />
              <h3 class="plans-comparison__card__title">{{ plan.title }}</h3>
              <p class="plans-comparison__card__text">
                {{ plan.text }}
              </p>
              <p class="plans-comparison__card__price">
                <strong>{{ plan.price }}</strong>
              </p>

              <div
                v-for="(item, index) in plan.contentItems"
                :key="index"
                class="plans-comparison__card__content-item"
              >
                <h4>{{ item.title }}</h4>
                <p>{{ item.content }}</p>
              </div>

              <Button @click="openFormNav($event)" type="tertiary-leaked">
                Entre em contato
              </Button>

              <legend v-for="(item, index) in plan.legends" :key="index">
                {{ item.text }}
              </legend>
            </div>
          </div>
        </div>
      </div>
    </section>

    <OurSolutionsSection />

    <FormSection />

    <HighlightAddressSection sectionClass="section-default--full-padding" />

    <FAQ
      sectionClass="section-default--no-padding-top section-default--full-padding-bottom"
      :faqContent="faqContent"
    />

    <BlogSection
      sectionClass="section-default--no-padding-top section-default--full-padding-bottom"
    />
  </main>
</template>
<script>
import M from "materialize-css";

import Banner from "@/presentation/modules/Banner.vue";
import Button from "@/presentation/components/Button.vue";
import MediaShape from "@/presentation/components/MediaShape.vue";
import OurSolutionsSection from "../modules/OurSolutionsSection.vue";
import HighlightAddressSection from "../modules/HighlightAddressSection.vue";
import FormSection from "../modules/FormSection.vue";
import FAQ from "../modules/FAQ.vue";

import { Pagination, FreeMode } from "swiper";

import CommonCarousel from "@/presentation/components/CommonCarousel.vue";

import "swiper/css";
import "swiper/css/pagination";

import { SwiperSlide } from "vue-awesome-swiper";

import content from "@/content/plans_comparison.json";
import faq from "@/content/faq_tax.json";
import BlogSection from "../modules/BlogSection.vue";

export default {
  name: "app-tax-address",

  props: {
    viewMode: {
      type: String, // service-view || address-view
      required: false,
    },
  },

  data() {
    return {
      plansContent: content,
      faqContent: faq,
    };
  },

  components: {
    Banner,
    Button,
    MediaShape,
    OurSolutionsSection,
    HighlightAddressSection,
    FormSection,
    FAQ,
    CommonCarousel,
    SwiperSlide,
    BlogSection,
  },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },

    closeFormNav(e) {
      e.preventDefault();

      var elem = this.$refs.contactNav.$refs.sidenav;

      const instance = M.Sidenav.getInstance(elem);
      instance.close();
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
