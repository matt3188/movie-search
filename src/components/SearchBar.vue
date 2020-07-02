<template>
  <form action class="form">
    <input v-model="searchTerm" type="search" placeholder="Search title..." />
    <button @click.prevent="search">Search</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    searchTerm: ""
  }),
  methods: {
    search() {
      this.$emit("search", this.searchTerm);
    }
  }
};
</script>
