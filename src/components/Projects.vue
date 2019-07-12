<template>
  <div id="projects">
    <span class='before-title'></span><span class='vertical-title'></span><h1 class='page-title'>{{staticText.projects.title}}</h1><span class='after-title'></span>


    <br><br><br><br><br><br>

        <!-- List posts -->
    <div class="posts">
      <ProjectCard v-for="project in projects" :key="project.node.id" :project="project.node"/>
    </div>
  </div>
</template>

<script>
  import fr from '../localisation/fr.js'
  import en from '../localisation/en.js'
  import ProjectCard from './ProjectCard'

  export default {
    components: {
      ProjectCard,
    },
    props: ['lang'],
    data: () => ({
      projects: null,
    }),
    computed: {
      staticText() {
        if (this.lang === 'en') return en
        if (this.lang === 'fr') return fr
      },
    },
    watch: {
      lang() {
        this.projects = this.$static.projects.edges.filter(e => e.node.tags[0].id === this.lang)
      }
    },
    mounted() {
      this.projects = this.$static.projects.edges.filter(e => e.node.tags[0].id === this.lang)
    }
  }
</script>

<static-query>
query {
  projects: allProject(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        tags {
          id
        }
        date (format: "D. MMMM YYYY")
        timeToRead
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
