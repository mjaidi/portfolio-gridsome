<template>
  <v-app>
    <transition name="position">
      <Sidebar v-on:currentLanguage="currentLanguage" v-if="!isMobile && activeSidebar" />
    </transition>
    <MobileMenu v-on:currentLanguage="currentLanguage" v-show="isMobile" />
    <transition name="position">
      <v-btn
        v-if="!isMobile && activeSidebar"
        class="btn-sidebar btn-close-sidebar"
        @click="toggleSidebar()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </transition>
    <v-btn
      v-show="!isMobile && !activeSidebar"
      class="btn-sidebar btn-expand-sidebar"
      @click="toggleSidebar()"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>

    <transition name="slide">
      <main :class="{offsetWidth: !isMobile && activeSidebar}" id="main">
        <slot v-bind:lang="lang" v-bind:isMobile="isMobile" v-bind:activeSidebar="activeSidebar"></slot>
      </main>
    </transition>
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
      } else {
        this.isMobile = true;
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

.slide-enter,
.slide-leave {
  width: 0;
}
</style>
