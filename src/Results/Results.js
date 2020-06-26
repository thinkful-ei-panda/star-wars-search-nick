import React from 'react';
import GalacticContext from '../GalacticContext'

export default class SearchForm extends React.Component {
  static contextType = GalacticContext;

  formatList() {
    const cat = this.context.category;
    if (this.context.data.length === 0)
      return <li>No results for this search</li>

    if (cat === 'films')
      return this.displayTitles();
    return this.displayNames();
  }

  displayTitles() {
    if (this.context.data.length === 0)
      return <li>No results for this search</li>

    const titles = this.context.data.map((item, idx) => {
      return <li key={idx}>{item.title}</li>
    })
    return titles;
  }

  displayNames() {
    const names = this.context.data.map((item, idx) => {
      return <li key={idx}>{item.name}</li>
    })
    return names;
  }

  render() {
    return (
      <ul className="results-list">
        {this.formatList()}
      </ul>
    );
  }
}