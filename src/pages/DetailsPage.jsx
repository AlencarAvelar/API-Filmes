import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api'; 
import './DetailsPage.css'; 

function DetailsPage() {
  // Hook do React Router para acessar o ID do filme nos parâmetros da URL
  const { id } = useParams(); 

  // Estado que armazena os detalhes do filme, inicializado como null
  const [movie, setMovie] = useState(null);

  // Hook de efeito colateral que será executado quando o componente for montado ou quando o id mudar
  useEffect(() => {
    // Função assíncrona que busca os detalhes do filme
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id); // Chama a função para buscar dados da API
      setMovie(data); // Atualiza o estado com os detalhes do filme
    };
    getMovieDetails(); // Executa a função de busca ao montar o componente
  }, [id]); // O efeito é executado sempre que o 'id' mudar

  // Renderização condicional para mostrar "Loading..." enquanto os dados estão sendo carregados
  if (!movie) {
    return <p>Loading...</p>;
  }

  // Renderiza os detalhes do filme quando os dados já foram carregados
  return (
    <div className="details-container">
      {/* Exibe o título do filme */}
      <h1>{movie.title}</h1>

      {/* Exibe o pôster do filme, com a URL da imagem concatenada */}
      <img 
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
        alt={movie.title} 
        className="movie-poster" 
      />

      {/* Exibe a sinopse do filme */}
      <p>{movie.overview}</p>

      {/* Exibe a data de lançamento */}
      <p><strong>Release Date:</strong> {movie.release_date}</p>

      {/* Exibe a nota de avaliação */}
      <p><strong>Rating:</strong> {movie.vote_average}/10</p>
    </div>
  );
}

export default DetailsPage;
