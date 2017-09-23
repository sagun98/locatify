import message from './message';
import * as actions from '../types';

const meta = (state = {}, action) => {
  switch (action.type) {
    case actions.START_FETCHING_MESSAGES: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actions.RECEIVED_MESSAGES: {
      return {
        ...state,
        isFetching: false,
        lastFetched: action.receivedAt
      };
    }
    default:
      return state;
  }
};
