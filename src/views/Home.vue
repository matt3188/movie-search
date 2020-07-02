<template>
  <div class="home">
    <SearchBar @search="search" />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar
  },
  data: () => ({
    apiKey: process.env.VUE_APP_API_KEY,
    searchTerm: "",
    results: {}
  }),
  methods: {
    search(term) {
      axios
        .get(`https://www.omdbapi.com/?s=${term}&apikey=${this.apiKey}`)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
