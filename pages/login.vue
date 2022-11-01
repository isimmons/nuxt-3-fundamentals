<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" autocomplete="username" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" autocomplete="current-password"/>
    <button>Login</button>
  </form>
</template>

<script lang="ts" setup>
const user = useUser();

definePageMeta({
  layout: "plain"
});


</script>