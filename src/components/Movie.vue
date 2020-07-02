<template>
  <div class="movie">
    <h3>{{ data.Title }} - {{ data.Year }}</h3>
    <img :src="data.Poster" :alt="data.Title" />
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
};
</script>
