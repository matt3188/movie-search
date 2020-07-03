<template>
  <div class="home">
    <SearchBar @search="search" />
    <div v-for="movie in results.Search" :key="movie.id">
      <Movie :data="movie" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Movie from "@/components/Movie.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    Movie,
    SearchBar
  },
  data: () => ({
    apiKey: process.env.VUE_APP_API_KEY
  }),
  computed: {
    searchResults() {
      return this.$store.state.results;
    }
  },
  methods: {
    search(term) {
      axios
        .get(`https://www.omdbapi.com/?s=${term}&apikey=${this.apiKey}`)
        .then(response => {
          this.onSuccess(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data.data);
        });
    },
    onSuccess(data) {
      this.$store.dispatch("setResults", data);
    },
    onFail(error) {
      console.log(error);
    }
  }
};
</script>
