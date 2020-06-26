import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <body>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <main className='App center'>
          <section className="centered">
            <h1 className="title">Star Wars Galactic Search</h1>
            <p className="subtitle">Search the starwars galaxy for characters, planets, vehicles and more!</p>
          </section>

          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="search-field">

            </div>
          </form>
        </main>
      </body>
    );
  }
}