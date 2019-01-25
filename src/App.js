import React, { Component } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import DataHolder from './components/DataHolder';

import axios from 'axios';

class App extends Component {
  state = {
    year: '',
    month: '',
    day: '',
    explanation: '',
    imgUrl: ''
  };

  searchImage = (year, month, day) => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=X6tPkRdLTxqMSex0k1WNwOw48a75xx2NXEDa7KgV&date=' +
          year +
          '-' +
          month +
          '-' +
          day
      )
      .then(res =>
        this.setState({
          year,
          month,
          day,
          explanation: res.data.explanation,
          imgUrl: res.data.url
        })
      );
  };

  render() {
    return (
      <div className='App'>
        <SearchForm searchImage={this.searchImage} />
        <DataHolder data={this.state} />
      </div>
    );
  }
}

export default App;
