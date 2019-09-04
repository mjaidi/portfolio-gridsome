<template>
  <v-card>
    <v-card-title class="headline">{{activeProject.title}}</v-card-title>
    <v-icon @click="$emit('close')" class="close-icon">mdi-close</v-icon>
    <v-carousel hide-delimiter-background :cycle="cycle" height="400" :continuous="false">
      <v-carousel-item v-for="(image, i) in activeProject.images" :key="i">
        <v-sheet  height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <img :src="image.image.src" alt class="project-dialog-image" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-card-text v-html="activeProject.content"></v-card-text>

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
    cycle: false,
  })
};
</script>

