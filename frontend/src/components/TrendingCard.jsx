import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

export default function TrendingCard() {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  if (movies.length === 0) return <p className="text-white">Loading...</p>;

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-white text-2xl font-bold mb-4">Trending Now</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          480: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
        navigation
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={movie.id} className="group relative cursor-pointer">
                 <div className="relative">
              <span className="absolute bottom-0 left-[-10px]
               text-black text-9xl font-bold px-3 py-1 rounded-full z-10 shadow-md"  style={{
                WebkitTextStroke: "2px white", 
                textStroke: "4px white",
              }}>
                {index + 1}
              </span>

              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-46 object-cover rounded-md transition-transform transform group-hover:scale-105"
              />
            </div>

            {/* Movie Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-semibold text-center">
                {movie.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
