import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRecommendations } from '../utils/geminiAPI';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { deleteMovie, getMovieById } from '../utils/localStorage';

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const data = getMovieById(id);
        setMovie(data);

        if (data) {
            setLoading(true);
            getRecommendations(data).then((ele) => {
                setRecommendations(ele);
                setLoading(false);
            });
        }
    }, [id]);

    if (!movie) return <p>Movie not found</p>;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Synopsis:</strong> {movie.synopsis}</p>
            <div className="flex gap-4 mt-4">
                <button onClick={() => navigate('/')} className="bg-gray-300 px-4 py-2 rounded">Back to Home</button>
                <button
                    onClick={() => {
                        deleteMovie(movie.id);
                        toast.success("Movie deleted");
                        navigate('/');
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Delete
                </button>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold"> Recommended Movies</h3>
                {loading ? <Spinner /> : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {recommendations.map((ele, index) => (
                            <div key={index} className="p-4 border rounded">
                                <p><strong>{ele.title}</strong></p>
                                <p>by {ele.director}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
