<template>
  <v-card>
    <v-card-title class="headline">{{activeProject.title}}</v-card-title>
    <v-icon @click="$emit('close')" class="close-icon">mdi-close</v-icon>
    <LightGallery
      :images="activeProject.images.map(i => i.image.src)"
      :index="index"
      :disable-scroll="true"
      @close="index = null"
    />

    <v-carousel hide-delimiter-background :cycle="cycle" height="400" :continuous="false">
      <v-carousel-item v-for="(image, i) in activeProject.images" :key="i">
        <v-sheet height="100%" tile>
          <v-layout row wrap class="fill-height" align="center" justify="center">
            <v-icon @click="index = i" class="img-expand">open_with</v-icon>

            <img :src="image.image.src" alt class="project-dialog-image" />
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="project-subtitle" v-show="activeProject.website !== ''">
      <h3>Website</h3>
      <a :href="'http://' + activeProject.website" target="_blank">{{activeProject.website}}</a>
    </div>

    <div class="project-subtitle">
      <h3>Technology</h3>
      <div class="my-3 tag-wrapper">
        <span v-for="tag in activeProject.tags" :class="['tag', color(tag)]">{{tag.id}}</span>
      </div>
    </div>

    <div class="project-subtitle">
      <h3>Description</h3>
      <v-card-text v-html="activeProject.content"></v-card-text>
    </div>

    <v-card-actions>
      <div class="flex-grow-1"></div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  name: "ProjectDetails",
  props: ["activeProject"],
  data: () => ({
    cycle: false,
    index: null
  }),
  components: {
    LightGallery
  },
  methods: {
    color(tag) {
      switch (tag.id) {
        case "Ruby":
          return "red-tag";
        case "Rails":
          return "red-tag";
        case "Javascript":
          return "blue-tag";
        case "Vue.js":
          return "blue-tag";
        case "React":
          return "blue-tag";
        case "Jest":
          return "orange-tag";
        case "Minitest":
          return "orange-tag";
        case "Rspec":
          return "orange-tag";
        case "Postgres":
          return "green-tag";
        case "Heroku":
          return "green-tag";
        case "AWS":
          return "green-tag";
        case "Circle-Ci":
          return "green-tag";
        case "Netlify":
          return "green-tag";
        case "Wordpress":
          return "green-tag";
      }
    }
  }
};
</script>

