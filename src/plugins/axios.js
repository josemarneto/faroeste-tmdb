import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWQwNGMwYTZkNTE1ZjFhZjgxNzJmMWMzMGE4Y2MxMCIsIm5iZiI6MTc1ODg5ODMxMC4xNzIsInN1YiI6IjY4ZDZhODg2MWQ2MDRkYmI4NzY4YjAyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WlxmrFdpYK4ESxse0XGTGNOAcBgKzteGsVLHf1na-zY`,
  },
});

export default api;