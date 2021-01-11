<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link :to="{ path: '/' }"
        ><img :src="imgSrc" alt="Vue SPA"
      /></router-link>
      <router-link to="/category/front-end" class="navbar-item is-tab" exact
        >Front-End</router-link
      >
      <router-link to="/category/movile" class="navbar-item is-tab" exact
        >Movile</router-link
      >
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
