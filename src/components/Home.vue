<template>
  <div class='full-height' id='home'>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>{{staticText.home.title}}</h1>

    <p>
      {{staticText.home.name}}
    </p>



  </div>
</template>

<script>
  import fr from '../localisation/fr.js'
  import en from '../localisation/en.js'

  export default {
    name: 'Home',
    props: ['lang'],
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      }
    }
  }
</script>
<style>
  .full-height {
    height: 100vh;
  }
</style>
