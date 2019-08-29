<template>
  <div id="projects">
    <span class="before-title"></span>
    <span class="vertical-title"></span>
    <h1 class="page-title">{{staticText.projects.title}}</h1>
    <span class="after-title"></span>
    <div class="flex-center">
      <h3 class="page-subtitle">{{staticText.projects.subtitle}}</h3>
    </div>

    <!-- List posts -->
    <div class="project-cards">
      <div class="my-spacer"></div>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="project in projects" :key="project.node.id" @click='handleClick(project.node)'>
            <ProjectCard :project="project.node" />
          </v-flex>
        </v-layout row wrap>
      </v-container>
      <div class="my-spacer"></div>
    </div>

    <v-dialog v-model="dialog" max-width="1200" >
      <ProjectDetails v-bind:activeProject='activeProject' v-on:close='handleClose()' :class="{offsetWidth: !isMobile, dialogBg: true}"/>
    </v-dialog>

  </div>
</template>

<script>
import fr from "../localisation/fr.js";
import en from "../localisation/en.js";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

export default {
  components: {
    ProjectCard,
    ProjectDetails
  },
  props: ["lang", 'isMobile'],
  data: () => ({
    projects: null,
    dialog: false,
    activeProject: null,
  }),
  computed: {
    staticText() {
      if (this.lang === "en") return en;
      if (this.lang === "fr") return fr;
    }
  },
  methods: {
    handleClose() {
      this.dialog = false
    },
    handleClick(object) {
      console.log('clicked')
      this.dialog = true;
      this.activeProject = object;
    }
  },
  watch: {
    lang() {
      this.projects = this.$static.projects.edges.filter(
        e => e.node.lang === this.lang
      );
    }
  },
  mounted() {
    this.projects = this.$static.projects.edges.filter(
      e => e.node.lang === this.lang
    );
  }
};
</script>

<static-query>
query Projects{
  projects: allProject(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        lang
        content
        tags {
          id
        }
        description
        coverImage (width: 770, height: 380, blur: 10)
        ...on Project {
            id
            title
            path
        }
      }
    }
  }
}
</static-query>
