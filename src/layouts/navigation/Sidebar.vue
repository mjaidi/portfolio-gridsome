<template>
  <v-navigation-drawer permanent fixed width="200">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click='pushRoute(item.path)'
        :class="{isActive: item === activeItem}"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
  function elementInViewport(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }

    return (
      top >= window.pageYOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight)
    );
  }

  export default {
    name: 'Sidebar',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', path: '/#home', id:'home' },
          { title: 'About', icon: 'question_answer', path: '/#about', id:'about' }
        ],
        activeItem: null,
        right: true
      }
    },
    created() {
      document.addEventListener('scroll', this.handleScroll);
      this.activeItem = this.items[0]
    },
    destroyed() {
      document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      pushRoute(path) {
        this.$router.push({ path: path })
      },
      handleScroll() {
        this.items.find(item => {
          const el = document.getElementById(item.id);
          if(elementInViewport(el)) {
            this.activeItem = item;
          }
        })
      }
    }
  }
</script>

<style>
  .isActive {
    background: #ccc;
  }
  html {
    scroll-behavior: smooth;
  }
</style>
