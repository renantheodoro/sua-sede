<template>
  <form @submit="sendEmail($event)" :id="formId" :ref="formId" class="forms">
    <div class="content__row">
      <div class="content__column column--4 column-desktop--6">
        <div
          class="input-field"
          :class="{
            success: form.fullName.isValid === true,
            error: form.fullName.isValid === false,
          }"
        >
          <input
            :id="`${formId}-full_name`"
            :ref="`${formId}-full_name`"
            v-model="form.fullName.value"
            type="text"
            :class="{
              success: form.fullName.isValid === true,
              error: form.fullName.isValid === false,
            }"
            @blur="
              visit('fullName');
              validateInputs();
            "
          />
          <label :for="`${formId}-full_name`" class="active"
            >Seu nome completo</label
          >
          <span v-if="form.fullName.isValid === false" class="helper-text">{{
            form.fullName.errorMessage
          }}</span>
        </div>

        <div
          class="input-field"
          :class="{
            success: form.phone.isValid === true,
            error: form.phone.isValid === false,
          }"
        >
          <input
            :id="`${formId}-phone_number`"
            :ref="`${formId}-phone_number`"
            type="text"
            v-model="form.phone.value"
            v-mask="['(##) ####-####', '(##) #####-####']"
            :class="{
              success: form.phone.isValid === true,
              error: form.phone.isValid === false,
            }"
            @blur="
              visit('phone');
              validateInputs();
            "
          />
          <label :for="`${formId}-phone_number`">Número de Telefone</label>
          <span v-if="form.phone.isValid === false" class="helper-text">{{
            form.phone.errorMessage
          }}</span>
        </div>

        <div
          class="input-field"
          :class="{
            success: form.company.isValid === true,
            error: form.company.isValid === false,
          }"
        >
          <input
            :id="`${formId}-company_name`"
            :ref="`${formId}-company_name`"
            v-model="form.company.value"
            type="text"
            :class="{
              success: form.company.isValid === true,
              error: form.company.isValid === false,
            }"
            @blur="
              visit('company');
              validateInputs();
            "
          />
          <label :for="`${formId}-company_name`">Nome da empresa</label>
          <span v-if="form.company.isValid === false" class="helper-text">{{
            form.company.errorMessage
          }}</span>
        </div>
      </div>

      <div class="content__column column--4 column-desktop--6">
        <div
          class="input-field"
          :class="{
            success: form.email.isValid === true,
            error: form.email.isValid === false,
          }"
        >
          <input
            :id="`${formId}-job_email`"
            :ref="`${formId}-job_email`"
            v-model="form.email.value"
            type="email"
            :class="{
              success: form.email.isValid === true,
              error: form.email.isValid === false,
            }"
            @blur="
              visit('email');
              validateInputs();
            "
          />

          <label :for="`${formId}-job_email`">E-mail de trabalho</label>
          <span v-if="form.email.isValid === false" class="helper-text">{{
            form.email.errorMessage
          }}</span>
        </div>

        <div
          class="input-field input-field--select"
          :class="{
            success: form.serviceInterest.isValid === true,
            error: form.serviceInterest.isValid === false,
          }"
        >
          <select
            :id="`${formId}-service_interest`"
            :ref="`${formId}-service_interest`"
            :class="`${formId}-select`"
            v-model="form.serviceInterest.value"
            @change="
              visit('serviceInterest');
              validateInputs();
            "
          >
            <option value="-1" disabled selected>-Escolher</option>
            <option value="alameda-santos">Alameda Santos</option>
            <option value="berrini">Berrini</option>
            <option value="vila-madalena">Vila Madalena</option>
          </select>
          <label>Local</label>
          <span
            v-if="form.serviceInterest.isValid === false"
            class="helper-text"
            >{{ form.serviceInterest.errorMessage }}</span
          >
        </div>

        <div
          class="input-field input-field--select"
          :class="{
            success: form.localInterest.isValid === true,
            error: form.localInterest.isValid === false,
          }"
        >
          <select
            :id="`${formId}-local_interest`"
            :ref="`${formId}-local_interest`"
            :class="`${formId}-select`"
            v-model="form.localInterest.value"
            @change="
              visit('localInterest');
              validateInputs();
            "
          >
            <option value="-1" disabled selected>-Escolher</option>
            <option value="endereco-virtual">Endereço Virtual</option>
            <option value="legalizacao">Legalização</option>
            <option value="contabilidade-digital">Contabilidade Digital</option>
            <option value="registro-de-marca">Registro de Marca</option>
          </select>
          <label>Tenho interesse em:</label>
          <span
            v-if="form.localInterest.isValid === false"
            class="helper-text"
            >{{ form.localInterest.errorMessage }}</span
          >
        </div>
      </div>
    </div>

    <div class="content__row">
      <div class="content__column column-4 column-desktop--12">
        <legend>
          Ao clicar no botão abaixo, estará de acordo com a nossa
          <a
            href="https://drive.google.com/file/d/1Ty7j_2R1CZKAAS965AOB1L5UolA6EIm3/view?usp=sharing"
            target="_blank"
            >Política de Privacidade</a
          >.
        </legend>

        <!-- <label>
          <input type="checkbox" class="filled-in" />
          <span class="checkbox-label"
            >Gostaria que a Sua Sede me enviasse e-mails com notícias e ofertas
            sobre os produtos e serviços da Sua Sede (e dos seus parceiros).
            Você pode cancelar a assinatura a qualquer momento utilizando o link
            no final de cada e‑mail.</span
          >
        </label> -->
      </div>
    </div>

    <div class="content__row flex-right">
      <ButtonSubmit :isEnabled="form.isValid">Enviar</ButtonSubmit>
    </div>
  </form>
