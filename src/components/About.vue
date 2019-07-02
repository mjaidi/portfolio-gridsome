<template>
  <div>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div id="about"></div>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>About Text</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

        <!-- List posts -->
    <div class="posts">
      <ProjectCard v-for="edge in $static.projects.edges" :key="edge.node.id" :project="edge.node"/>
    </div>
  </div>
</template>

<script>
  import ProjectCard from './ProjectCard'
  export default {
    components: {
      ProjectCard
    },
    mounted() {
      console.log(this.$static)
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
          title
          path
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
