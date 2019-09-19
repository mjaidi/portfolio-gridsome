<template>
  <v-app>
    <Sidebar v-on:currentLanguage="currentLanguage" v-if="!isMobile" />
    <MobileMenu v-on:currentLanguage="currentLanguage" v-if="isMobile" />
    <transition name="fade" appear>
      <main :class="{offsetWidth: !isMobile}">
        <slot v-bind:lang="lang" v-bind:isMobile="isMobile"></slot>
      </main>
    </transition>
  </v-app>
</template>

<script>
import Sidebar from "./navigation/Sidebar";
import MobileMenu from "./navigation/MobileMenu";
export default {
  name: "Default",
  components: {
    Sidebar,
    MobileMenu
  },
  data: () => ({
    lang: "en",
    isMobile: false
  }),
  created() {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    this.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (typeof window !== `undefined`) {
        window.innerWidth < 1000
          ? (this.isMobile = true)
          : (this.isMobile = false);
      }
    },
    currentLanguage(lang) {
      this.lang = lang;
    }
  }
};
</script>

<style>
.offsetWidth {
  margin-left: 220px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
