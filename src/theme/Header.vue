<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link :to="{ path: '/' }"
        ><img :src="imgSrc" alt="Vue SPA"
      /></router-link>
      <router-link to="/category/front-end" class="navbar-item is-tab"
        >Front-End</router-link
      >
      <router-link
        :to="{ name: 'post-list', params: { id: 'movile' } }"
        class="navbar-item is-tab"
        >Movile</router-link
      >
      <router-link to="/login" class="navbar-item is-tab">
        <span v-if="isAuthenticated">Logout</span>
        <span v-else>Login</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',

  data() {
    return {
      imgSrc: 'http://bit.ly/vue-img'
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>
