import Axios from '../axios-instance';

export const heroAPI = {
  getAllHeroes: () => Axios.get('/all.json').then(data => data),
};