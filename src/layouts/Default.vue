<template>
  <v-app>
    <Sidebar v-on:currentLanguage="currentLanguage" :class="{visible: !isMobile && activeSidebar}" />
    <MobileMenu v-on:currentLanguage="currentLanguage" v-show="isMobile" />
    <v-btn
      :class="{'btn-sidebar':true, 'btn-close-sidebar': true, visible: (!isMobile && activeSidebar)}"
      @click="toggleSidebar()"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn
      v-show="!isMobile && !activeSidebar"
      class="btn-sidebar btn-expand-sidebar"
      @click="toggleSidebar()"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>

    <main :class="{offsetWidth: !isMobile && activeSidebar}" id="main">
      <slot v-bind:lang="lang" v-bind:isMobile="isMobile" v-bind:activeSidebar="activeSidebar"></slot>
    </main>
    <v-btn class="btn-sidebar btn-scroll-sidebar" @click="scrollTop()" v-show="!isMobile">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
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
    isMobile: false,
    activeSidebar: true
  }),
  created() {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", this.handleResize);
    }
    this.isMobile = true;
    this.activeSidebar = true;
    this.handleResize();
  },
  destroyed() {
    this.removeEventListener("resize", this.handleResize);
  },
  methods: {
    scrollTop() {
      if (typeof window !== `undefined`) {
        window.scrollTo(0, 0);
      }
    },
    toggleSidebar() {
      this.activeSidebar = !this.activeSidebar;
    },
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
</style>
