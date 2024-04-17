import axios from 'axios';


export const getAll = async () => {
  const { data } = await axios.get('/api/foods/Menu');
  return data;
};

export const search = async searchTerm => {
  const { data } = await axios.get('/api/foods/Menu/search/' + searchTerm);
  return data;
};


export const getById = async foodId => {
  const { data } = await axios.get('/api/foods/' + foodId);
  return data;
};


