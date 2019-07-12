<template>
  <Layout v-slot:default="slotLang">
    <Home v-bind:lang='slotLang.lang'/>
    <About v-bind:lang='slotLang.lang'/>
    <Projects v-bind:lang='slotLang.lang'/>
    <Contact v-bind:lang='slotLang.lang'/>
  </Layout>
</template>

<script>
  import About from '../components/About'
  import Home from '../components/Home'
  import Projects from '../components/Projects'
  import Contact from '../components/Contact'
  import Layout from '../layouts/Default'
export default {
  components: {
    Home,
    About,
    Layout,
    Projects,
    Contact
  },
  metaInfo: {
    title: 'Porfolio'
  }
}
</script>

