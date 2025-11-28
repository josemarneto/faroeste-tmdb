<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import FooterComponents from "@/components/FooterComponents.vue";
import { useRouter } from "vue-router";
import { useGenreStore } from "@/stores/genre";

const isLoading = ref(false);
const genreStore = useGenreStore();
const router = useRouter();

const movies = ref([]);
const featuredMovie = ref(null);
const defaultMoive = {
  title: 'Conheça os filmes',
  overview: 'Para os detalhes, passe o mouse por cima dos cards',
  backdrop_path: '/img/backdrop_path_default.jpg'
}

const tvs = ref([]);
const featuredTv = ref(null);


async function loadMovies() {
  const response = await api.get("discover/movie", {
    params: {
      with_keywords:
        '155573||15662||340029||305941||197125||215686||254500||222835||222934||168422||168713||256930||227264||177703||178402||271626||237964||155291||287407||168418||238520||309147',
      language: "pt-BR",
      sort_by: "popularity.desc",
    },
  });

  movies.value = response.data.results;
  featuredMovie.value = movies.value[0];
}


async function loadTv() {
  const response = await api.get("discover/tv", {
    params: {
      with_keywords:
       ' 155573 || 15662 || 340029 || 305941 || 197125 || 215686 || 254500 || 222835 || 222934 || 168422 || 168713 || 256930 || 227264 || 177703 || 178402 || 271626 || 237964 || 155291 || 287407 || 168418 || 238520 || 309147',
      language: "pt-BR",
      sort_by: "popularity.desc",
    },
  });

  tvs.value = response.data.results;
  featuredTv.value = tvs.value[0];
}

function openHome(movieId) {
  router.push({ name: "MovieDetails", params: { movieId} });
}

function openTv(id) {
  router.push({ name: "TvDetails", params: { tvId: id } });
}

onMounted(async () => {
  await loadMovies();
  await loadTv();
});
</script>

<template>
  <div class="tudo">


    <div class="carrosel">
      <div class="banner">
        <img
          class="banner-img"
          :src="
          featuredMovie?.title == 'Conheça os filmes'
          ? featuredMovie?.backdrop_path
          : `https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`
          "
        />
        <div class="banner-info">
          <h1>{{ featuredMovie?.title }}</h1>
          <p>{{ featuredMovie?.overview }}</p>
        </div>
    </div>

      <h2 class="titulo-carrosel">Filmes em Destaque</h2>

      <div class="carousel-row">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="movie"
          @click="openHome(movie.id)"
          @mouseover="featuredMovie = movie; console.log(movie)"
          @mouseout="featuredMovie = defaultMoive"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
          />
        </div>
      </div>
    </div>

<div class="carrosel">
      <div v-if="featuredTv" class="banner">
        <img
          class="banner-img"
          :src="`https://image.tmdb.org/t/p/original${featuredTv.backdrop_path}`"
        />
        <div class="banner-info">
          <h1>{{ featuredTv.name }}</h1>
          <p>{{ featuredTv.overview }}</p>
        </div>
      </div>


      <h2 class="titulo-carrosel">Séries em Destaque</h2>

      <div class="carousel-row">
        <div
          v-for="tv in tvs"
          :key="tv.id"
          class="movie"
          @click="openTv(tv.id)"
          @mouseover="featuredTv = tv"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
            :alt="tv.name"
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
}


.titulo-carrosel {
  color: white;
  font-size: 15px;
  margin:10px ;

}

.carrosel {
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
  box-shadow: 0 0 20px rgba(219, 0, 0, 0.808);
  position: static;

}
.banner {
  position: relative;
  width: 90%;
  height: 500px;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.808);
  margin: 0 0 0 5vw;
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

</style>
