  <script setup>
  import { defineProps, onMounted } from 'vue';
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

  console.log(movieStore.currentMovie.poster_path);
  console.log(movieStore.currentMovie);
</script>

  <template>
    <div class="main">

      <div class="content">

        <div class="img">
          <img v-if="movieStore.currentMovie.poster_path"
            :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`">
        </div>

        <div class="details">
          <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
          <p><span>Sinopse:</span></p>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  min-height: 75vh;
}

.companies {
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  margin: 1vw 0 0 0 0;
  column-gap: 1rem;
}

.content {
  display: flex;
  height: 25rem;
  margin: 0 0 3vw 2vw;
  gap: 1vw;
}

.content h1 {
  color: #830000;
  font-family: 'Times New Roman', Times, serif;
}

.content p {
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0.5rem 0;
  text-wrap: balance;

  max-width: 40vw;
}

.img {
  position: relative;
  overflow: hidden;
}

.img img {
  border-radius: 10px;
  width: 15vw;
  height: 100%;
  display: block;
  -webkit-mask-image: linear-gradient(to right, black 60%, transparent 100%);
  mask-image: linear-gradient(to right, black 60%, transparent 100%);
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
