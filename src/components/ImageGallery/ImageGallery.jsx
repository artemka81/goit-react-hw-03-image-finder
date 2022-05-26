import FailSearch from 'components/FailSearch';
import Skeleton from 'components/Skeleton';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import style from './imageGallery.module.css';
// import PropTypes from 'prop-types';
const BASE_URL = 'https://pixabay.com/api/?';
const KEY = '6444317-c61155bd44e68957af67120b1';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    status: Status.IDLE,
    searchQuery: null,
    error: null,
  };
  // Делаем запрос по API при обновлении компонента
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      setTimeout(() => {
        fetch(
          `${BASE_URL}q=${nextName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(searchQuery => {
            if (searchQuery.hits.length === 0) {
              return Promise.reject(new Error(`${nextName}`));
            }
            this.setState({ searchQuery, status: Status.RESOLVED });
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 5000);
    }
  }

  render() {
    const { searchQuery, error, status } = this.state;

    return (
      <>
        {status === Status.REJECTED && <FailSearch message={error.message} />}
        {status === Status.IDLE && <></>}
        <ul className={style.imageGallery}>
          {status === Status.PENDING && <Skeleton />}
          {status === Status.RESOLVED && (
            <ImageGalleryItem
              src={searchQuery.hits[0].webformatURL}
              alr={searchQuery.hits[0].tags}
            />
          )}
        </ul>
      </>
    );
  }
}
