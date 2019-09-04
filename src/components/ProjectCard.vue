<template>
  <div class="project-card-wrapper">
    <div
      class="project-card"
      :style="style"
      @mouseover="hoveringToggle(true)"
      @mouseout="hoveringToggle(false)"
    >
      <div class="project-overlay" @mouseover="hoveringToggle(true)">
        <div class="title" @mouseover="hoveringToggle(true)">{{project.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data: () => ({
    hovering: false
  }),
  computed: {
    style() {
      if (this.hovering) {
        return `background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${this.project.images[0].preview.src})`;
      } else {
        return `background-image: url(${this.project.images[0].preview.src})`;
      }
    }
  },
  methods: {
    hoveringToggle(status) {
      this.hovering = status;
    }
  }
};
</script>
