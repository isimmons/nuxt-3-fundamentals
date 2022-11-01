<template>
  <p>
    {{ message }}
  </p>
</template>

<script setup>
const route = useRoute();

const { teamSlug, userId } = route.params;

const message = computed(
  () => `I'm on team ${teamSlug} and my user id is
    ${userId}`
);
</script>