</template>

<script>
import M from "materialize-css";
import ButtonSubmit from "@/presentation/components/ButtonSubmit.vue";
import { mask } from "vue-the-mask";

export default {
  name: "app-form",

  components: { ButtonSubmit },

  directives: { mask },

  props: {
    formId: {
      type: String,
      required: false,
      default: "view-form",
    },
  },

  data() {
    return this.getFormInitialValues();
  },

  methods: {
    getFormInitialValues() {
      return {
        form: {
          isValid: false,
          success: false,
          fail: false,
          fullName: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          phone: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          company: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          email: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          serviceInterest: {
            value: "-1",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          localInterest: {
            value: "-1",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
        },
      };
    },
    resetForm() {
      Object.assign(this.$data, this.getFormInitialValues());
    },

    visit(reference) {
      this.form[reference].isVisited = true;
    },

    validateNotEmpty(value) {
      return value !== null && value !== "";
    },

    validateEmail(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },

    validatePhone(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return new RegExp(
        /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/
      ).test(value);
    },

    validateSelect(value) {
      return value !== "" && value !== "-1" && value != "0";
    },

    checkForm() {
      if (
        this.form.fullName.isValid &&
        this.form.phone.isValid &&
        this.form.company.isValid &&
        this.form.email.isValid &&
        this.form.serviceInterest.isValid &&
        this.form.localInterest.isValid
      ) {
        this.form.isValid = true;
      } else {
        this.form.isValid = false;
      }
    },

    validateField({ reference, validateFunction, errorMessage }) {
      if (reference.isVisited) {
        if (validateFunction(reference.value)) {
          reference.isValid = true;
        } else {
          reference.isValid = false;
          reference.errorMessage = errorMessage;
        }
      }
    },

    validateInputs() {
      const requiredMessage = "Este campo é obrigatório e não pode estar vazio";
      const invalidPhone = "Telefone inválido";
      const invalidEmail = "E-mail inválido";

      this.validateField({
        reference: this.form.fullName,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.phone,
        validateFunction: this.validatePhone,
        errorMessage: invalidPhone,
      });

      this.validateField({
        reference: this.form.company,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.email,
        validateFunction: this.validateEmail,
        errorMessage: invalidEmail,
      });

      this.validateField({
        reference: this.form.serviceInterest,
        validateFunction: this.validateSelect,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.localInterest,
        validateFunction: this.validateSelect,
        errorMessage: requiredMessage,
      });

      this.checkForm();
    },

    sendEmail(e) {
      e.preventDefault();

      // envio aqui

      M.toast({
        html: `<img src="${this.$getSvgIconUrl('icon-paper_plane')}" /> <strong>Mensagem enviada! </strong> Em breve um dos nossos especialistas entrarão em contato com você!`,
      });

      // if (!this.form.isValid) return;
      // try {
      //   emailjs.send(
      //     "indfer_orcamento",
      //     "orcamento_template",
      //     {
      //       from_name: `${this.form.firstName.value} ${this.form.lastName.value}`,
      //       firstName: this.form.firstName.value,
      //       lastName: this.form.lastName.value,
      //       company: this.form.company.value,
      //       phone: this.form.phone.value,
      //       email: this.form.email.value,
      //       find: this.form.find.value,
      //       message: this.form.message.value,
      //       reply_to: "vendas@indfer.com.br",
      //     },
      //     "RgBnMm36ZWKMyXS5b"
      //   );
      //   this.resetForm();
      //   this.form.success = true;
      //   this.form.fail = false;
      // } catch (error) {
      //   console.error({ error });
      //   this.form.fail = true;
      //   this.form.success = false;
      // }
    },
  },

  mounted() {
    M.FormSelect.init(this.$refs[`${this.formId}-service_interest`]);
    M.FormSelect.init(this.$refs[`${this.formId}-local_interest`]);
  },

  unmounted() {
    if (this.$refs[`${this.formId}-service_interest`]) {
      const instance = M.FormSelect.getInstance(
        this.$refs[`${this.formId}-service_interest`]
      );
      instance.destroy();
    }
    if (this.$refs[`${this.formId}-local_interest`]) {
      const instance = M.FormSelect.getInstance(
        this.$refs[`${this.formId}-local_interest`]
      );
      instance.destroy();
    }
  },
};
</script>
<style lang=""></style>
