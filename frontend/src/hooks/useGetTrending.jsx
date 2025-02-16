import { useState } from "react";
import { useContentStore } from "../store/content";
import { useEffect } from "react";
import axios from "axios";

const useGetTrending = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const {contentType}=useContentStore();

  useEffect(()=>{
    const getTrendingContent=async()=>{
        await axios.get(`/api/v1/content/trending/${contentType}`)
    }
  })
}
export default useGetTrending