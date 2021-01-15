<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Header from '@_/theme/Header.vue';
import Footer from '@_/theme/Footer.vue';

export default {
  name: 'AppLayout',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    ...mapActions(['setIsAuthenticatedAction'])
  },
  created() {
    if (window) {
      let authenticationValue = false;
      const expiration = window.localStorage.getItem('tokenExpiration');
      const timeNow = new Date().getTime() / 1000;
      if (expiration !== null && parseInt(expiration) - timeNow > 0) {
        authenticationValue = true;
      }
      this.setIsAuthenticatedAction(authenticationValue);
    }
  }
};
</script>

<style lang="scss">
.columns {
  flex-wrap: wrap;
}
</style>
