<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="one">

        <div>
          <a class="logo">Absolute-Cowboys</a>
        </div>

        <div class="navegacao">
          <router-link to="/">Home</router-link>
          <router-link to="/filmes"><span class="mdi mdi-movie"></span></router-link>
          <router-link to="/tv"><span class="mdi mdi-television-classic"></span></router-link>
        </div>

      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>

  </footer>
</template>

<style scoped>
header {
  height: 6rem;
  display: flex;
  background-color: #442701;
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
  margin: 2vw 0 2vw 5vw;
  text-decoration: none;
  color: #f0a70a;
  font-family: serif;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 2px 2px #303030;
}

.one {
  display: flex;
}

.logo {
  font-family: 'Times New Roman', Times, serif;
  margin: 2vw 0 0 3vw;
  font-size: 1.8vw;
}

.navegacao {
  margin: 0 0 0 50vw;
}
</style>
