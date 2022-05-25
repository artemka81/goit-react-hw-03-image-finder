import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import style from './imageGallery.module.css';
// import PropTypes from 'prop-types';
const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '6444317-c61155bd44e68957af67120b1';

export default class ImageGallery extends Component {
  state = {
    searchQuery: null,
    loading: false,
  };
  // Делаем запрос по API при обновлении компонента
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    if (prevName !== nextName) {
      fetch(
        `${BASE_URL}q=${nextName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(searchQuery => this.setState({ searchQuery }));
    }
  }

  render() {
    return (
      <ul className={style.imageGallery}>
        {this.state.searchQuery && <ImageGalleryItem />}
      </ul>
    );
  }
}
