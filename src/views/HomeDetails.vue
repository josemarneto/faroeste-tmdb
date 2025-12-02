<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useHomeStore } from '@/stores/home';
  const homeStore = useHomeStore();

  const props = defineProps({
    homeId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await homeStore.getHomeDetail(props.homeId);
  });
</script>

<template>
  <div class="main">
    <div class="content">
      <img
        :src="`https://image.tmdb.org/t/p/w185${homeStore.currentHome.poster_path}`"
        :alt="homeStore.currentHome.title"
      />

      <div class="details">
        <h1>Filme: {{ homeStore.currenthome.title }}</h1>
        <p>{{ homeStore.currentHome.tagline }}</p>
        <p>{{ homeStore.currentHome.overview }}</p>
        <p>Orçamento: ${{ homeStore.currentHome.budget }}</p>
        <p>Avaliação: {{ homeStore.currentHome.vote_average }}</p>
      </div>
    </div>
  </div>

  <p>Produtoras</p>
  <div class="companies">
    <template
      v-for="company in homeStore.currentHome.production_companies"
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
</template>

<style scoped>
  .companies {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>
