import { FETCH_POSTS, NEW_POST } from './types';

import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=100').then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  );
};

export const createPost = postData => dispatch => {
  axios
    .post('https://jsonplaceholder.typicode.com/posts', postData)
    //this.setState({ posts: res.data }
    .then(res =>
      dispatch({
        type: NEW_POST,
        payload: res.data
      })
    );
};
