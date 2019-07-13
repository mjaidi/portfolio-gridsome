<template>
  <div class='full-height' id='home'>
    <div class="profile text-center">
      <img src="../../static/images/photo.jpg" class="profile-photo" alt="">
      <h1 class='profile-title'>Majid <span class='text-yellow'>Jaidi</span></h1>
<!--       <vue-typed-js :stringsElement="'typed1'" v-if='showTyped' :strings="[staticText.home.sub1, staticText.home.sub2]" :loop="true" :cursorChar="''" :typeSpeed="100" >
          <p class='profile-subtitle'><span class='text-yellow'>{{staticText.home.sub_start}} </span> <span class="typing"></span></p>
      </vue-typed-js> -->
    </div>
  </div>
</template>

<script>
  import fr from '../localisation/fr.js'
  import en from '../localisation/en.js'

  export default {
    name: 'Home',
    props: ['lang'],
    data: () => ({
      showTyped: true
    }),
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      },
    },
    watch: {
      lang() {
        this.showTyped = false
        setTimeout(() => {
          this.showTyped = true
        }, 1)
      }
    },
  }
</script>
