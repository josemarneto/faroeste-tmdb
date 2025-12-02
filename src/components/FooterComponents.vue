<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left">
        <p class="slogan">
          Só aqui<br />
          você encontra<br />
          o melhor do faroeste
        </p>
      </div>

      <div class="right">
        <a href="#" class="social">
          <span class="mdi mdi-instagram"></span>
        </a>
        <a href="#" class="social">
          <span class="mdi mdi-whatsapp"></span>
        </a>
      </div>
    </div>

      <p>Copyright © 2025 — Todos os direitos reservados</p>
    
  </footer>
</template>

<style scoped>
footer {
}
.footer {
  width: 100%;
  background-color: #000;
  padding-top: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.footer-content {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slogan {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  line-height: 1.6;
}

.slogan::first-line {
  color: #830000;
  font-weight: 700;
}

.right {
  display: flex;
  gap: 1.5rem;
}

.social {
  font-size: 1.6rem;
  color: #fff;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.social:hover {
  transform: translateY(-2px);
  opacity: 1;
  color: #830000;
}

.copyright {
  margin-top: 2rem;
  padding: 1.5rem 0;
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.copyright p {
  color: #aaa;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
}
</style>
