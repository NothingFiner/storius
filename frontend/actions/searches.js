import { receiveErrors } from './errors';
import search from '../util/search_api';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

export const getSearchResults = query => dispatch => (
  search(query)
    .then(
      results => dispatch(receiveSearchResults(results)),
      err => dispatch(receiveErrors(err)),
    )
);
