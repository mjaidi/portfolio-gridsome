<template>
  <div id="contact">
    <span class='before-title'></span><span class='vertical-title'></span><h1 class='page-title'>{{staticText.contact.title}}</h1><span class='after-title'></span>
    <br><br><br>
    <g-image alt="Example image" src="~/favicon.png" width="135" />


    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

  </div>
</template>

<script>

  import fr from '../localisation/fr.js'
  import en from '../localisation/en.js'
  export default {
    props: ['lang'],
    data: () => ({
      projects: null,
    }),
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      },
    },
  }

</script>
