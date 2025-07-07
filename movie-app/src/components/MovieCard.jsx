export default function MovieCard({ movie }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{movie.title}</h2>
                <p className="text-gray-600 text-sm mb-1">
                    🎬 <span className="font-medium">Director:</span> {movie.director}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    📁 <span className="font-medium">Genre:</span> {movie.genre}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                    🗓️ <span className="font-medium">Year:</span> {movie.year}
                </p>
            </div>
            <div className="mt-4">
                <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full">
                    ⭐ {movie.rating}/10
                </span>
            </div>
        </div>
    );
}
