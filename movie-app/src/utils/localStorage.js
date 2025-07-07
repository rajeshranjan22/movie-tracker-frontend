export const getMovies = () => JSON.parse(localStorage.getItem('movies')) || [];

export const saveMovies = (movies) => {
    localStorage.setItem('movies', JSON.stringify(movies));
};

export const getMovieById = (id) => {
    const movies = getMovies();
    return movies.find(movie => movie.id === id);
};

export const deleteMovie = (id) => {
    const updated = getMovies().filter(movie => movie.id !== id);
    saveMovies(updated);
    return updated;
};
