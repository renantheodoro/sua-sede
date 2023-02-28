<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>
  <Header @openFormNav="openFormNav($event)"></Header>
  <router-view @openFormNav="openFormNav($event)"></router-view>
  <Footer  @openFormNav="openFormNav($event)"></Footer>

  <ContactNav @closeFormNav="closeFormNav($event)" ref="contactNav"> </ContactNav>
</template>

<script>
import M from "materialize-css";

import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";
import ContactNav from "./presentation/components/ContactNav.vue";

export default {
  name: "App",

  methods: {
    openFormNav(e) {
      e.preventDefault();

      var elem = this.$refs.contactNav.$refs.sidenav;

      const instance = M.Sidenav.getInstance(elem);
      instance.open();
    },

    closeFormNav(e) {
      e.preventDefault();

      var elem = this.$refs.contactNav.$refs.sidenav;

      const instance = M.Sidenav.getInstance(elem);
      instance.close();
    },
  },

  components: {
    Header,
    Footer,
    ContactNav,
  },
};
</script>
