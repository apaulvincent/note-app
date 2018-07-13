import { FETCH_NOTES } from './types';

export const fetchNotes = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(notes =>
      dispatch({
        type: FETCH_NOTES,
        payload: notes
      })
    );
};