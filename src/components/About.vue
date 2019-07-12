<template>
  <div id="about">
    <span class='before-title'></span><span class='vertical-title'></span><h1 class='page-title'>{{staticText.about.title}}</h1><span class='after-title'></span>
    <div class="flex-center">
      <h3 class='page-subtitle'>{{staticText.about.subtitle}}</h3>
    </div>
    <div class='about-section1'>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 md5>
            <img src="../../static/images/mj.jpeg" alt="" class='about-image'>
          </v-flex>
          <v-flex xs12 md7 class='flex-center'>
            <p class='about-text'>{{staticText.about.description}}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

  </div>
</template>

<script>
  import fr from '../localisation/fr.js'
  import en from '../localisation/en.js'

  export default {
    name: 'About',
    props: ['lang'],
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      },
    },
  }
</script>
