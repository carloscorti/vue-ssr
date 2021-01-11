<template>
  <div id="app">
    <app-header></app-header>

    <posts-list></posts-list>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@_/theme/Header.vue';
import Footer from '@_/theme/Footer.vue';
import PostList from '@_/theme/PostList.vue';

export default {
  name: 'AppLayout',
  components: {
    'app-header': Header,
    'app-footer': Footer
    'posts-list': PostList
  }
};
</script>

<style lang="scss">
.columns {
  flex-wrap: wrap;
}
</style>
