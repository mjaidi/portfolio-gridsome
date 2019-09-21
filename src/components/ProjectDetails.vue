<template>
  <v-card>
    <v-card-title class="headline">{{activeProject.title}}</v-card-title>
    <v-icon @click="$emit('close')" class="close-icon">mdi-close</v-icon>
    <v-carousel hide-delimiter-background :cycle="cycle" height="400" :continuous="false">
      <v-carousel-item v-for="(image, i) in activeProject.images" :key="i">
        <v-sheet height="100%" tile>
          <v-layout row wrap class="fill-height" align="center" justify="center">
            <img :src="image.image.src" alt class="project-dialog-image" />
          </v-layout>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="project-subtitle" v-show="activeProject.website !== null">
      <h3>Website</h3>
      <a :href="'http://' + activeProject.website" target="_blank">{{activeProject.website}}</a>
    </div>

    <div class="project-subtitle">
      <h3>Technology</h3>
      <div class="my-4 tag-wrapper">
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
export default {
  name: "ProjectDetails",
  props: ["activeProject"],
  data: () => ({
    cycle: false
  }),
  methods: {
    color(tag) {
      switch (tag.id) {
        case "Ruby":
          return "red-tag";
          break;
        case "Rails":
          return "red-tag";
          break;
      }
    }
  }
};
</script>

