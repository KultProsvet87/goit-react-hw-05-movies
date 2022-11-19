import axios from 'axios';

const API_KEY = 'ea088de809b9eab9d622eab39f8395fb';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const trendsSearchParams = {
  END_POINT: 'trending/movie/day',
  params: {},
};

export const movieSearchParams = {
  END_POINT: 'search/movie',
  params: {
    query: '',
  },
};

export const movieByIdParams = {
  END_POINT: '',
  params: {},
};

export const moviedbApi = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export async function getData({ params, END_POINT }, setRes) {
  let res = [];
  try {
    res = await moviedbApi.get(END_POINT, { params });
    if (res) setRes(res.data);
  } catch (error) {
    return;
  }
}
