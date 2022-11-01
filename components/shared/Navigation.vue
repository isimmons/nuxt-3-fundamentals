<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="logout">Logout</a>
  </nav>
  <hr />
</template>

<script setup lang="ts">
const user = useUser();

function logout(){
  user.isLoggedIn = false;
}
</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}

a:active {
  color: blue;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
