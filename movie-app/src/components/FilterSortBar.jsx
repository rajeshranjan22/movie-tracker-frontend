export default function FilterSortBar({ filter, setFilter, sort, setSort }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-between my-4">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded">
                {["All", "Action", "Drama", "Sci-Fi"].map((genre) => (
                    <option key={genre}>{genre}</option>
                ))}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border p-2 rounded">
                <option value="title">Sort by Title</option>
                <option value="rating">Sort by Rating</option>
            </select>
        </div>
    );
}
