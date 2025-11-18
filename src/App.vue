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

  <footer>
    <div class="preenchimento">
      <div class="icons">
        <ul>

        <li>
        <a href="#"><span class="mdi mdi-instagram"></span></a>
        </li>

        <li>
        <a href="#"><span class="mdi mdi-whatsapp"></span></a>
        </li>

        </ul>
      </div>
    <div class="borda">
    <p>Copyright &copy;2025 Todos os direitos reservados</p>
    </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  height: 10rem;
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
.conteudo{
  background-color: #fab54e;
  border-radius: 20px;
   width: 94%;
   justify-content: center;
   margin: 2vw 0 2vw 2vw;
   padding: 0 0 0 0;
}
nav a {
  margin: 2vw 0 2vw 5vw;
  text-decoration: none;
  color:#442701;
  font-family: serif;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 2px 2px #000000;
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
footer{
 background-color: #442701;
 display: flex;
 justify-content: center;
 }
.preenchimento{
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: #fab54e;
  height: 10rem;
  width: 94%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 3vw 0 0 0;

}
footer p{
  color: #fff;
  margin: 1vw 0 0 0;
}
.borda{
  display: flex;
   background-color: #442701;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
   width: 94%;
   justify-content: center;
   height: 4rem;
   width: 70%;
}

.icons ul li{
  font-size: 30px;
  text-decoration: none;

}
</style>
