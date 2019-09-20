<template>
  <v-navigation-drawer permanent fixed width="220" id="sidebar">
    <div class="relative-sidebar">
      <div>
        <div class="avatar-wrapper">
          <img src="../../../static/images/myAvatar.png" class="avatar" alt />
        </div>
        <h4 class="title text-center">Majid Jaidi</h4>
      </div>

      <v-divider></v-divider>
      <div
        v-for="item in items"
        :key="item.id"
        @click="pushRoute(item.path)"
        :class="{isActive: item === activeItem, menu: true}"
      >
        <i :class="`fas ${ item.icon }`"></i>
        <p class="subtitle">{{ staticText.sidebar[item.title] }}</p>
      </div>

      <v-select
        class="language-changer"
        color="white"
        solo
        dark
        :items="languages"
        v-model="lang"
        @change="changeLanguage()"
        item-text="title"
        item-value="value"
        prepend-icon="map"
      ></v-select>
    </div>
  </v-navigation-drawer>
</template>


<script>
import fr from "../../localisation/fr.js";
import en from "../../localisation/en.js";
function elementInViewport(el) {
  if (typeof window !== `undefined`) {
    let bounding = el.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.top < window.innerHeight - window.innerHeight * 0.5
    ) {
      return true;
    }
    return false;
  }
}

export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "home", icon: "fa-home", path: "/#home", id: "home" },
        { title: "me", icon: "fa-user-circle", path: "/#about", id: "about" },
        {
          title: "portfolio",
          icon: "fa-suitcase",
          path: "/#projects",
          id: "projects"
        },
        {
          title: "contact",
          icon: "fa-envelope",
          path: "/#contact",
          id: "contact"
        }
      ],
      languages: [
        { title: "Français", value: "fr" },
        { title: "English", value: "en" }
      ],
      activeItem: null,
      right: true,
      lang: "en"
    };
  },
  computed: {
    staticText() {
      if (this.lang === "en") return en;
      if (this.lang === "fr") return fr;
    }
  },
  created() {
    if (typeof document !== `undefined`) {
      document.addEventListener("scroll", this.handleScroll);
      this.activeItem = this.items[0];
    }
  },
  destroyed() {
    if (typeof document !== `undefined`) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    changeLanguage() {
      this.$emit("currentLanguage", this.lang);
    },
    pushRoute(path) {
      this.$router.push({ path: path });
    },
    handleScroll() {
      if (typeof document !== `undefined`) {
        this.items.find(item => {
          const el = document.getElementById(item.id);
          if (elementInViewport(el)) {
            this.activeItem = item;
          }
        });
      }
    }
  }
};
</script>

