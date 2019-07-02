<template>
  <Layout>
    <Home />
    <About />
  </Layout>
</template>

<script>
  import About from '../components/About'
  import Home from '../components/Home'
export default {
  components: {
    Home,
    About
  },
  metaInfo: {
    title: 'Porfolio'
  }
}
</script>

