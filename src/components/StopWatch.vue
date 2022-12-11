<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Stop Watch",
      timeDisplay: null,
    };
  },
  mounted() {
    console.log("mounted hook triggered");
  },
};
</script>
