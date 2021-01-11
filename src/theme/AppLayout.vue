<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@_/theme/Header.vue';
import Footer from '@_/theme/Footer.vue';

export default {
  name: 'AppLayout',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
};
</script>

<style lang="scss">
.columns {
  flex-wrap: wrap;
}
</style>
