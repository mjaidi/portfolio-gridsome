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
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="project in projects" :key="project.node.id" @click='handleClick(project.node)'>
            <ProjectCard :project="project.node" />
          </v-flex>
        </v-layout row wrap>
      </v-container>
      <div class="my-spacer"></div>
    </div>

    <v-dialog v-model="dialog" max-width="1200" >
      <ProjectDetails v-bind:activeProject='activeProject' v-on:close='handleClose()' :class="{offsetWidth: (!isMobile && activeSidebar), dialogBg: true}"/>
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
  props: ["lang", 'isMobile', 'activeSidebar'],
  data: () => ({
    projects: null,
    dialog: false,
    activeProject: {title: null, images: [], website: null, tags: [], lang: 'en'},
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
      this.activeProject = {title: null, images: [], website: null, tags: [], lang: 'en'}
    },
    handleClick(object) {
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
  projects: allProject(filter: { published: { eq: true }}, sortBy: "order", order: ASC)
   {
    edges {
      node {
        id
        title
        lang
        content
        website
        date
        order
        tags {
          id
        }
        description
        images {
          image (width: 1000)
        }
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
