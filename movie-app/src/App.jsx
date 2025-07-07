import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import MovieDetail from './pages/MovieDetail';

const App = () => {
  return (
    <div className="bg-[#F8F5FF]">
      <Navbar />
      <main className="px-4 py-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route
            path="*"
            element={
              <div className="text-center text-red-600 text-2xl mt-10">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
