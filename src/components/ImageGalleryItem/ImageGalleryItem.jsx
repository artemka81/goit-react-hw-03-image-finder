import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ searchQuery, onClick }) => {
  return (
    <>
      <ul className={style.imageGallery}>
        {searchQuery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li key={id} className={style.imageGalleryItem}>
            <img
              className={style.imageGalleryItemImage}
              src={webformatURL}
              alt={tags}
              onClick={() => onClick({ largeImageURL, tags })}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ImageGalleryItem.propType = {
  searchQuery: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
