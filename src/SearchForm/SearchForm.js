import React from 'react';
import GalacticContext from '../GalacticContext'

export default class SearchForm extends React.Component {
  static contextType = GalacticContext;

  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      category: 'people'
    };
  }

  searchChanged(search) {
    this.setState({
      searchField: search
    })
  }

  categoryChanged(category) {
    this.setState({
      category
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.getData(this.state.category, this.state.searchField);
    this.context.changeRenderNumber(1);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="search">
          <label htmlFor="categroy-select" />
          <select
            id="categroy-select"
            name="categroy-select"
            onChange={e => this.categoryChanged(e.target.value)}
          >
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
          <label htmlFor="search-field" />
          <input
            type="text"
            name="search-field"
            id="search-field"
            className="searchTerm"
            placeholder="Type search here"
            value={this.state.searchField}
            onChange={e => this.searchChanged(e.target.value)}
          />
          <button className="searchButton" type="submit">
            Search
              </button>
        </div>
      </form>
    );
  }
}