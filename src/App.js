import React, { Component } from 'react';
import Tabletop from 'tabletop';
import logo from './logo.svg';
import './App.css';

const FOOD_URL = 'https://docs.google.com/spreadsheets/d/1czrNQfMugAcw7OyDCGwQ0v0vXrIBsuxfFCQlVDhFwLg/pubhtml';

const displayItem = item => {
  if (item.link) {
    return (
      <a href={item.link} target="_blank">{item.food}</a>
    );
  }
  return item.food;
};

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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {data && data.map((item, index) => (
            <li key={index}>
              {displayItem(item)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
