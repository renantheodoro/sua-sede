<template>
  <header class="header header--desktop only-desktop">
    <div class="container">
      <div class="content__column">
        <div class="content__row">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/images/svg/logo_main.svg" alt="Sua Sede"
          /></router-link>

          <div class="our-solutions-menu">
            <a
              href="#"
              @click="toggleSubMenu($event)"
              class="our-solutions-menu__link"
              >Nossas Soluções
              <span
                ><img
                  src="@/assets/images/svg/icons/icon_angle_down.svg"
                  alt="icon_angle_down"
                  :class="isSubMenuOpened ? 'flipped' : ''" /></span
            ></a>

            <nav v-if="isSubMenuOpened" class="our-solutions-menu__nav">
              <div class="wrapper">
                <div
                  class="content__column flex-column content__column--border-right"
                >
                  <h2 class="our-solutions-menu__nav__title">Serviços</h2>

                  <ul>
                    <li v-for="(item, index) in menuList" :key="index">
                      <router-link
                        :to="item.link"
                        @click="closeSubMenu($event)"
                      >
                        <span class="icon">
                          <img
                            :src="$getSvgIconUrl(item.icon)"
                            :alt="item.alt"
                          />
                        </span>
                        <div>
                          <h3>{{ item.name }}</h3>
                          <p>
                            {{ item.description }}
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <!-- <li>
                      <router-link
                        :to="{ name: 'legalization' }"
                        @click="closeSubMenu($event)"
                      >
                        <span class="icon">
                          <img
                            src="@/assets/images/svg/icons/icon_legalization.svg"
                            alt="Legalização"
                          />
                        </span>
                        <div>
                          <h3>Legalização</h3>
                          <p>
                            Apoio nos processos de legalização da sua empresa
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'accounting' }"
                        @click="closeSubMenu($event)"
                      >
                        <span class="icon">
                          <img
                            src="@/assets/images/svg/icons/icon_accounting_services.svg"
                            alt="Contabilidade Digital"
                          />
                        </span>
                        <div>
                          <h3>Contabilidade Digital</h3>
                          <p>Contabilidade sob medida para sua empresa.</p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        :to="{ name: 'trademark-registration' }"
                        @click="closeSubMenu($event)"
                      >
                        <span class="icon">
                          <img
                            src="@/assets/images/svg/icons/icon_trademark_registration.svg"
                            alt="Registro de Marca"
                          />
                        </span>
                        <div>
                          <h3>Registro de Marca</h3>
                          <p>Proteja sua empresa com registro no INPI</p>
                        </div>
                      </router-link>
                    </li> -->
                  </ul>
                </div>

                <div class="content__column flex-column">
                  <div class="our-solutions-menu__sidebar">
                    <h2 class="our-solutions-menu__sidebar__title">
                      Conheça nosso blog
                    </h2>

                    <a :href="blogContent[0].link" target="_blank"
                      ><img
                        v-lazy="$getWebpUrl(blogContent[0].image)"
                        alt="Saiba mais"
                      />

                      <span class="post-flag post-flag--orange">
                        {{ blogContent[0].category }}
                      </span>

                      <h3>
                        {{ blogContent[0].title }}
                      </h3>

                      <p>
                        {{ blogContent[0].resume }}
                      </p></a
                    >
                  </div>

                  <div class="flex-right text-right">
                    <a
                      href="https://www.coworkingsaopaulo.net/blog/"
                      target="_blank"
                      class="blog-section__link"
                    >
                      Acesse outros conteúdos
                      <img
                        src="@/assets/images/svg/icons/icon_arrow_right.svg"
                        alt="arrow right"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="content__column flex-v-center flex-right">
        <Button type="secondary" @click="openFormNav($event)"
          >Entre em contato</Button
        >
      </div>
    </div>
  </header>

  <header class="header header--mobile only-mobile">
    <div class="container">
      <div class="content__row flex-center flex-v-center">
        <div class="our-solutions-menu">
          <a
            @click="toggleSubMenu"
            class="our-solutions-menu__link"
            :class="{ open: isSubMenuOpened }"
          >
            <span class="hamburguer-icon"></span>
            <span class="hamburguer-icon"></span>
            <span class="hamburguer-icon"></span>
            <span class="hamburguer-icon"></span>
          </a>
        </div>

        <nav class="our-solutions-menu__nav" :class="{ open: isSubMenuOpened }">
          <h2 class="our-solutions-menu__nav__title">Serviços</h2>

          <ul>
            <li v-for="(item, index) in menuList" :key="index">
              <router-link :to="item.link" @click="closeSubMenu($event)">
                <span class="icon">
                  <img :src="$getSvgIconUrl(item.icon)" :alt="item.alt" />
                </span>
                <div>
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </nav>

        <router-link :to="{ name: 'home' }" @click="closeSubMenu($event)">
          <img src="@/assets/images/svg/logo_main.svg" alt="Sua Sede"
        /></router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Button from "@/presentation/components/Button.vue";

import blogContent from "@/content/blog_posts.json";

export default {
  name: "app-header",

  data() {
    return {
      isSubMenuOpened: false,
      blogContent: blogContent,

      menuList: [
        {
          name: "Endereço Fiscal",
          description:
            "Endereço nas melhores regiões para divulgar sua empresa.",
          link: { name: "tax-address" },
          icon: "icon_tax_address",
          alt: "Endereço fiscal",
        },
        {
          name: "Legalização",
          description: "Apoio nos processos de legalização da sua empresa",
          link: { name: "legalization" },
          icon: "icon_legalization",
          alt: "Legalização",
        },
        {
          name: "Contabilidade Digital",
          description: "Contabilidade sob medida para sua empresa.",
          link: { name: "accounting" },
          icon: "icon_accounting_services",
          alt: "Contabilidade Digital",
        },
        {
          name: "Registro de Marca",
          description: "Proteja sua empresa com registro no INPI.",
          link: { name: "trademark-registration" },
          icon: "icon_trademark_registration",
          alt: "Registro de Marca",
        },
      ],
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

  components: { Button },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },

    toggleSubMenu(e) {
      e.preventDefault();

      this.isSubMenuOpened = !this.isSubMenuOpened;
    },

    closeSubMenu(e) {
      if (e) {
        e.preventDefault();
      }

      this.isSubMenuOpened = false;
    },
  },

  mounted() {
    // close submenu on clickout
    const self = this;

    window.addEventListener("click", (e) => {
      if (
        e.target.closest(".our-solutions-menu") == null ||
        e.target.closest(".our-solutions-menu") == undefined
      ) {
        self.closeSubMenu();
      }
    });
  },
};
</script>
