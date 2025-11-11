<script setup>
</script>
<template>
  <body background="/public/img/img-faroeste.jpg">
    <h1>Home</h1>
    <p>Welcome to the Faroeste TMDB application!</p>
    <router-link to="/filmes">Go to Movies</router-link>
  </body>
</template>
<style>
body{
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  text-align: center;
  color: #000;
  margin-top: 2rem;
}
</style>