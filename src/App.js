import React from 'react';
import SearchForm from './SearchForm/SearchForm'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  getData(category, query) {
    fetch(`https://swapi-thinkful.herokuapp.com/api/${category}/?search=${query}`)
      .then(res => {
        if (!res.ok)
          throw new Error('Something went wrong');
        return res.json();
      })
      .then(data => )
  }

  render() {
    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <main className='App center'>
          <section className="centered">
            <h1 className="title">Star Wars Galactic Search</h1>
            <p className="subtitle">Search the Star Wars galaxy for characters, planets, vehicles and more!</p>
          </section>
          <SearchForm />
        </main>
      </div>
    );
  }
}