import { Component } from 'react';
import { fetchPixabay } from '../../services/pixabay-api';
import ErrorSearch from 'components/ErrorSearch';
import { Skeleton } from 'components/Skeleton';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Modal from 'components/Modal';
import { Button } from 'components/Button';

// import PropTypes from 'prop-types';

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
    showModal: false,
    modalImg: { url: null, alt: null },
  };
  // Делаем запрос по API при обновлении компонента
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      fetchPixabay(nextName)
        .then(searchQuery => {
          if (searchQuery.hits.length === 0) {
            return Promise.reject(new Error(`${nextName}`));
          }
          this.setState({ searchQuery, status: Status.RESOLVED });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  // Показываем большую картинку в модальном окне
  handleImgClick = ({ largeImageURL: url, tags: alt }) => {
    this.setState({
      modalImg: { url, alt },
    });
    this.toggleModal();
  };

  // Закрывает/открываем модальное окно
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { searchQuery, error, status, showModal, modalImg } = this.state;

    return (
      <>
        {status === Status.IDLE && <></>}
        {status === Status.PENDING && <Skeleton />}
        {status === Status.RESOLVED && (
          <>
            {showModal && (
              <Modal onClose={this.toggleModal} modalImg={modalImg} />
            )}
            <ImageGalleryItem
              searchQuery={searchQuery.hits}
              onClick={this.handleImgClick}
            />
            <Button />
          </>
        )}
        {status === Status.REJECTED && <ErrorSearch message={error.message} />}
      </>
    );
  }
}
