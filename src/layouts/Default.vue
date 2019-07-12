<template>
  <v-app>
    <Sidebar v-on:currentLanguage='currentLanguage' v-if='!isMobile'/>
    <MobileMenu v-on:currentLanguage='currentLanguage' v-if='isMobile'/>
    <transition name="fade" appear>
      <main :class="{offsetWidth: !isMobile}">
        <slot v-bind:lang='lang' ></slot>
      </main>
    </transition>
  </v-app>
</template>

<script>
  import Sidebar from './navigation/Sidebar'
  import MobileMenu from './navigation/MobileMenu'
  export default {
    name: 'Default',
    components: {
      Sidebar,
      MobileMenu,
    },
    data: () => ({
      lang: 'en',
      isMobile: false,
    }),
    created() {
      window.addEventListener('resise', this.handleResize)
      this.handleResize()
    },
    destroyed() {
      this.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        window.innerWidth < 1000 ? this.isMobile = true : this.isMobile = false
      },
      currentLanguage(lang) {
        this.lang = lang
      }
    }
  }
</script>

<style>
  .offsetWidth {
    margin-left: 220px;
  }
  .fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
