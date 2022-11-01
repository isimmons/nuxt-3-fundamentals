<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

// useFetch is a shorthand for $fetch inside useAsyncData like below
const { data } = await useFetch(`https://www.omdbapi.com/?apikey=${config.OMDB_API_KEY}&i=${route.params.id}`, {
  key: `/movies/${route.params.id}`,
  pick: ['Plot' , 'Title', 'Poster'],
  onResponse({ request, response }) {
    if (response._data.Error === "Incorrect IMDb ID.") {
      showError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  },
  onResponseError() {
    showError({ statusCode: 500, statusMessage: "Oh noes!" });
  }
});

// const { data } = useAsyncData(`/movies/${route.params.id}`, () => {
//   return $fetch(
//       `https://www.omdbapi.com/?apikey=${config.OMDB_API_KEY}&i=${route.params.id}`
//   );
// }, {
//   pick: ['Plot' , 'Title'],
// });

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: 'summary_large_image' },
  ],
});

</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<style scoped></style>
