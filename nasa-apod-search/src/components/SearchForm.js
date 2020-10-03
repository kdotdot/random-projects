import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '1998',
      month: '12',
      day: '19'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchImage(this.state.year, this.state.month, this.state.day);
    // this.setState({
    //   year: '',
    //   month: '',
    //   day: ''
    // });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={formStyle}>
          <div style={blockStyle}>
            <label style={labelStyle}>Year: </label>
            <input
              style={inputStyle}
              name='year'
              type='text'
              value={this.state.year}
              onChange={this.onChange}
            />
          </div>
          <div style={blockStyle}>
            <label style={labelStyle}>Month: </label>
            <input
              style={inputStyle}
              name='month'
              type='text'
              value={this.state.month}
              onChange={this.onChange}
            />
          </div>
          <div style={blockStyle}>
            <label style={labelStyle}>Day: </label>
            <input
              style={inputStyle}
              name='day'
              type='text'
              value={this.state.day}
              onChange={this.onChange}
            />
          </div>
          <button type='submit' style={btnStyle}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const btnStyle = {
  margin: 'auto 30px',
  width: '200px',
  height: '28px',
  backgroundColor: '#000',
  borderColor: '#fff',
  color: '#fff',
  borderRadius: '20px'
};
const formStyle = {
  display: 'flex'
};

const inputStyle = {
  padding: '5px',
  color: '#4c4c4c',
  margin: '5px',
  width: '50px',
  fontSize: '16px '
};

const labelStyle = {
  margin: 'auto 10px'
};

const blockStyle = {
  display: 'flex'
};
