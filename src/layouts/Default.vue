<template>
  <v-app>
    <loading
      :active.sync="isLoading"
      :is-full-page="true"
      loader="dots"
      :height="100"
      background-color="#fff"
      :opacity="1"
      color="#E5BE24"
    ></loading>
    <Sidebar
      v-on:currentLanguage="currentLanguage"
      :class="{ visible: !isMobile && activeSidebar }"
    />
    <MobileMenu v-on:currentLanguage="currentLanguage" v-show="isMobile" />
    <v-btn
      :class="{
        'btn-sidebar': true,
        'btn-close-sidebar': true,
        visible: !isMobile && activeSidebar,
      }"
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

    <main :class="{ offsetWidth: !isMobile && activeSidebar, offset: true }">
      <slot
        v-bind:lang="lang"
        v-bind:isMobile="isMobile"
        v-bind:activeSidebar="activeSidebar"
        id="main"
      ></slot>
    </main>
    <v-btn
      class="btn-sidebar btn-scroll-sidebar"
      @click="scrollTop()"
      v-show="!isMobile"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Sidebar from "./navigation/Sidebar";
import MobileMenu from "./navigation/MobileMenu";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Default",
  components: {
    Sidebar,
    MobileMenu,
    Loading,
  },
  data: () => ({
    lang: "en",
    isMobile: false,
    activeSidebar: true,
    isLoading: true,
  }),

  mounted() {
    if (typeof window !== `undefined`) {
      window.addEventListener("resize", this.handleResize);
    }
    this.handleResize();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
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
        if (window.innerWidth < 1000) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      }
    },
    currentLanguage(lang) {
      this.lang = lang;
    },
  },
};
</script>

<style>
.offsetWidth {
  margin-left: 220px;
}
.offset {
  transition: all 0.3s ease-in;
}
</style>
