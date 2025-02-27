import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  console.log("Trailers", trailers);
  console.log("Similar", similarContent);
  console.log("Content", content);

  return (
    <div className="text-white bg-black min-h-screen">
      <div className="h-full py-8 mx-auto container px-4">
        <Navbar />

        {trailers.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <button
            className={`bg-gray-500/70 text-white hover:bg-gray-500 py-2 px-4 rounded ${
              currentTrailerIds === 0 ? "cursor-not-allowed bg-opacity-30" : ""
            }`}
              disabled={currentTrailerIds === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={`bg-gray-500/70 text-white hover:bg-gray-500 py-2 px-4 rounded ${
                currentTrailerIds === trailers.length-1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={currentTrailerIds === trailers.length-1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
