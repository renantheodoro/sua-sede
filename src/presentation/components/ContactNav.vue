<template>
  <div ref="sidenav" id="slide-out" class="sidenav">
    <div class="sidenav__header">
      <div class="sidenav__header__content">
        <h2 class="only-desktop">
          Preencha o formulário e faça o orçamento para sua empresa
        </h2>
        <h2 class="only-mobile">Encontre a solução ideal para você</h2>
        <p class="only-mobile">
          Preencha o formulário e um membro da nossa equipe irá entrar em
          contato com você em breve!
        </p>
      </div>
      <a href="#" @click.prevent="closeFormNav($event)" class="sidenav__header__close only-mobile">
        <img src="@/assets/images/svg/icons/icon_close_purple.svg" alt="icon_close_purple" />
      </a>
    </div>
    <Form formId="contact-nav-form"></Form>
  </div>
</template>
<script>
import M from "materialize-css";
import Form from "@/presentation/components/Form.vue";
export default {
  name: "app-contact-nav",

  components: { Form },

  data() {
    return { materializeInstance: null };
  },

  methods: {
    closeFormNav(event) {
      this.$emit("closeFormNav", event);
    },
  },

  mounted() {
    var elems = this.$refs.sidenav;
    this.materializeInstance = M.Sidenav.init(elems, {
      edge: "right",
    });
  },

  unmounted() {
    this.materializeInstance.destroy();
  },
};
</script>
<style lang=""></style>
