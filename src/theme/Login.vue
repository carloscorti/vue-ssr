<template>
  <div class="content">
    <div v-if="isAuthenticated">
      <h1>Hello {{ profile.firstName }}¡¡¡¡ You are authenticated</h1>
      <p>Favorite sandwich {{ profile.favoriteSandwich }}</p>

      <button @click="logout()" class="button is-primary">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="username"
                class="input"
                type="text"
                placeholder="Your username"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="Your password"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button @click="login()" class="button is-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as networkService from '@_/network';
// import eventBus from '@_/event.bus';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      profile: {}
    };
  },
  methods: {
    ...mapActions(['setIsAuthenticatedAction']),
    async login() {
      try {
        const authResponse = await networkService.login({
          username: this.username, //bill
          password: this.password //vuejs
        });
        window.localStorage.setItem('token', authResponse.token);
        window.localStorage.setItem('tokenExpiration', authResponse.expiration);
        this.setIsAuthenticatedAction(true);
      } catch (error) {
        console.error(`ERROR HERE:: ${error.message}`);
        window.alert("Couldn't login");
      }
    },

    logout() {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('tokenExpiration');
      this.username = '';
      this.password = '';
      // this.isAuthenticated = false;
      this.setIsAuthenticatedAction(false);
    }
  },
  async created() {
    if (this.isAuthenticated) {
      this.profile = await networkService.getProfile();
    } else {
      this.profile = {};
    }
    //   let expiration = window.localStorage.getItem('tokenExpiration');
    //   const timeNow = new Date().getTime() / 1000;
    //   if (expiration !== null && parseInt(expiration) - timeNow > 0) {
    //     // this.isAuthenticated = true;
    //     this.setIsAuthenticated(true);
    //   }
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  watch: {
    async isAuthenticated(newValue, oldValue) {
      if (newValue) {
        this.profile = await networkService.getProfile();
      } else {
        this.profile = {};
      }
      // eventBus.$emit('authenticationUpdate', newValue);
      // this.setIsAuthenticated(newValue);
    }
  }
};
</script>
