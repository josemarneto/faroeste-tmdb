<script>
</script>
<template>
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
footer{
 background-color: #000000;
 display: flex;
 justify-content: center;
 }
.preenchimento{
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: #fd5a0e;
  height: 15rem;
  width: 94%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 3vw 0 0 0;

}
footer p{
  color: #fff;
  margin: 1vw 0 0 0;
  font-weight: bold;
}
.borda{
  display: flex;
   background-color: #000000;
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
