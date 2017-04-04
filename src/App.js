import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const FOOD_URL = 'https://spreadsheets.google.com/feeds/list/1czrNQfMugAcw7OyDCGwQ0v0vXrIBsuxfFCQlVDhFwLg/od6/public/values?alt=json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch(FOOD_URL)
      .then(response => response.json())
      .then(json => {
        this.setState({data: json});
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
