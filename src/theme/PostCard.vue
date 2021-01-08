<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="post.link" target="_blank"
        >Read More</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 40px;
  height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
