import { useState } from "react";
import { useContentStore } from "../store/content";
import { useEffect } from "react";
import axios from "axios";
import { response } from "express";

const useGetTrending = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      await axios.get(`/api/v1/${contentType}/trending`);
      setTrendingContent(response.data.content);
      
    };getTrendingContent()
  }, [contentType]);
  return {trendingContent}
};
export default useGetTrending;
