import { Component } from 'react';
import Searchbar from 'components/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return <Searchbar value={this.handleFormSubmit} />;
  }
}
