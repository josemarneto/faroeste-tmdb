<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import FooterComponents from '@/components/FooterComponents.vue'
import { useRouter } from 'vue-router'
import { useGenreStore } from '@/stores/genre'
import Loading from 'vue-loading-overlay'

const isLoading = ref(false)
const genreStore = useGenreStore()
const router = useRouter()

const genres = ref([])
const movies = ref([])
const featuredMovie = ref(null)

function getGenreName(id) {
  const genero = genres.value.find((genre) => genre.id === id)
  return genero?.name
}

function openHome(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } })
}

async function loadMovies() {
  isLoading.value = true

  const response = await api.get('discover/movie', {
    params: {
     with_keywords: `155573||15662||340029||305941||197125||215686||254500||222835||222934||168422||168713||256930||227264||177703||178402||271626||237964||155291||287407||168418||238520||309147`,
      language: 'pt-BR',
      sort_by: 'popularity.desc',
    },
  })

  movies.value = response.data.results


  if (movies.value.length > 0) {
    featuredMovie.value = movies.value[0]
  }

  isLoading.value = false
}

onMounted(async () => {
  await genreStore.getAllGenres('movie')
  await loadMovies()
})
</script>


<template>
  <div class="tudo">

    <div class="netflix-carousel">

      <div v-if="featuredMovie" class="banner">
        <img
          class="banner-img"
          :src="featuredMovie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path}`
            : `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}`"
        />

        <div class="banner-info">
          <h1>{{ featuredMovie.title }}</h1>
          <p>{{ featuredMovie.overview }}</p>
        </div>
      </div>

      <h2 class="carousel-title">Filmes em Destaque</h2>

      <div class="carousel-row">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="movie"
          @click="openHome(movie.id)"
          @mouseover="featuredMovie = movie"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
            :alt="movie.title"
          />
        </div>
      </div>

    </div>
  </div>

  <FooterComponents />
</template>
<style>

.tudo {
  background: #000000;
  font-family: Arial, sans-serif;
  padding-bottom: 4rem;
}


.carousel-title {
  color: white;
  font-size: 15px;
  margin:10px ;

}

.netflix-carousel {
  width: 100%;
  overflow: hidden;
  padding: 2px 0;
}


.carousel-row {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 20px;
}


.carousel-row::-webkit-scrollbar {
  display: none;
}

.carousel-row {
  scrollbar-width: none;
}


.movie {
  min-width: 90px;
  height: 150px;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
  border-radius: 10px;
  overflow: hidden;

}

.movie img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}


.movie:hover {
  transform: none;
  box-shadow: 0 0 20px rgba(145, 0, 0, 0.808);

}
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(145, 0, 0, 0.808);
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

.banner-info {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  max-width: 40%;
}

.banner-info h1 {
  font-size: 42px;
  margin: 0 0 10px 0;
}

.banner-info p {
  font-size: 16px;
  opacity: 0.9;
}

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
    padding-bottom: 4rem;
  }

  .welcome-text {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
</style>
