<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ name }}</span> - <span>{{ age }}</span>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("Hareesh");
    const age = ref(29);
    const handleClick = () => {
      age.value = age.value + 1;
    };

    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
