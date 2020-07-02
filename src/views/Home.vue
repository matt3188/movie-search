<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: "Home",
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
