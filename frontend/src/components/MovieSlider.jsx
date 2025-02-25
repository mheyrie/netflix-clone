import PropTypes from "prop-types";
import { useContentStore } from "../store/content";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SMALL_IMG_BASE_URL } from "../utils/constant";


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
      <div className="flex space-x-4">
        {content.map((item)=>(
          <Link to={`/watch/${item.id}`} className="min-w-[250px] relative group" key={item.id}>
            <div className="rounded-lg overflow-hidden">
              <img src={SMALL_IMG_BASE_URL+item.backdrop_path} alt=""
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </Link>
        )
        )}
      </div>
    </div>
  );
};

MovieSlider.propTypes = {
  category: PropTypes.string.isRequired,
};
