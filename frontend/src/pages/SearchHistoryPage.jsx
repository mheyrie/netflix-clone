import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constant";

export default function SearchHistoryPage() {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    const getSearchHistory = async () => {
      try {
        const res = await axios.get(`/api/v1/search/history`);
        setSearchHistory(res.data.content);
      } catch (error) {
        console.log(error.message);
        setSearchHistory([]);
      }
    };
    getSearchHistory();
  }, []);

  if (searchHistory.length === 0) {
    return (
      <div className="min-h-screen text-white bg-black/20">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">Search History</h1>
          <div className="flex justify-center items-center h-96">
            <p className="text-xl">No search history</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Search History</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchHistory.map((entry) => (
            <div key={entry.id} className="bg-gray-800 p-4 rounded flex items-start">
              <img
                src={SMALL_IMG_BASE_URL + entry.image}
                alt="History Image"
                className="w-24 h-36 object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{entry.title}</h2>
                <p className="text-sm">{entry.year}</p>
                <p className="text-sm">{entry.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
}
