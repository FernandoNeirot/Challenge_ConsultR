import Axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

const instance = Axios.create({
  baseURL: `${API_URL}`,
});

instance.interceptors.response.use(
  response => {
  	if (response.status === 200 || response.status === 204) {
		  return response.data;
	  } else if (response.status === 201) {
		  return response;
	  }
  },
  error => {    
    throw error;
  }
);

export default instance;