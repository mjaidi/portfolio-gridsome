<template>
  <v-app>
    <Sidebar />
    <transition name="fade" appear>
      <main class="offset-width">
        <slot />
      </main>
    </transition>
  </v-app>
</template>

<script>
  import Sidebar from './navigation/Sidebar'
  export default {
    name: 'Default',
    components: {
      Sidebar,
    }
  }
</script>

<style>
  .offset-width {
    margin-left: 200px;
  }
  .fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
