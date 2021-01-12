<template>
  <div class="content">
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
</template>

<script>
import * as networkService from '@_/network';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const authResponse = await networkService.login({
          username: this.username, //bill
          password: this.password //vuejs
        });
        window.localStorage.setItem('token', authResponse.token);
        window.localStorage.setItem('tokenExpiration', authResponse.expiration);
      } catch (error) {
        console.error(`ERROR HERE:: ${error.message}`);
        window.alert("Couldn't login");
      }
    }
  }
};
</script>
