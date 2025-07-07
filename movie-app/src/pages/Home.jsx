import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import FilterSortBar from '../components/FilterSortBar';
import { Link } from 'react-router-dom';
import { getMovies } from '../utils/localStorage';

function Home() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('title');

    useEffect(() => {
        const all = getMovies();
        setMovies(all);
    }, []);

    const filtered = movies
        .filter(m => filter === 'All' || m.genre === filter)
        .sort((a, b) => sort === 'title' ? a.title.localeCompare(b.title) : b.rating - a.rating);

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4"> Movie Tracker</h1>
            <FilterSortBar
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
            />
            <Link to="/add" className="mb-4 inline-block text-blue-600 underline">+ Add Movie</Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Home;