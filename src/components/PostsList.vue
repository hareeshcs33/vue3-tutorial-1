<template>
  <div class="posts-list">
    <h1>Posts List</h1>
    <div v-for="post in posts" :key="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
  components: {
    SinglePost,
  },
};
</script>
