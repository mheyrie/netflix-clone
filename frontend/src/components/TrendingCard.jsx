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
  

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (movies.length === 0) return <p className="text-white">Loading...</p>; 

  return (
    <div className="w-full px-6 py-10 ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="trending-slider"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="group relative cursor-pointer">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className="w-full h-48 object-cover rounded-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-semibold">{movie.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
