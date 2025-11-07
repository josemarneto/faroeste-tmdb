<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 8rem;
  display: flex;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;

}



nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  margin: 0 0 0 17vw;
  text-decoration: none;
  color: #e2620c;
  font-family: serif;
  font-weight: bold;
  font-size: 2rem;
}

</style>
