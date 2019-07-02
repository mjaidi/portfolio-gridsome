<template>
  <v-app>
    <Sidebar v-on:currentLanguage='currentLanguage'/>
    <transition name="fade" appear>
      <main class="offset-width">
        <slot v-bind:lang='lang'></slot>
      </main>
    </transition>
  </v-app>
</template>

<script>
  import Sidebar from './navigation/Sidebar'
  export default {
    name: 'Default',
    components: {
      Sidebar,
    },
    data: () => ({
      lang: 'en'
    }),
    methods: {
      currentLanguage(lang) {
        this.lang = lang
      }
    }
  }
</script>

<style>
  .offset-width {
    margin-left: 200px;
  }
  .fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
