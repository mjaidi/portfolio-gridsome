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
    title: "Porfolio"
  }
};
</script>

