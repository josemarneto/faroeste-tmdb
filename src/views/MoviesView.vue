<script setup>
  import { ref, onMounted } from 'vue';
  import api from '@/plugins/axios';
  import Loading from 'vue-loading-overlay';
  import { useGenreStore } from '@/stores/genre';
  import { useRouter } from 'vue-router'
  import MovieDetailsView from './MovieDetailsView.vue';

  const router = useRouter();
  const genreStore = useGenreStore();
  const isLoading = ref(false);
  const genres = ref([]);
  const movies = ref([]);


  function getGenreName(id) {
    const genero = genres.value.find((genre) => genre.id === id);
    return genero.name;
  }

  function openMovie(movieId) {
    router.push({ name: 'MovieDetails', params: { filmeId: movieId } });
  }

  const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;

  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      with_keywords: 155573 || 15662 || 340029 || 305941 || 197125 || 215686 || 254500 || 222835 || 222934 || 168422 || 168713 || 256930 || 227264 || 177703 || 178402 || 271626 || 237964 || 155291 || 287407 || 168418 || 238520 || 309147,
      language: 'pt-BR',
      sort_by: 'popularity.desc',
    },
  });
  movies.value = response.data.results;
  isLoading.value = false;
};

  onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  isLoading.value = false;
});
</script>
<template>
    <body background="/public/img/img-faroeste.jpg">

  <ul class="genre-list">
      <li
  v-for="genre in genreStore.filteredGenres"
  :key="genre.id"
  @click="listMovies(genre.id)"
  class="genre-item"
  :class="{ active: genre.id === genreStore.currentGenreId }"
>
  {{ genre.name }}
</li>


  </ul>
  <loading v-model:active="isLoading" is-full-page />
  <div class="movie-list">
  <div v-for="movie in movies" :key="movie.id" class="movie-card">
    <img
  :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
  :alt="movie.title"
  @click="openMovie(movie.id)"
  style="cursor: pointer"
/>
    <div class="movie-details">
      <p class="movie-title">{{ movie.title }}</p>
      <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
      <p class="movie-genres">
  <span
  v-for="genre_id in movie.genre_ids.filter(id => id !== 37)"
  :key="genre_id"
  @click="listMovies(genre_id)"
  :class="{ active: genre_id === genreStore.currentGenreId }"
>
  {{ genreStore.getGenreName(genre_id) }}
</span>
</p>
    </div>
  </div>
</div>
    </body>
</template>
<style scoped>
.genre-list {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;

}

.genre-item {
  margin: 1.5vw 0 0 0;
  background-color:#000;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #e2620c;
  font-weight: bold;

}

.genre-item:hover {
  cursor: pointer;
  background-color: #e2620c;
  box-shadow: 0 0 0.5rem #d86100;
  color: #000;
  font-weight: bold;
}
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
  background-color : #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
  color: #fff;
  font-size:15px;

}

.movie-title {
  color: #e2620c;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
  margin: 0 0 0 35px;
}
.movie-genres {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;

}

.movie-genres span {
  border-style: groove;
  border-width: 1px;
  border-color: #e2620c;
  background-color: #e2620c;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
   background: linear-gradient(#e2620c 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));

}


.movie-genres span:hover {
  cursor: pointer;
  background-color: #d86100;
  box-shadow: 0 0 0.5rem #ffae00;
  --p: 100%;
  --t: 0.3s;
  color: #fff;
}
.active {
  background-color: #682100;
  font-weight: bolder;
}
body{
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
