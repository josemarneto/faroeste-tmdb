import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useGenreStore = defineStore('genre', () => {
  const state = reactive({
    genres: [],
    currentGenreId: null,
  });

  const genres = computed(() => state.genres);

  const filteredGenres = computed(() =>
    state.genres.filter(genre => genre.id !== 37 && genre.id !== 10752 && genre.id !== 10763 && genre.id !== 9648 && genre.id !== 10764 && genre.id !== 10766 && genre.id !== 10767 && genre.id !== 10768)
  );

 
  const getGenreName = (id) =>
    state.genres.find((genre) => genre.id === id)?.name ?? '';

  const currentGenreId = computed(() => state.currentGenreId);
  const setCurrentGenreId = (genreId) => {
  
    if (genreId === 37) return;
    state.currentGenreId = genreId;
  };

  const getAllGenres = async (type) => {
    const response = await api.get(`genre/${type}/list?language=pt-BR`);
    state.genres = response.data.genres;
  };

  return {
    genres,
    filteredGenres,
    getGenreName,
    currentGenreId,
    getAllGenres,
    setCurrentGenreId,
  };
});
