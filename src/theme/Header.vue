<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link :to="{ name: 'post-list' }"
        ><img :src="imgSrc" alt="Vue SPA"
      /></router-link>
      <router-link to="/" class="navbar-item is-tab" exact>Home</router-link>
      <router-link to="/login" class="navbar-item is-tab" exact
        >Login</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      imgSrc: 'http://bit.ly/vue-img'
    };
  }
};
</script>
