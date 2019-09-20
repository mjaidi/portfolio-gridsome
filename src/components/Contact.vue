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
          <form action="https://formspree.io/majidj.auto@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" />
            <input
              type="hidden"
              name="_next"
              value="https://laughing-tesla-387176.netlify.com/#about"
            />
            <button type="submit" class="form-btn">Send</button>
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
