<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ post.title }}</h3>
      {{ post.content }}
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
