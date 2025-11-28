<script setup>
import { computed, defineProps, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
import FooterComponents from "@/components/FooterComponents.vue";
const movieStore = useMovieStore();

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

onMounted(async () => {
  await movieStore.getMovieDetail(props.movieId);
});


</script>

<template>
  <div class="main">

    <div class="content">
      <img class="img" :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title"  />


      <div class="details">
        <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
        <p>{{ movieStore.currentMovie.tagline }}</p>
        <p>{{ movieStore.currentMovie.overview }}</p>
        <p><span>Orçamento:</span> ${{ movieStore.currentMovie.budget }}</p>
        <p><span>Avaliação:</span> {{ movieStore.currentMovie.vote_average }}</p>

        <div class="companies">
          <h2>Produtoras:</h2>
          <template v-for="company in movieStore.currentMovie.production_companies" :key="company.id">
            <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
              :alt="company.name" />
            <p v-else>{{ company.name }}</p>
          </template>
        </div>
      </div>

    </div>
  </div>

  <footer-components />
</template>

<style scoped>
.main {
  background-color: #000;
}

.companies {
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  align-items: center;
  margin-bottom: 2rem;
  margin: 1vw 0 0 0;
}

.content {
  display: flex;
  height: 25rem;
}

.content h1 {
  color: #830000;
  font-family: 'Times New Roman', Times, serif;
}

.content p {
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.img {
  margin: 1vw 1vw 1vw 2vw;
  border-radius: 5px;
  width: 20%;
  height: 80%;
  box-shadow: 0 0 20px rgba(219, 0, 0, 0.808);

}

.companies h2 {
  color: #fff;
  font-family: 'Times New Roman', Times, serif;
  color: #830000;
}


.details p span {
  color: #830000;
}
</style>
