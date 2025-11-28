<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useTvStore } from '@/stores/tv';
  import FooterComponents from "@/components/FooterComponents.vue";
  const tvStore = useTvStore();

  const props = defineProps({
    tvId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await tvStore.getTvDetail(props.tvId);
  });
</script>

<template>
  <div class="main">
    <div class="content">
      <img class="img"
        :src="`https://image.tmdb.org/t/p/w185${tvStore.currentTv.poster_path}`"
        :alt="tvStore.currentTv.title"
      />

      <div class="details">
        <h1>Filme: {{ tvStore.currentTv.title }}</h1>
        <p>{{ tvStore.currentTv.tagline }}</p>
        <p>{{ tvStore.currentTv.overview }}</p>
        <p><span>Orçamento:</span> ${{ tvStore.currentTv.budget }}</p>
        <p><span>Avaliação:</span> {{ tvStore.currentTv.vote_average }}</p>

  <div class="companies">
    <h2>Produtoras:</h2>
    <template
      v-for="company in tvStore.currentTv.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
      </div>
    </div>
  </div>

 
  </div>
  <footer-components/>
</template>

<style scoped>
.main{
  background-color: black;
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


