import { useMovies } from '../../Providers/MoviesProvider';
import styled from 'styled-components';

const FavoritesPage = () => {
    const { movies, removeMovie } = useMovies();
    const RemoveButton = styled.button`
    background-color: #556b2f;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 12px;
    `
    return (
        <div>
            <h1>Favorites</h1>
            {movies.map(movie => (
                <div key={movie.Year}>
                    <img src={movie.Poster} alt={`${movie.Title} poster.`} />
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.Actors}</p>
                    <RemoveButton
                    onClick={() => removeMovie(movie.Title)}
                    >Remove</RemoveButton>
                </div>
            ))}
        </div>
    )
}

export default FavoritesPage;