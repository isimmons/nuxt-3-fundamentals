<script setup>
const config = useRuntimeConfig();
const query = ref('');
const movies = ref([]);

const removeSubtitle= (title) => {
  return title.includes(':')
      ? title.substring(0, title.lastIndexOf(':'))
      : title;
}

const search = async (pageLoad = null) => {
  const { Search } = await $fetch(
      `https://www.omdbapi.com/?apikey=${config.OMDB_API_KEY}&s=${pageLoad ??= query.value}`
  );

  movies.value = Search;
};

//search('batman');
</script>

<template>
  <div class="container">
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button type="submit">Search</button>
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
