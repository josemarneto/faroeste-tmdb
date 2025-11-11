<script setup>
  import { ref, onMounted } from 'vue';
  import api from '@/plugins/axios';
  import Loading from 'vue-loading-overlay';
  import { useGenreStore } from '@/stores/genre';

  const genreStore = useGenreStore();

  const isLoading = ref(false);
  const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

  const genres = ref([]);
  function getGenreName(id) {
    const genero = genres.value.find((genre) => genre.id === id);
    return genero.name;
  }

  const tvs = ref([]);
 const listTv = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      with_keywords: 155573 || 15662 || 340029 || 305941 || 197125 || 215686 || 254500 || 222835 || 222934 || 168422 || 168713 || 256930 || 227264 || 177703 || 178402 || 271626 || 237964 || 155291 || 287407 || 168418 || 238520 || 309147,
      language: 'pt-BR'
    }
  });
  tvs.value = response.data.results
  isLoading.value = false;
};

  onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  isLoading.value = false;
});
</script>

<template>
    <body background="/public/img/img-faroeste.jpg">
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li
  v-for="genre in genreStore.filteredGenres"
  :key="genre.id"
  @click="listTv(genre.id)"
  class="genre-item"
>
  {{ genre.name }}
</li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />
  <div class="tv-list">
  <div v-for="tv in tvs" :key="tv.id" class="tv-card">
    <img
      :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
      :alt="tv.name"
    />
    <div class="tv-details">
      <p class="tv-name">{{ tv.name }}</p>
      <p class="tv-release-date">{{ formatDate(tv.first_air_date) }}</p>
      <p class="tv-genres">
  <span
  v-for="genre_id in tv.genre_ids.filter(id => id !== 37 && id !== 10752 && id !== 10763 && id !== 9648 && id !== 10764 && id !== 10766 && id !== 10767 && id !== 10768)"
  :key="genre_id"
  @click="listTv(genre_id)"
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
    background-color: #5d6424;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    align-self: center;
    color: #fff;
    display: flex;
    justify-content: center;
  }

  .genre-item:hover {
    cursor: pointer;
    background-color: #7d8a2e;
    box-shadow: 0 0 0.5rem #5d6424;
  }
  .tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.tv-details {
  padding: 0 0.5rem;
}

.tv-name {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.tv-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.tv-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.tv-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}
</style>