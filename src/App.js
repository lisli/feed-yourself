import React, { Component } from 'react';
import Tabletop from 'tabletop';
import logo from './logo.svg';
import './App.css';

const FOOD_URL = 'https://docs.google.com/spreadsheets/d/1czrNQfMugAcw7OyDCGwQ0v0vXrIBsuxfFCQlVDhFwLg/pubhtml';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    Tabletop.init({ 
      key: FOOD_URL,
      callback: data => this.setState({data}),
      simpleSheet: true 
    });
  }

  render() {
    const { data } = this.state;
    console.log({data});
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <pre><code>{JSON.stringify(data)}</code></pre>
      </div>
    );
  }
}

export default App;
