import axios from "axios";
import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";

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
  return (
    <div>SearchHistoryPage</div>
  )
}