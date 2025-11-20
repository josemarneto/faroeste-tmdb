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
      <p class="text">Só aqui<br> você encontra <br>o melhor do faroeste</p>
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
   margin: 3vw 0 4vw 2vw;
}
nav a {
  margin: 2vw 0 2vw 5vw;
  text-decoration: none;
  color:#442701;
  font-family: serif;
  font-weight: bold;
  font-size: 1.3rem;
  text-shadow: 1.5px 1.5px #000000;
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
  height: 15rem;
  width: 94%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 3vw 0 0 0;

}
footer p{
  color: #000;
  margin: 1vw 0 0 0;
  font-weight: bold;
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

.icons ul {
  font-size: 30px;
  text-decoration: none;
  list-style-type: none;
  color: #000000;
  display: flex;
  margin: 0 52vw 1vw 0;

}
.icons ul li{
  margin: 0 1vw 0 0;
}
a{
  color: #000;
}
.text{
  color: #000000;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin: 0 35vw 0 0;
}
</style>
