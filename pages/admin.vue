<template>
  <h1>Hello admin user</h1>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
});
</script>