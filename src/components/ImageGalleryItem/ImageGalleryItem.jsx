import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ searchQuery }) => {
  return searchQuery.map(({ id, webformatURL, tags }) => (
    <li key={id} className={style.imageGalleryItem}>
      <img
        className={style.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
};

ImageGalleryItem.propType = {
  searchQuery: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
