<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(false)
const topMovies = ref([])
const topSeries = ref([])

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { filmeId: movieId } })
}

function openSeries(tvId) {
  router.push({ name: 'TvDetails', params: { serieId: tvId } })
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString('pt-BR')

const KEYWORDS = [
  155573, 15662, 340029, 305941, 197125, 215686, 254500, 222835, 222934,
  168422, 168713, 256930, 227264, 177703, 178402, 271626, 237964,
  155291, 287407, 168418, 238520, 309147
]

// Filmes de Faroeste
const loadTopMovies = async () => {
  try {
    const response = await api.get('discover/movie', {
      params: {
        language: 'pt-BR',
        sort_by: 'popularity.desc',
        with_genres: 37,
      }
    })
    topMovies.value = response.data.results.slice(0, 10)
  } catch (err) {
    console.error("Erro ao carregar filmes:", err)
    topMovies.value = []
  }
}

// Séries de Faroeste
const loadTopSeries = async () => {
  try {
    const response = await api.get('discover/tv', {
      params: {
        with_genres: 37,
        language: 'pt-BR',
        sort_by: 'popularity.desc',
      }
    })
    console.log(response.data.results)
    topSeries.value = response.data.results.slice(0, 10)
  } catch (err) {
    console.error("Erro ao carregar séries:", err)
    topSeries.value = []
  }
}

onMounted(async () => {
  isLoading.value = true

  await Promise.allSettled([loadTopMovies(), loadTopSeries()])

  isLoading.value = false
})
</script>

<template>
  <body background="/public/img/img-faroeste.jpg">
    <h1>Home</h1>
    <p class="welcome-text">Bem-Vindo ao Absolute Cowboys</p>

    <loading v-model:active="isLoading" is-full-page />

    <section class="section">
      <h2>Principais Filmes de Faroeste</h2>
      <div class="list">
        <div v-for="movie in topMovies" :key="movie.id" class="card">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
            @click="openMovie(movie.id)"
          />
          <p class="title">{{ movie.title }}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Principais Séries de Faroeste</h2>
      <div class="list">
        <div v-for="tv in topSeries" :key="tv.id" class="card">
          <img
            :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
            :alt="tv.name"
            @click="openSeries(tv.id)"
          />
          <p class="title">{{ tv.name }}</p>
        </div>
      </div>
    </section>
  </body>
</template>
<style>
 .list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 4vw;
  }

  .card {
    width: 150px;
  height: 25rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
  background-color : #000;
  }

  .card img {
    width: 150px;
  height: 225px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
  background-color : #000;
  }

  .title {
    font-weight: bold;
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
  }

  .section {
    margin-bottom: 2rem;
  }

  .welcome-text {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
</style>
