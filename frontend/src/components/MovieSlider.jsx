import PropTypes from "prop-types";
import { useContentStore } from "../store/content";
import { useEffect, useState } from "react";
import axios from "axios";


export const MovieSlider = ({ category }) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState([]);

  console.log("category is here:", category);

  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";
 const formattedCategoryName = category.replaceAll("_"," ")[0].toUpperCase() + category.replaceAll("_"," ").slice(1);

 useEffect(()=>{
  const getContent = async()=>{
    const res = await axios.get(`/api/v1/${contentType}/${category}`);
    setContent(res.data.content);
  }
  getContent()
 }, [category, contentType]);
  return (
    <div className="text-white bg-black relative px-5 md:px-20">
      <h2 className="">
        {formattedCategoryName} {formattedContentType}
      </h2>
    </div>
  );
};

MovieSlider.propTypes = {
  category: PropTypes.string.isRequired,
};
