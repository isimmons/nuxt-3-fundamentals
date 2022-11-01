<script setup lang="ts">
const config = useRuntimeConfig();
const query = ref('batman');
const movies = ref([]);

const removeSubtitle= (title) => {
  return title.includes(':')
      ? title.substring(0, title.lastIndexOf(':'))
      : title;
}

const search = async () => {
  const { Search } = await $fetch(
      `https://www.omdbapi.com/?apikey=${config.OMDB_API_KEY}&s=${query.value}`
  );

  movies.value = Search;
};

search();
</script>

<template>
  <div class="container">
    <form @submit.prevent="search">
      <input type="text" name="query" v-model="query" />
      <button>Search</button>
    </form>

    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
        <h3>{{ removeSubtitle(movie.Title) }}</h3>
        <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.Title" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div.container {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
}

img {
  width: 200px;
}
</style>
