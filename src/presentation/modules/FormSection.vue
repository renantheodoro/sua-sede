<template>
  <section class="form-section">
    <div class="container">
      <div class="content__row">
        <div class="content__column column-desktop--1 only-desktop"></div>
        <div class="content__column column--4 column-desktop--10">
          <div class="form-section__wrapper">
            <h2>Encontre a solução ideal para você</h2>
            <p>
              Preencha o formulário e um membro da nossa equipe entrará em
              contato com você em breve!
            </p>

            <Form></Form>
          </div>
        </div>
        <div class="content__column column-desktop--1 only-desktop"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Form from "@/presentation/components/Form.vue";

export default {
  name: "app-form-section",

  components: { Form },
};
</script>
