<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        Check source code
        <a :href="gitSrc" target="_blank">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      gitSrc: 'https://github.com/carloscorti/vue-ssr'
    };
  }
};
</script>
