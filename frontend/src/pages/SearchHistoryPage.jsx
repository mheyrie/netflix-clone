import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function SearchHistoryPage() {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
     const getSearchHistory = async () => {
      try{
const res = await axios.get(`/api/v1/search/history`);
setSearchHistory(res.data.content); 
      }catch(error){
        console.log(error.message);
        setSearchHistory([]);
      }};
      getSearchHistory();
  }, []);

  if(searchHistory.length === 0){
    return(
      <div className="min-h-screen text-white bg-black/20">
        <Navbar/>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Search History</h1>
          <div className="flex justify-center items-center h-96">
            <p className="text-xl">No search history</p>
          </div>
                 </div>
      </div>  )}
}