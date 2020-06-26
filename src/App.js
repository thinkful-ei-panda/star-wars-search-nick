import React from 'react';
import GalacticContext from './GalacticContext'
import SearchForm from './SearchForm/SearchForm'
import Results from './Results/Results'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: '',
      bottomPane: 0
    };
  }

  getData = (category, query) => {
    fetch(`https://swapi-thinkful.herokuapp.com/api/${category}/?search=${query}`)
      .then(res => {
        if (!res.ok)
          throw new Error('Something went wrong');
        return res.json();
      })
      .then(newData => {
        const data = newData.results
        console.log(data);
        this.setState({ data, category, bottomPane: 2 });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  renderResultsList = () => {
    return (
      <Results />
    )
  }

  renderLoading = () => {
    return <p>loading...</p>
  }

  renderNothing = () => {
    return <></>
  }

  changeRenderNumber = (bottomPane) => {
    this.setState({ bottomPane });
  }

  render() {
    const value = {
      getData: this.getData,
      data: this.state.data,
      category: this.state.category,
      changeRenderNumber: this.changeRenderNumber
    };

    return (
      <div>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <main className='App center'>
          <div className="centered">
            <section>
              <h1 className="title">Star Wars Galactic Search</h1>
              <p className="subtitle">Search the Star Wars galaxy for characters, planets, vehicles and more!</p>
            </section>
            <GalacticContext.Provider value={value}>
              <SearchForm />
              {this.state.bottomPane === 0 && this.renderNothing()}
              {this.state.bottomPane === 1 && this.renderLoading()}
              {this.state.bottomPane === 2 && this.renderResultsList()}
            </GalacticContext.Provider>
          </div>
        </main>
      </div>
    );
  }
}