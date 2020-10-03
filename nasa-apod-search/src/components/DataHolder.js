import React, { Component } from 'react';
import Img from 'react-image';

class DataHolder extends Component {
  render() {
    return (
      <div>
        <div style={dateContainerStyle}>
          {' '}
          <span>{this.props.data.year}</span> /{' '}
          <span>{this.props.data.month}</span> /{' '}
          <span>{this.props.data.day}</span>
        </div>

        {/* <img src='{this.props.data.imgUrl}' alt='' /> */}
        {/* <img src={require(this.props.data.imgUrl)} alt='' /> */}
        <br />
        <Img src={this.props.data.imgUrl} />
        <p>{this.props.data.explanation}</p>
      </div>
    );
  }
}

const dateContainerStyle = {
  // display: 'flex'
};

export default DataHolder;
