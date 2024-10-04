import axios from 'axios';

const API_KEY = 'f5b46b19ecca85cab1b7b083b530383e'; // chave da api 

const BASE_URL = 'https://api.themoviedb.org/3';

// Função para buscar filmes populares
export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return response.data.results;
};

// Função para buscar detalhes de um filme específico
export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};
