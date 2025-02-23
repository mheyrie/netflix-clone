import { useState, useEffect } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrending = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/trending`);
      setTrendingContent(res.data.content);
    }
    getTrendingContent();
  }, [contentType]);
  return { trendingContent };
};
export default useGetTrending;




//https://api-apps.vfdbank.systems/vfd-tech/baas-portal/v1.1/baasauth/token
// {
//   "consumerKey": "XfFfOuOoNUw5sUMfEQjrwyPnYF9b",
//   "consumerSecret": "Foc8alK8xoxiugVkYXZn86XpCrIQ",
//   "validityTime": "-1"
//  }

// https://api-apps.vfdbank.systems/vtech-wallet/api/v1/wallet2/corporateclient/create
// {
//   "rcNumber":"2886665",
//   "companyName":"Maikudi recycling hubs",
//   "incorporationDate":"15 May 2019",
//   "bvn":"22158642541"
// }