<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">Absolute-Cowboys</div>

      <div class="links">
        <RouterLink to="/" class="link">Home</RouterLink>

        <RouterLink to="/filmes" class="icon">
          <span class="mdi mdi-movie"></span>
        </RouterLink>

        <RouterLink to="/tv" class="icon">
          <span class="mdi mdi-television-classic"></span>
        </RouterLink>
      </div>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  width: 100%;
  height: 72px;
  background-color: #000;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.nav {
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #a70808;
  letter-spacing: 0.5px;
  cursor: pointer;
}

.links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.link {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #c50909;
  text-decoration: none;
  position: relative;
  opacity: 0.85;
  transition: opacity 0.2s ease;
}

.link:hover {
  opacity: 1;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background-color: #830000;
  transition: width 0.25s ease;
}

.link:hover::after {
  width: 100%;
}

.icon {
  font-size: 1.3rem;
  color: #830000;
  opacity: 0.8;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.icon:hover {
  transform: translateY(-2px);
  opacity: 1;
}

/* Mobile */
@media (max-width: 768px) {
  .nav {
    width: 94%;
  }

  .logo {
    font-size: 1.1rem;
  }

  .links {
    gap: 1.1rem;
  }
}
</style>
