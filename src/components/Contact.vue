<template>
  <div id="contact">
    <span class="before-title"></span>
    <span class="vertical-title"></span>
    <h1 class="page-title">{{staticText.contact.title}}</h1>
    <span class="after-title"></span>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <h2 class="contact-subtitle">Get in touch</h2>
        </v-flex>
        <v-flex xs12 md6>
          <h2 class="contact-subtitle">Leave me a message</h2>
          <form action="https://formspree.io/majidj.auto@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" />
            <button type="submit" class="form-btn">Send</button>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import fr from "../localisation/fr.js";
import en from "../localisation/en.js";
export default {
  props: ["lang"],
  data: () => ({
    projects: null
  }),
  computed: {
    staticText() {
      if (this.lang === "en") return en;
      if (this.lang === "fr") return fr;
    }
  }
};
</script>
