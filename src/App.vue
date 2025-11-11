<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="one">

      <div>
      <h1>!!ABSOLUTE-COWBOYS!!</h1>
      </div>

      <div>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
      </div>

      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  height: 10rem;
  display: flex;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;

}



nav {
  column-gap: 0.5rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  margin: 1vw 0 2vw 19vw;
  text-decoration: none;
  color: #e2620c;
  font-family: serif;
  font-weight: bold;
  font-size: 1.3rem;
   text-shadow: 2px 2px #303030;
}
h1{
  font-family: 'Times New Roman', Times, serif;
  margin: 1vw 0 1vw 30vw;
}
</style>
