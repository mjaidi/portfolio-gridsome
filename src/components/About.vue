<template>
  <div id="about">
    <span class='before-title'></span><span class='vertical-title'></span><h1 class='page-title'>{{staticText.about.title}}</h1><span class='after-title'></span>
    <div class="flex-center">
      <h3 class='page-subtitle'>{{staticText.about.subtitle}}</h3>
    </div>
    <div class='about-section1'>
      <v-container fluid>
        <v-layout wrap>
          <v-flex sm12 md5>
            <img src="../../static/images/mj.jpeg" alt="" class='about-image'>
            <div class="flex-center">
              <a class='social-link' href="http://www.github.com" target='_blank'><i class="fab fa-github"></i></a>
              <a class='social-link' href="http://www.github.com" target='_blank'><i class="fab fa-gitlab"></i></a>
              <a class='social-link' href="http://www.github.com" target='_blank'><i class="fab fa-linkedin"></i></a>
            </div>
          </v-flex>
          <v-flex sm12 md7 >
            <div class='flex-center flex-column'>
              <p class='about-text'>{{staticText.about.description}}</p>
              <h6 class='description-wrapper'><span class='description-title'><span class='description-bordered'>{{staticText.about.age}} :</span></span><span class='description-text'>{{myAge}}</span></h6>
              <h6 class='description-wrapper'><span class='description-title'><span class='description-bordered'>{{staticText.about.residence}} :</span></span><span class='description-text'>Casablanca, Morocco</span></h6>
              <h6 class='description-wrapper'><span class='description-title'><span class='description-bordered'>{{staticText.about.website}} :</span></span><span class='description-text'>www.website.io</span></h6>
              <h6 class='description-wrapper'><span class='description-title'><span class='description-bordered'>{{staticText.about.email}} :</span></span><span class='description-text'>majid.jaidi@gmail.com</span></h6>
              <h6 class='description-wrapper'><span class='description-title'><span class='description-bordered'>{{staticText.about.phone}} :</span></span><span class='description-text'>+212 663 33 44 44</span></h6>
              <div class="button-wrapper">
                <button class='btn contact-btn'>{{staticText.about.contact}}</button>
                <button class='btn cv-btn'>{{staticText.about.cv}}</button>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="about-section2">

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
      myAge() {
        const birthDate = new Date('02/09/1991')
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
      }
    },
  }
</script>
