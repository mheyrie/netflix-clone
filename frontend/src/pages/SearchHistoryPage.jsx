import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constant";

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
};

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
            <div
              key={entry.id}
              className="bg-gray-800 p-4 rounded flex items-start"
            >
              <img
                src={SMALL_IMG_BASE_URL + entry.image}
                alt="History Image"
                className="size-16 object-cover rounded-full mr-4"
              />
              <div className="ml-4 flex flex-col">
                <span className="text-lg font-bold">{entry.title}</span>
                <span className="text-sm">{formatDate(entry.createdAt)}</span>
              </div>
              <span
                className={`py-1 min-w-20 text-center rounded-full text-sm ml-auto ${
                  entry.searchType === "Movie"
                    ? "bg-red-400"
                    : entry.searchType === "Tv Show"
                    ? "bg-blue-600"
                    : "bg-green-600"
                }`}
              >
                {entry.searchType}
              </span>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
}
