import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
    showModal: true,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </>
    );
  }
}
