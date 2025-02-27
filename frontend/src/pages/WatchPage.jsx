import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";

export default function WatchPage() {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [currentTrailerIds, setCurrentTrailerIds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [similarContent, setSimilarContent] = useState([]);
  const { contentType } = useContentStore();

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

  return (
    <div className="text-white bg-black min-h-screen">
      <div className="h-full py-8 mx-auto container px-4">
        <Navbar />

        {trailers.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <button
              className={`bg-gray-500/70 text-white hover:bg-gray-500 py-2 px-4 rounded ${
                currentTrailerIds === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
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
          {trailers.length>0&&(
            <ReactPlayer 
            controls={true}
            width={"100%"}
            height={"70vh"}
            className="rounded-lg mx-auto overflow-hidden"
            url={`https://www.youtube.com/watch?v=${trailers[currentTrailerIds].key}`}
            />
          )}
          {trailers.length === 0 && !loading && (
            <div className="text-center text-xl">No trailers available for {""}
            <span className="font-bold text-red-400">{content?.title || content?.name}</span>😒🙂‍↔️
            </div>
          )}
        </div>

        {/* Moivie Details */}
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-5xl font-bold text-balance">{content?.title || content?.name}</h2>
        </div>
      </div>
    </div>
  );
}
