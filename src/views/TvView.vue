<script setup>
  import { ref, onMounted } from 'vue';
  import api from '@/plugins/axios';
  import Loading from 'vue-loading-overlay';
  import { useGenreStore } from '@/stores/genre';
  import { useRouter } from 'vue-router'

  
  const router = useRouter()
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
 function openTv(tvId) {
    router.push({ name: 'TvDetails', params: { tvId } });
  }
</script>

<template>
    <div class="tudo">
  <div class="conteudo">
    <h1>Western TV</h1>
  <ul class="genre-list">
    <li
  v-for="genre in genreStore.genres"
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
       @click="openTv(tv.id)"
    />
    <div class="tv-details">
      <p class="tv-name">{{ tv.name }}</p>
      <p class="tv-genres">
  <span
  v-for="genre_id in tv.genre_ids"
  :key="genre_id"
  @click="listTv(genre_id)"
>
  {{ genreStore.getGenreName(genre_id) }}
</span>
</p>
    </div>
  </div>
</div>
</div>
</div>
</template>

<style scoped>
.tudo{

  background-color: #442701;
  height: 100%;
  margin: 0;
}
.conteudo{
  background-color: #fab54e;
  border-radius: 20px;
   width: 94%;
   justify-content: center;
   margin: 0 0 0 3vw;
}
.conteudo h1{
  text-align: center;
  font-size: 4rem;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #442701;
  text-shadow: 3px 3px #000000;
}
  .genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}

  .genre-item {
  margin: 1.5vw 1vw 0 0;
  background-color:#442701;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #f0a70a;
   font-weight: bold;
  font-family:  Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

  }

  .genre-item:hover {
    cursor: pointer;
  background-color: #f0a70a;
  box-shadow: 0 0 0.5rem #f0a70a;
  color: #000;
  font-weight: bold;
  }
  .tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.tv-card {
width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
  background-color : #000000b7;
  margin: 1.5vw;
}

.tv-card img {
    width: 85%;
  height: 20rem;
  border-radius: 3rem;
  box-shadow: 0 0 0.5rem #f0a70a;
  margin: 0.5vw 0 0 1.4vw;
}



.tv-name {
 color: #f0a70a;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
  margin: 0 0 0 20px;

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
 border-style: groove;
  border-width: 1px;
  border-color: #f0a70a;
  background-color: #f0a70a;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
   background: linear-gradient(#f0a70a 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));
}

.tv-genres span:hover {
  cursor: pointer;
  background-color: #d86100;
  box-shadow: 0 0 0.5rem #ffae00;
  --p: 100%;
  --t: 0.3s;
  color: #fff;
}
</style>
