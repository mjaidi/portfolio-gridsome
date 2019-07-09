<template>
  <div class='full-height' id='home'>
    <div class="profile text-center">
      <img src="../../static/images/mj.jpeg" class="profile-photo" alt="">
      <h1 class='profile-title'>{{staticText.home.title}}</h1>
      <vue-typer class='profile-subtitle' v-if='sub1' name='sub1' :text='staticText.home.sub1' @erased='onComplete("sub1")' erase-style='clear'></vue-typer>
      <vue-typer class='profile-subtitle' v-if='sub2' name='sub2' :text='staticText.home.sub2' @erased='onComplete("sub2")' erase-style='clear'></vue-typer>
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
      sub1: true,
      sub2: false
    }),
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      }
    },
    methods: {
      onComplete(sub) {
        if (sub === 'sub1') {
          this.sub1 = false
          this.sub2 = true
        } else if (sub === 'sub2') {
          this.sub2 = false
          this.sub1 = true
        }
      }
    }
  }
</script>
