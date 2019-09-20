<template>
  <div id="contact">
    <span class="before-title"></span>
    <span class="vertical-title"></span>
    <h1 class="page-title">{{staticText.contact.title}}</h1>
    <span class="after-title"></span>
    <div class="flex-center">
      <h3 class="page-subtitle">{{staticText.contact.subtitle}}</h3>
    </div>
    <br />
    <br />
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md8 offset-md2>
          <form
            action="https://formspree.io/majidj.auto@gmail.com"
            method="POST"
            @submit="checkValid"
          >
            <input
              type="text"
              v-model.trim="$v.name.$model"
              name="name"
              placeholder="Name"
              :class="{ 'form-input-error': $v.name.$error }"
              @input="checkValid"
            />
            <div
              class="form-error"
              v-if="!$v.name.required && submitStatus === 'SUBMITING'"
            >Name is required</div>
            <div
              class="form-error"
              v-if="!$v.name.minLength"
            >Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

            <input
              type="text"
              v-model.trim="$v.email.$model"
              name="email"
              placeholder="Email"
              :class="{ 'form-input-error': $v.email.$error  }"
              @input="checkValid"
            />
            <div
              class="form-error"
              v-if="!$v.email.required && submitStatus === 'SUBMITING'"
            >Email is required</div>
            <div class="form-error" v-if="!$v.email.email">Email must be valid.</div>
            <input
              type="text"
              v-model.trim="$v.subject.$model"
              name="subject"
              placeholder="Subject"
              :class="{ 'form-input-error': $v.subject.$error  }"
              @input="checkValid"
            />

            <div
              class="form-error"
              v-if="!$v.subject.minLength"
            >Subject must have at least {{$v.subject.$params.minLength.min}} letters.</div>
            <textarea
              v-model.trim="$v.message.$model"
              name="message"
              placeholder="Message"
              @input="checkValid"
              :class="{ 'form-input-error': $v.message.$error  }"
            />
            <div
              class="form-error"
              v-if="!$v.message.required && submitStatus === 'SUBMITING'"
            >Message is required</div>
            <div
              class="form-error"
              v-if="!$v.message.minLength"
            >Message must have at least {{$v.message.$params.minLength.min}} letters.</div>
            <input
              type="hidden"
              name="_next"
              value="https://laughing-tesla-387176.netlify.com/#about"
            />
            <button type="submit" class="form-btn" :disabled="submitStatus === 'ERROR'">Send</button>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <section>
      <div class="footer">
        <h3>Made with</h3>
        <v-icon>mdi-heart</v-icon>
      </div>
    </section>
  </div>
</template>

<script>
import fr from "../localisation/fr.js";
import en from "../localisation/en.js";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  props: ["lang"],
  data: () => ({
    projects: null,
    name: "",
    email: null,
    subject: null,
    message: null,
    submitStatus: null
  }),
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    subject: {
      minLength: minLength(4)
    },
    message: {
      required,
      minLength: minLength(20)
    }
  },
  computed: {
    staticText() {
      if (this.lang === "en") return en;
      if (this.lang === "fr") return fr;
    }
  },
  methods: {
    checkValid(e) {
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        e.preventDefault();
      } else {
        this.submitStatus = "OK";
      }
      if (e.type === "submit") {
        this.submitStatus = "SUBMITING";
      }
    }
  }
};
</script>
