import axios from "axios";
import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";

export default function SearchHistoryPage() {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
     const getSearchHistory = async () => {
      try{
const res = await axios.get(`/api/v1/search-history`);
setSearchHistory(res.data.history); 
      }catch(error){
        console.log(error);
        setSearchHistory([]);
      }};
      getSearchHistory();
  }, []);
  return (
    <div>SearchHistoryPage</div>
  )
}