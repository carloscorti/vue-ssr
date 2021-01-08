<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <a href="/">
        <img :src="imgSrc" alt="Vue SPA" />
      </a>
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
