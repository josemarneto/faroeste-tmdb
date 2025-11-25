import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useHomeStore = defineStore('home', () => {
  const state = reactive({
    currentHome: {},
  });

  const currentHome = computed(() => state.currentHome);

  const getHomeDetail = async (homeId) => {
    const response = await api.get(`home/${homeId}`);
    state.currentHome = response.data;
  };

  return { currentHome, getHomeDetail };
});
