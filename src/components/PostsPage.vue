<template>
  <div class="posts-page">
    <h1>Posts Page</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList v-if="showPost" :posts="posts"></PostsList>
    </div>
    <div v-else>Loading ....</div>
    <button @click="showPost = !showPost">Toggle Post</button>
    <button @click="posts.pop()">Delete Post</button>
  </div>
</template>
<script>
import { ref } from "vue";
import PostsList from "./PostsList.vue";
import getPosts from "../composibles/getPosts";
export default {
  setup() {
    const showPost = ref(true);

    const { posts, error, load } = getPosts();
    load();

    return {
      showPost,
      posts,
      error,
    };
  },
  components: {
    PostsList,
  },
};
</script>
