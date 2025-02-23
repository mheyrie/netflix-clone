import PropTypes from 'prop-types';

export const MovieSlider = ({category}) => {
    console.log("category is here:", category);
  return (
    <div>{category}</div>
  )
}

MovieSlider.propTypes = {
  category: PropTypes.string.isRequired,
};