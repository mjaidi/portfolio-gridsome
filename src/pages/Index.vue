<template>
  <v-app>
    <Layout v-slot:default="slotProps">
      <Home v-bind:lang="slotProps.lang" />
      <About v-bind:lang="slotProps.lang" />
      <Projects
        v-bind:lang="slotProps.lang"
        v-bind:isMobile="slotProps.isMobile"
        v-bind:activeSidebar="slotProps.activeSidebar"
      />
      <Contact v-bind:lang="slotProps.lang" />
    </Layout>
    <img src="../../static/images/mj-long.jpeg" alt class="d-none" />
  </v-app>
</template>

<script>
import About from "../components/About";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Layout from "../layouts/Default";
export default {
  components: {
    Home,
    About,
    Layout,
    Projects,
    Contact
  },

  metaInfo: {
    meta: [
      {
        property: "og:title",
        content: "Majid Jaidi's portfolio"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://www.mjaidi.com"
      },
      {
        property: "og:description",
        content: "A consise portfolio of some of my best work"
      },
      {
        property: "og:image",
        content: "https://www.mjaidi.com/assets/img/mj-long.jpeg"
      }
    ]
  }
};
</script>

