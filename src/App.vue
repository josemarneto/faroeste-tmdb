<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
 <div class="conteudo">
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
    </div>
  </header>

  <main>
    <RouterView />
  </main>


</template>

<style scoped>
header {
  height: 8rem;
  display: flex;
  background-color: #000000;
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
.conteudo{
  background-color: #000000;
  border-radius: 20px;
   width: 94%;
   justify-content: center;
   margin: 3vw 0 3vw 2vw;
}
nav a {
  margin: 2vw 0 2vw 5vw;
  text-decoration: none;
  color:#e21111;
  font-family: serif;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 1.5px 1.5px #00000000;
}

.one {
  display: flex;
}

.logo {
  font-family: 'Times New Roman', Times, serif;
  margin: 1.5vw 0 0 3vw;
  font-size: 1.8vw;
}

.navegacao {
  margin: 1vw 0 0 50vw;
}

</style>
