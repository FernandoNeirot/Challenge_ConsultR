import Axios from '../axios-instance';

export const heroAPI = {
  getAllHeroes: () => Axios.get('/all.json').then(data => data),
  getPowerstats: (id) => Axios.get(`/powerstats/${id}.json`).then(data => data),
  getBiography: (id) => Axios.get(`/biography/${id}.json`).then(data => data),
};