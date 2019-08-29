<template>
  <div id="about">
    <span class="before-title"></span>
    <span class="vertical-title"></span>
    <h1 class="page-title">{{staticText.about.title}}</h1>
    <span class="after-title"></span>
    <div class="flex-center">
      <h3 class="page-subtitle">{{staticText.about.subtitle}}</h3>
    </div>
    <div class="about-section1">
      <v-container fluid>
        <v-layout wrap>
          <v-flex sm12 md5>
            <img src="../../static/images/mj.jpeg" alt class="about-image" />
            <div class="flex-center">
              <a class="social-link" href="http://www.github.com" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-link" href="http://www.github.com" target="_blank">
                <i class="fab fa-gitlab"></i>
              </a>
              <a class="social-link" href="http://www.github.com" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </v-flex>
          <v-flex sm12 md7>
            <div class="flex-center flex-column">
              <p class="about-text">{{staticText.about.description}}</p>
              <h6 class="description-wrapper">
                <span class="description-title">
                  <span class="description-bordered">{{staticText.about.age}} :</span>
                </span>
                <span class="description-text">{{myAge}}</span>
              </h6>
              <h6 class="description-wrapper">
                <span class="description-title">
                  <span class="description-bordered">{{staticText.about.residence}} :</span>
                </span>
                <span class="description-text">Casablanca, Morocco</span>
              </h6>
              <h6 class="description-wrapper">
                <span class="description-title">
                  <span class="description-bordered">{{staticText.about.website}} :</span>
                </span>
                <span class="description-text">www.website.io</span>
              </h6>
              <h6 class="description-wrapper">
                <span class="description-title">
                  <span class="description-bordered">{{staticText.about.email}} :</span>
                </span>
                <span class="description-text">majid.jaidi@gmail.com</span>
              </h6>
              <h6 class="description-wrapper">
                <span class="description-title">
                  <span class="description-bordered">{{staticText.about.phone}} :</span>
                </span>
                <span class="description-text">+212 663 33 44 44</span>
              </h6>
              <div class="button-wrapper">
                <button class="btn contact-btn">{{staticText.about.contact}}</button>
                <button class="btn cv-btn">{{staticText.about.cv}}</button>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="about-section2">
      <v-container>
        <v-layout wrap>
          <v-flex xs12 md4>
            <div class="header-wrapper">
              <i class="fas fa-graduation-cap"></i>
              <h2>
                <span class="header-title">{{staticText.about.education}}</span>
              </h2>
            </div>
            <div class="info-wrapper">
              <h4 class="info-title">{{staticText.about.wagonTitle}}</h4>
              <h4 class="info-content">{{staticText.about.wagonContent}}</h4>
              <h4 class="info-title">{{staticText.about.epflTitle}}</h4>
              <h4 class="info-content">{{staticText.about.epflContent}}</h4>
              <h4 class="info-title">{{staticText.about.hopkinsTitle}}</h4>
              <h4 class="info-content">{{staticText.about.hopkinsContent}}</h4>
            </div>
          </v-flex>
          <v-flex xs12 md5>
            <div class="header-wrapper">
              <i class="fas fa-suitcase"></i>
              <h2>
                <span class="header-title">{{staticText.about.experience}}</span>
              </h2>
            </div>
            <div class="info-wrapper">
              <h4 class="info-title">{{staticText.about.freelanceTitle}}</h4>
              <h4 class="info-content">{{staticText.about.freelanceContent}}</h4>
              <h4 class="info-title">{{staticText.about.patibisTitle}}</h4>
              <h4 class="info-content">{{staticText.about.patibisContent}}</h4>
              <h4 class="info-title">{{staticText.about.pwcTitle}}</h4>
              <h4 class="info-content">{{staticText.about.pwcContent}}</h4>
            </div>
          </v-flex>
          <v-flex xs12 md3>
            <div class="header-wrapper">
              <i class="fas fa-code"></i>
              <h2 class="margin-bottom-0">
                <span class="header-title">{{staticText.about.skills}}</span>
              </h2>
              <v-container fluid class="container-min-padding">
                <v-layout wrap>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Ruby</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(80)}"
                        role="progressbar"
                        v-bind:style="{ width: 80 + '%' }"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Rails</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(90)}"
                        role="progressbar"
                        v-bind:style="{ width: 90 + '%' }"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Vue.js</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(80)}"
                        role="progressbar"
                        v-bind:style="{ width: 80 + '%' }"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">React.js</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(50)}"
                        role="progressbar"
                        v-bind:style="{ width: 50 + '%' }"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">AWS</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(30)}"
                        role="progressbar"
                        v-bind:style="{ width: 30 + '%' }"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Heroku</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(70)}"
                        role="progressbar"
                        v-bind:style="{ width: 70 + '%' }"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Filemaker</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(90)}"
                        role="progressbar"
                        v-bind:style="{ width: 90 + '%' }"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">Javascript</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(85)}"
                        role="progressbar"
                        v-bind:style="{ width: 85 + '%' }"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">HTML</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(85)}"
                        role="progressbar"
                        v-bind:style="{ width: 85 + '%' }"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                  <v-flex xs6 class="skills-wrapper">
                    <h4 class="skills-title">CSS</h4>
                    <div class="with-border">
                      <div
                        :class="{'progress-bar': true, 'progress-bar-animated': true, 'left-border': true, 'right-border': completionRate(85)}"
                        role="progressbar"
                        v-bind:style="{ width: 85 + '%' }"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >.</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import fr from "../localisation/fr.js";
import en from "../localisation/en.js";

export default {
  name: "About",
  props: ["lang"],
  computed: {
    staticText() {
      if (this.lang === "en") return en;
      if (this.lang === "fr") return fr;
    },
    myAge() {
      const birthDate = new Date("02/09/1991");
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  methods: {
    completionRate(value) {
      return value > 95;
    }
  }
};
</script>
