import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { fetchMovies } from '../api'; 
import './HomePage.css'; 

function HomePage() {
  const [movies, setMovies] = useState([]); // Define o estado 'movies' como um array vazio inicialmente

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(); // Chama a função fetchMovies e armazena o resultado em 'data'
      setMovies(data); // Atualiza o estado 'movies' com os dados recebidos
    };
    getMovies(); // Executa a função ao montar o componente
  }, []); // useEffect com array vazio para garantir que a função seja chamada apenas uma vez, ao montar o componente

  return (
    <div className="home-container"> {/* Container principal da página */}
      <h1>Popular Movies</h1> {/* Título da página */}
      <ul className="movie-list"> {/* Lista de filmes */}
        {movies.length === 0 ? ( // Verifica se a lista de filmes está vazia
          <p>Loading...</p> // Exibe "Loading..." enquanto os filmes estão sendo carregados
        ) : (
          movies.map(movie => ( // Mapeia cada filme para criar um item na lista
            <li key={movie.id} className="movie-item"> {/* Define a chave única para cada filme */}
              <Link to={`/details/${movie.id}`}> {/* Link para a página de detalhes do filme */}
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title} 
                  className="movie-poster" 
                /> 
                <p>{movie.title}</p> 
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default HomePage; // Exporta o componente HomePage para uso em outros lugares
