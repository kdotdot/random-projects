import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    //Call action
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor=''>Title: </label>
            <br />
            <input
              name='title'
              type='text'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor=''>Body: </label>
            <br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.onChange}
              // cols='85'
              // rows='10'
            />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);