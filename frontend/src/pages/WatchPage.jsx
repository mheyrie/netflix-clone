import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";
import { ORIGINAL_IMG_BASE_URL, SMALL_IMG_BASE_URL } from "../utils/constant";
import WatchPageSkeleton from "../components/skeloton/WatchPageSkeleton";

function formatReleaseDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function WatchPage() {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIds, setCurrentTrailerIds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [similarContent, setSimilarContent] = useState([]);
  const { contentType } = useContentStore();
const sliderRef = useRef(null);

  useEffect(() => {
    const getTrailers = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/trailers`
        );
        setTrailers(response.data.trailers);
      } catch (error) {
        if (error.message.includes("404")) {
          setTrailers([]);
        }
      }
    };
    getTrailers();
  }, [id, contentType]);

  useEffect(() => {
    const getSimilarContent = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/similar`
        );
        setSimilarContent(response.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilarContent([]);
        }
      }
    };
    getSimilarContent();
  }, [id, contentType]);

  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const response = await axios.get(
          `/api/v1/${contentType}/${id}/details`
        );
        setContent(response.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent(null);
        }
      } finally {
        setLoading(false);
      }
    };
    getContentDetails();
  }, [id, contentType]);

  const handleNext = () => {
    if (currentTrailerIds < trailers.length - 1) {
      setCurrentTrailerIds(currentTrailerIds + 1);
    }
  };

  const handlePrev = () => {
    if (currentTrailerIds > 0) {
      setCurrentTrailerIds(currentTrailerIds - 1);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  if(loading) return (
    <div className="min-h-screen bg-black p-10">
      <WatchPageSkeleton />
    </div>
  )

  return (
    <div className="text-white bg-black min-h-screen">
      <div className="h-full py-8 mx-auto container px-4">
        <Navbar />

        {trailers.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <button
              className={`bg-gray-500/70 text-white hover:bg-gray-500 py-2 px-4 rounded ${
                currentTrailerIds === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentTrailerIds === 0}
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`bg-gray-500/70 text-white hover:bg-gray-500 py-2 px-4 rounded ${
                currentTrailerIds === trailers.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentTrailerIds === trailers.length - 1}
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
        <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
          {trailers.length > 0 && (
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              className="rounded-lg mx-auto overflow-hidden"
              url={`https://www.youtube.com/watch?v=${trailers[currentTrailerIds].key}`}
            />
          )}
          {trailers.length === 0 && !loading && (
            <div className="text-center text-xl">
              No trailers available for {""}
              <span className="font-bold text-red-400">
                {content?.title || content?.name}
              </span>
              😒🙂‍↔️
            </div>
          )}
        </div>

        {/* Moivie Details */}
       <div className="flex flex-col items-center justify-between gap-20 max-w-6xl mx-auto md:flex-row">
         <div className="mb-4 md:mb-0 ">
           <h2 className="text-5xl font-bold text-balance">
             {content?.title || content?.name}
           </h2>
           <p className="mt-2 text-lg">
             {formatReleaseDate(
               content?.release_date || content?.first_air_date
             )}{" "}
             •{""}{" "}
             {content?.adult ? (
               <span className="text-red-400">18+</span>
             ) : (
               <span className="text-green-400">PG-13</span>
             )}
           </p>
           <p className="mt-2 text-lg">{content?.overview}</p>
         </div>
         <img
           src={ORIGINAL_IMG_BASE_URL + content?.poster_path}
           alt="poster image"
           className="max-h-[600px] rounded-md"
         />
       </div>
      {/* Similar content  */}
      {similarContent.length > 0 && (
        <div className="mt-12 max-w-5xl mx-auto relative">
          <h3 className="text-3xl font-bold mb-4">Similar Movie/TV Shows</h3>
          <div className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4 group" ref={sliderRef}>
            {similarContent.map((content) => (
              <Link key={content.id} to={`/watch/${content.id}`} className="w-52 flex-none">
                <div className="relative group">
                  <img
                    src={SMALL_IMG_BASE_URL + content.poster_path}
                    alt="poster path"
                    className="w-full h-auto rounded-md"
                  />
                  <p className="mt-2 text-center text-lg">{content.title || content.name}</p>
                </div>  
              </Link>
           ) )}

            <ChevronLeft size={24} className="absolute top-1/2 -translate-y-1/2 left-2 md:left-20 flex items-center justify-center size-12 rounded-full bg-red-400 opacity-0 group-hover:opacity-75 text-white z-10 transition-all duration-300 cursor-pointer"
            onClick={scrollLeft}/>
         
              
       
            <ChevronRight size={24}   onClick={scrollRight}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-20 flex items-center justify-center size-12 rounded-full bg-red-400 opacity-0 transition-all duration-300 cursor-pointer group-hover:opacity-75 text-white z-10"/>
         
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
