<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <footer class="card-footer">
      <a
        class="card-footer-item"
        :href="post.rest_api_enabler.Link"
        target="_blank"
        >Read More</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      validator: prop => {
        return Object.entries(prop).every(value => {
          switch (value[0]) {
            case 'id':
              return typeof value[1] === 'number' && value[1] >= 0;
            // case 'rest_api_enabler':
            //   return typeof value[1].Link === 'string';
            default:
              return true;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 40px;
  height: 100%;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
</style>
