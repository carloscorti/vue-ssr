<template>
  <section class="main-section section">
    <h1 v-if="page">Page {{ page }}</h1>
    <h1 v-else>Showing Query param</h1>
    <!-- <router-link :to="{ path: `/category/${id}`, query: { page: pageBack() } }"> -->
    <router-link
      :to="{
        name: 'post-list',
        params: { id: `${id}` },
        query: { page: pageBack() }
      }"
    >
      <button>Page Back</button>
    </router-link>
    <router-link :to="{ path: `/category/${id}`, query: { page: pageUp() } }">
      <button>Page Up</button>
    </router-link>
    <div class="container content">
      <div class="columns">
        <div class="column is-one-third" v-for="post in posts" :key="post.id">
          <post-card :post="post">
            <h3 slot="title" v-html="post.title.rendered"></h3>
            <span slot="content" v-html="post.content.rendered"></span>
          </post-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostCard from '@_/theme/PostCard.vue';
import * as networkService from '@_/network';

// const postsFrontEnd = [
//   {
//     id: 1,
//     title: 'PWA Stats',
//     content:
//       'A community-driven list of stats and news related to Progressive Web Apps',
//     link: 'https://www.pwastats.com/',
//   },
//   {
//     id: 2,
//     title: 'A Comprehensive Guide To HTTP/2 Server Push',
//     content:
//       'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!',
//     link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/',
//   },
//   {
//     id: 3,
//     title: 'So what’s this GraphQL thing I keep hearing about?',
//     content:
//       'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.',
//     link:
//       'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf',
//   },
// ];
// const postsMovile = [
//   {
//     id: 4,
//     title: 'State of The Mobile Gap Between Native and Web',
//     content:
//       'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?',
//     link: 'https://remysharp.com/2016/05/28/state-of-the-gap',
//   },
//   {
//     id: 5,
//     title: 'Learning JavaScript Design Patterns',
//     content:
//       'Design patterns are reusable solutions to commonly occurring problems in software design.',
//     link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
//   },
//   {
//     id: 6,
//     title: 'The Power of Custom Directives in Vue',
//     content:
//       "The beautiful thing about Vue is that it's incredibly feature-rich.",
//     link: 'https://css-tricks.com/power-custom-directives-vue/',
//   },
// ];
const errorPost = [
  {
    id: 0,
    title: { rendered: "Opss can't recognize that" },
    content: { rendered: 'Please select one tag from nav bar' },
    rest_api_enabler: { Link: '/#' }
  }
];

export default {
  name: 'PostList',
  components: {
    'post-card': PostCard
  },
  props: {
    id: {
      type: String,
      validator: prop => {
        return ['movile', 'front-end'].includes(prop);
      }
    },
    page: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      postsFrontEnd: [],
      postsMovile: []
      // posts: [],
    };
  },
  async created() {
    this.postsFrontEnd = await networkService.getPosts(2);
    this.postsMovile = await networkService.getPosts(11);
    // switch (this.id) {
    //   case 'movile':
    //     this.posts = await networkService.getPosts(11);
    //     break;
    //   case 'front-end':
    //     this.posts = await networkService.getPosts(2);
    //     break;
    //   default:
    //     this.posts = errorPost;
    //     return;
    // }
  },
  methods: {
    pageBack() {
      return this.page > 0 ? this.page - 1 : 0;
    },
    pageUp() {
      return this.page + 1;
    }
  },
  computed: {
    posts() {
      switch (this.id) {
        case 'movile':
          return this.postsMovile;
        case 'front-end':
          return this.postsFrontEnd;
        default:
          return errorPost;
      }
    }
  },
  watch: {
    // async id(newValue, oldValue) {
    //   console.log(`id prop has change::  from: ${oldValue} --> to:${newValue}`);
    //   switch (newValue) {
    //     case 'movile':
    //       this.posts = await networkService.getPosts(11);
    //       break;
    //     case 'front-end':
    //       this.posts = await networkService.getPosts(2);
    //       break;
    //     default:
    //       this.posts = errorPost;
    //       return;
    //   }
    // },
    '$route.query.page'(newValue, oldValue) {
      console.log(newValue);
    }
  }
};
</script>
