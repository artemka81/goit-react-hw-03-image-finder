// import PropTypes from 'prop-types';
import style from './imageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={style.imageGalleryItem}>
      <img className={style.imageGalleryItemImage} src={src} alt={alt} />
    </li>
  );
};
