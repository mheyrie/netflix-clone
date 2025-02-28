import { useState } from "react";
import { useContentStore } from "../store/content";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState("movie");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const { setContentType } = useContentStore();

  const handleTabClick=(tab)=>{
setActiveTab(tab);
tab === "movie" ? setContentType("movie") : setContentType("tv");
setResults([])	
  }
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-3 mb-4">
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "movie" ? "bg-red-500" : "bg-gray-800"
            } hover:bg-red-700`} onClick={()=>handleTabClick("movie")}
          >
            Movies
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "tv" ? "bg-red-500" : "bg-gray-800"
            } hover:bg-red-700`} onClick={()=>handleTabClick("tv")}
          >
            TV Shows
          </button>
          <button
            className={`py-2 px-4 rounded ${
              activeTab === "person" ? "bg-red-500" : "bg-gray-800"
            } hover:bg-red-700`} onClick={()=>handleTabClick("person")}
          >
            Person
          </button>
        </div>
      </div>
    </div>
  );
}
