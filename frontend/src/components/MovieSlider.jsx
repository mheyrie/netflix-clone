import PropTypes from 'prop-types';
import { useContentStore } from "../store/content";

export const MovieSlider = ({category}) => {
    console.log("category is here:", category);
    const {contentType} = useContentStore();
    const formattedContentType = contentType === "movie"?"Movies":"TV Shows"
  return (
    <div className="text-white bg-black relative px-5 md:px-20">
      <h2 className="">
        {category} {formattedContentType}
      </h2>
      {category}</div>
  )
}

MovieSlider.propTypes = {
  category: PropTypes.string.isRequired,
};