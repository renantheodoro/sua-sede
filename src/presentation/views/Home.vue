<template>
  <main class="home">
    <Banner shapeColor="orange">
      <template v-slot:content
        ><h1>
          O crescimento da sua empresa passa por
          <strong class="text-purple">Sua Sede</strong>.
        </h1>
        <p>
          Não importa se você trabalha sozinho ou tem uma grande empresa, temos
          soluções personalizadas para todos os tipos de negócios.
        </p>
      </template>
      <template v-slot:button>
        <Button type="primary" @click="openFormNav($event)">
          Fale conosco hoje mesmo!
        </Button>
      </template>
      <template v-slot:media>
        <img
          v-lazy="$getWebpUrl('banner_home')"
          alt="Sua Sede melhores endereços virtual legalização contabilidade digital"
        />
      </template>
    </Banner>

    <SocialProofSection sectionClass="section-default--no-padding-bottom" />

    <OurSolutionsSection />

    <section
      class="content-alternate-positions section-default section-default--no-padding-top"
    >
      <div class="container"><h2>Porque escolher a gente</h2></div>
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                v-lazy="$getWebpUrl('why_us-professional_address')"
                alt="Endereço virtual fiscal comercial"
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
              Trabalhe do seu jeito, sem abrir mão de um endereço corporativo
            </h3>
            <p>
              Soluções inovadoras para apoiar o crescimento do seu negócio, nos
              melhores endereços, com o melhor custo-benefício, onde e quando
              você precisar.
            </p>
            <Button :link="{ name: 'tax-address' }"> Conheça mais </Button>
          </div>
        </div>

        <div class="content__row flex-v-center">
          <div class="content__column column-4 column-desktop--6">
            <h3>Apoio na formalização e contabilidade para seu negócio</h3>
            <p>
              Somos uma plataforma inovadora com soluções de retaguarda para a
              sua empresa. Foque no que realmente importa para o crescimento do
              seu negócio e deixe todas as burocracias com a nossa equipe!
            </p>
            <Button :link="{ name: 'legalization' }"> Conheça mais </Button>
          </div>
          <div class="content__column column-4 column-desktop--6">
            <div class="content-alternate-positions__media">
              <img
                src="@/assets/images/webp/why_us-support.webp"
                alt="Formalização legalização contabilidade para pequenas empresas"
                class="content-alternate-positions__media__image"
              />
              <MediaShape color="orange" top="-57px" left="37px" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormSection />

    <TestimonialsSection
      sectionClass="section-default--full-padding"
      @openFormNav="openFormNav($event)"
    />

    <HighlightAddressSection sectionClass="section-default--no-padding-top" />

    <BlogSection sectionClass="section-default--full-padding-bottom" />
  </main>
</template>
<script>
import Banner from "@/presentation/modules/Banner.vue";
import Button from "@/presentation/components/Button.vue";
import SocialProofSection from "@/presentation/modules/SocialProofSection.vue";
import MediaShape from "@/presentation/components/MediaShape.vue";
import FormSection from "@/presentation/modules/FormSection.vue";
import TestimonialsSection from "@/presentation/modules/TestimonialsSection.vue";
import OurSolutionsSection from "../modules/OurSolutionsSection.vue";
import HighlightAddressSection from "../modules/HighlightAddressSection.vue";
import BlogSection from "../modules/BlogSection.vue";

export default {
  name: "app-home",

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
    FormSection,
    TestimonialsSection,
    OurSolutionsSection,
    HighlightAddressSection,
    BlogSection,
  },
};
</script>
