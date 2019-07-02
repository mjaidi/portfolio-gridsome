<template>
  <Layout v-slot:default="slotLang">
    <Home v-bind:lang='slotLang.lang'/>
    <About v-bind:lang='slotLang.lang'/>
  </Layout>
</template>

<script>
  import About from '../components/About'
  import Home from '../components/Home'
  import Layout from '../layouts/Default'
export default {
  components: {
    Home,
    About,
    Layout
  },
  metaInfo: {
    title: 'Porfolio'
  }
}
</script>

