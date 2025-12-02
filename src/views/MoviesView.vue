<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';
import { useGenreStore } from '@/stores/genre';
import { useRouter } from 'vue-router'
import FooterComponents from '@/components/FooterComponents.vue';

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
  router.push({ name: 'MovieDetails', params: { movieId } });
}



const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;

  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      with_keywords: '155573 || 15662 || 340029 || 305941 || 197125 || 215686 || 254500 || 222835 || 222934 || 168422 || 168713 || 256930 || 227264 || 177703 || 178402 || 271626 || 237964 || 155291 || 287407 || 168418 || 238520 || 309147',
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
        <li v-for="genre in genreStore.genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item"
          :class="{ active: genre.id === genreStore.currentGenreId }">
          {{ genre.name }}
        </li>
      </ul>
      <loading v-model:active="isLoading" is-full-page />
      <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
            @click="openMovie(movie.id)" />
          <div class="movie-details">
            <p class="movie-title">{{ movie.title }}</p>
            <p class="movie-genres">
              <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)"
                :class="{ active: genre_id === genreStore.currentGenreId }">
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
  background-color: #000000;
  min-height: 77vh;
  margin: 0;
  flex-grow: 1;
}

.conteudo {
  background-color: #000;
  border-radius: 20px;
  width: 94%;
  justify-content: center;
  margin: 0 0 0 3vw;
}

.conteudo h1 {
  text-align: center;
  font-size: 4rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #830000;
  text-shadow: 3px 3px #0000009a;

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
  margin: 1.5vw 0 0 0;
  background-color: #000000;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  color: #e21111;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  border: #ff0000 2px solid;
  

}

.genre-item:hover {
  cursor: pointer;
  background-color: #e21111;
  box-shadow: 0 0 0.5rem #e21111;
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
  background-color: #000;
  border-radius: 3rem;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: #830000 2px solid;
}

.movie-card:hover {
  transform: scale(1.04);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
}

.movie-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 3rem;
  margin: 0;
  box-shadow: none;
  display: block;
  cursor: pointer;
}

.movie-details {
  padding: 0.8rem 0.8rem 1rem;
  font-family: 'Poppins', sans-serif;
}

.movie-title {
  color: #e21111;
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
  border-style: groove;
  border-width: 1px;
  border-color: #e21111;
  background-color: #e21111;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  background: linear-gradient(#e21111 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));

}

.movie-genres span:hover {
  background-color: #f0a70a;
  color: #000;
  cursor: pointer;
  background-color: #a14b04;
  box-shadow: 0 0 0.5rem #e21111;
  --p: 100%;
  --t: 0.3s;
  color: #fff;
}

.active {
  background-color: #682100;
  font-weight: bolder;
}
</style>
