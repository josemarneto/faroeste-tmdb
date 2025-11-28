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
      with_keywords: `155573 || 15662 || 340029 || 305941 || 197125 || 215686 || 254500 || 222835 || 222934 || 168422 || 168713 || 256930 || 227264 || 177703 || 178402 || 271626 || 237964 || 155291 || 287407 || 168418 || 238520 || 309147`,
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

    <div class="tudo">
<div class="conteudo">
  <h1>Western Movies</h1>
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
      <p class="movie-genres">
  <span
  v-for="genre_id in movie.genre_ids.filter(id => id !== 37 && id !== 10752)"
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
</div>
</div>
<FooterComponents />
</template>
<style scoped>
.tudo {
  background-color: #000;
  min-height: 100vh;
  padding-top: 1rem;
}

.conteudo {
  background-color: #000;
  border-radius: 20px;
  width: 94%;
  margin: 2rem auto;
  padding: 2rem 1.5rem 3rem;
}

.conteudo h1 {
  text-align: center;
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #442701;
  margin-bottom: 2rem;
}

.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  list-style: none;
  margin-bottom: 2.5rem;
  padding: 0;
}

.genre-item {
  background-color: #000;
  border: #830000 2px solid;
  border-radius: 999px;
  padding: 0.45rem 1rem;
  color: rgb(255, 0, 0);
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease
}

.genre-item:hover {
  background-color: #f0a70a;
  color: #000;
  transform: translateY(-2px);
}

.genre-item.active {
  background-color: #682100;
  color: #fff;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.6rem;
  justify-content: center;
}

.movie-card {
  background-color: #830000;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.movie-card:hover {
  transform: scale(1.04);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
}

.movie-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 0;
  margin: 0;
  box-shadow: none;
  display: block;
  cursor: pointer;
  border: #830000 2px solid;
}

.movie-details {
  padding: 0.8rem 0.8rem 1rem;
  font-family: 'Poppins', sans-serif;
}

.movie-title {
  color: #f0a70a;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.6rem;
}

.movie-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.movie-genres span {
  border: 1px solid #f0a70a;
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  color: #f0a70a;
  font-size: 0.65rem;
  font-weight: 500;
  background: transparent;
  cursor: default;
  transition: background-color 0.2s ease, color 0.2s ease
}

.movie-genres span:hover {
  background-color: #f0a70a;
  color: #000;
  cursor: pointer;
}

@media (max-width: 600px) {
  .conteudo h1 {
    font-size: 2.2rem;
  }

  .movie-card img {
    height: 230px;
  }
}

</style>
