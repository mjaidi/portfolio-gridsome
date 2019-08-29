<template>
  <v-card>
    <v-card-title class="headline">{{activeProject.title}}</v-card-title>
    <v-icon @click="$emit('close')" class="close-icon">mdi-close</v-icon>
    <img :src="activeProject.coverImage.src" alt width="500" class="project-dialog-image" />

    <v-card-text v-html="activeProject.content"></v-card-text>

    <v-card-actions>
      <div class="flex-grow-1"></div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: ["activeProject"]
};
</script>

