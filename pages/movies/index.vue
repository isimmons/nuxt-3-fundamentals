<template>
  <div>
    <MovieSearch/>
  </div>
</template>
<script lang="ts" setup>

useHead({
  title: "Movies",
});

// inline middle ware specific to this route only
// see middleware/logger.global.ts for example of globally available named middleware
// definePageMeta({
//   middleware(to, from) {
//     console.log(to, from);
//   },
// })

// use it here or use it in app.vue
// definePageMeta({
//   middleware: ["logger"]
// });

// to actually make it global just append .global to the file name
// ie: logger.global.ts
</script>