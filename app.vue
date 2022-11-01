<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>

useHead({
  titleTemplate: (title) => {
    return title ? `${title} - My Movies App` : 'My Movies App';
  }
});
</script>
