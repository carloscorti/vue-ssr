<template>
  <section class="main-section section">
    <h1 v-if="page">Page {{ page }}</h1>
    <h1 v-else>Showing Query param</h1>
    <!-- <router-link :to="{ path: `/category/${id}`, query: { page: pageBack() } }"> -->
    <router-link
      :to="{
        name: 'post-list',
        params: { id: `${id}` },
        query: { page: pageBack() }
      }"
    >
      <button class="button is-primary">Page Back</button>
    </router-link>
    <router-link :to="{ path: `/category/${id}`, query: { page: pageUp() } }">
      <button class="button is-primary">Page Up</button>
    </router-link>
    <div class="container content">
      <div class="columns">
        <div class="column is-one-third" v-for="post in posts" :key="post.id">
          <post-card :post="post">
            <h3 slot="title" v-html="post.title.rendered"></h3>
            <span slot="content" v-html="post.content.rendered"></span>
          </post-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from '@_/theme/PostCard.vue';
import * as networkService from '@_/network';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PostList',
  // async asyncData(store, route) {
  //   // console.log(route.params.id);
  //   return await store.dispatch('postsModule/fetchPosts', route.params.id);
  // },
  async serverPrefetch() {
    await this.fetchPosts(this.id);
  },
  components: {
    'post-card': PostCard
  },
  props: {
    id: {
      type: String,
      validator: prop => {
        return ['movile', 'front-end'].includes(prop);
      }
    },
    page: {
      type: Number,
      default: 0
    }
  },

  async created() {
    // console.log('from postList created');
    await this.fetchPosts(this.id);
    // console.log(this.profile);
  },

  methods: {
    ...mapActions({
      fetchPosts: 'postsModule/fetchPosts'
    }),

    pageBack() {
      return this.page > 0 ? this.page - 1 : 0;
    },

    pageUp() {
      return this.page + 1;
    }
  },

  computed: {
    ...mapGetters({
      posts: 'postsModule/posts',
      profile: 'profile'
    })
  },

  watch: {
    async id(newValue, oldValue) {
      await this.fetchPosts(this.id);
    },
    '$route.query.page'(newValue, oldValue) {
      console.log(newValue);
    }
  }
};
</script>
