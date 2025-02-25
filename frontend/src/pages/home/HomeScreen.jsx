import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Info, Play } from "lucide-react";
import useGetTrending from "../../hooks/useGetTrending";
import { ORIGINAL_IMG_BASE_URL } from "../../utils/constant";
import { MOVIE_CATEGORIES, TV_CATEGORIES, useContentStore } from "../../store/content";
import { MovieSlider } from "../../components/MovieSlider";
import { useState } from "react";

export default function HomeScreen() {
  const { contentType } = useContentStore();
  const { trendingContent } = useGetTrending();
  console.log("trending content is here:", trendingContent);
  const [imgLoading, setImgLoading] = useState(true);

  if (!trendingContent)
    return (
      <div className="h-screen text-white relative">
        <Navbar />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer"></div>
      </div>
    );

  return (
    <>
      <div className=" h-screen text-white relative">
        <Navbar />
{imgLoading && <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer"/>}
        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt="hero-img"
          className="absolute left-0 top-0 w-full h-full object-cover -z-50"
        onLoad={()=>setImgLoading(false)}
        />
        <div
          className="absolute left-0 top-0 w-full h-full bg-black/50 -z-50"
          aria-hidden="true"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div className="bg-gradient-to-b from-gray-800 via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />

          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              {trendingContent?.title || trendingContent?.name}
            </h1>
            <p className="mt-2 text-lg">
              {trendingContent?.release_date?.split("-")[0] ||
                trendingContent?.first_air_date.split("-")[0]}
              {""} | {trendingContent?.adult ? "18+" : "PG-13"}
            </p>
            <p className="mt-4 text-lg">
              {trendingContent?.overview > 200
                ? trendingContent?.overview.slice(0, 200) + "..."
                : trendingContent?.overview}
            </p>
          </div>
          <div className="flex mt-8">
            <Link
              to={`/watch/${trendingContent?.id}`}
              className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded pr-4 flex items-center"
            >
              <Play className="size-6 mr-2 fill-black" />
              Play
            </Link>
            <Link
              to={`/watch/${trendingContent?.id}`}
              className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center ml-4"
            >
              <Info className="size-6 mr-2 " />
              More Info
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 bg-black py-10">
        {contentType === "movie"? (
          MOVIE_CATEGORIES.map((category) => (
            <MovieSlider key={category} category={category} />
          ))
        ):( 
          TV_CATEGORIES.map((category) => (
            <MovieSlider key={category} category={category} />
          ))
        )}
      </div>
    </>
  );
}
