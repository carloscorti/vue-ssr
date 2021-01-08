<template>
  <section class="main-section section">
    <div class="container content">
      <div class="columns">
        <div class="column is-one-third" v-for="post in posts" :key="post.id">
          <post-card :post="post"></post-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from '@_/theme/PostCard.vue';

export default {
  name: 'PostList',
  components: {
    'post-card': PostCard
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>
