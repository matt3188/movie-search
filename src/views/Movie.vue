<template>
  <div class="movie-view">
    <img :src="results.Poster" :alt="results.Title" />
    <h1>{{ results.Title }}</h1>
    <ul class="ratings">
      <li v-for="rating in results.Ratings" :key="rating.source">
        <strong>{{ rating.Source }}:</strong>
        {{ rating.Value }}
      </li>
    </ul>
    <p>
      <strong>Actors:</strong>
      {{ results.Actors }}
    </p>
    <p>
      <strong>Awards:</strong>
      {{ results.Awards }}
    </p>
    <p>
      <strong>BoxOffice:</strong>
      {{ results.BoxOffice }}
    </p>
    <p>
      <strong>Country:</strong>
      {{ results.Country }}
    </p>
    <p>
      <strong>DVD:</strong>
      {{ results.DVD }}
    </p>
    <p>
      <strong>Director:</strong>
      {{ results.Director }}
    </p>
    <p>
      <strong>Genre:</strong>
      {{ results.Genre }}
    </p>
    <p>
      <strong>Language:</strong>
      {{ results.Language }}
    </p>
    <p>
      <strong>Metascore:</strong>
      {{ results.Metascore }}
    </p>
    <p>
      <strong>Plot:</strong>
      {{ results.Plot }}
    </p>
    <p>
      <strong>Production:</strong>
      {{ results.Production }}
    </p>
    <p>
      <strong>Rated:</strong>
      {{ results.Rated }}
    </p>
    <p>
      <strong>Released:</strong>
      {{ results.Released }}
    </p>
    <p>
      <strong>Runtime:</strong>
      {{ results.Runtime }}
    </p>
    <p>
      <strong>Title:</strong>
      {{ results.Title }}
    </p>
    <p>
      <strong>Type:</strong>
      {{ results.Type }}
    </p>
    <p>
      <strong>Website:</strong>
      {{ results.Website }}
    </p>
    <p>
      <strong>Writer:</strong>
      {{ results.Writer }}
    </p>
    <p>
      <strong>Year:</strong>
      {{ results.Year }}
    </p>
    <p>
      <strong>imdbID:</strong>
      {{ results.imdbID }}
    </p>
    <p>
      <strong>imdbRating:</strong>
      {{ results.imdbRating }}
    </p>
    <p>
      <strong>imdbVotes:</strong>
      {{ results.imdbVotes }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie",
  data: () => ({
    apiKey: process.env.VUE_APP_API_KEY,
    movieId: "",
    results: {}
  }),
  created() {
    this.movieId = this.$route.params.id;
    this.singleMovie();
  },
  methods: {
    singleMovie() {
      axios
        .get(`https://www.omdbapi.com/?i=${this.movieId}&apikey=${this.apiKey}`)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.ratings {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
}
.ratings li {
  margin: 0 10px;
  list-style: none;
}
</style>
