<template>
  <div id='mobile-menu'>
    <div>
      <div class='avatar-wrapper'>
        <img src="../../../static/images/myAvatar.png" class='avatar' alt="">
        <h4 class="title-sidebar">
          Majid Jaidi
        </h4>
      </div>
    </div>
    <div>
      <v-menu
        :close-on-content-click="false"
        transition="slide-x-transition"
        fixed
        top
        v-model='active'
      >
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>menu</v-icon>
          </v-btn>
        </template>

            <div
              v-for="item in items"
              :key="item.title"
              @click='pushRoute(item.path)'
              :class="{isActive: item === activeItem, menu: true}"
            >
              <i :class='`fas ${ item.icon }`'></i>
              <p class='subtitle'>{{ staticText.sidebar[item.title] }}</p>
            </div>
            <br><br>
          <v-select class="language-changer" color='white' solo dark :items='languages' v-model='lang' @change='changeLanguage()' item-text='title' item-value='value' prepend-icon="map"></v-select>
      </v-menu>
    </div>
  </div>
</template>

<script>

  import fr from '../../localisation/fr.js'
  import en from '../../localisation/en.js'
  function elementInViewport(el) {
    let bounding = el.getBoundingClientRect();
    if ( bounding.top >= 0 && bounding.top < window.innerHeight - window.innerHeight * 0.5) {
      return true
    }
    return false
  }

  export default {
    name: 'MobileMenu',
    data () {
      return {
        items: [
          { title: 'home', icon: 'fa-home', path: '/#home', id:'home' },
          { title: 'me', icon: 'fa-user-circle', path: '/#about', id:'about' },
          { title: 'portfolio', icon: 'fa-suitcase', path: '/#projects', id:'projects' },
          { title: 'contact', icon: 'fa-envelope', path: '/#contact', id:'contact' }
        ],
        languages: [{title: 'Français', value: 'fr'}, {title: 'English', value: 'en'}],
        activeItem: null,
        right: true,
        lang: 'en',
        active: false,
      }
    },
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      }
    },
    created() {
      document.addEventListener('scroll', this.handleScroll);
      this.activeItem = this.items[0]
    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      changeLanguage() {
        this.$emit('currentLanguage', this.lang)
      },
      pushRoute(path) {
        this.active = false
        this.$router.push({ path: path })
      },
      handleScroll() {
        this.items.find(item => {
          const el = document.getElementById(item.id);
          if(elementInViewport(el)) {
            this.activeItem = item;
          }
        })
      }
    }
  }
</script>

<style>
  #mobile-menu {
    z-index: 2000;
  }
</style>
