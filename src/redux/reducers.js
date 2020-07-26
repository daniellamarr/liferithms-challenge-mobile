import {SET_CURRENT_USER, SET_ACTIVITIES} from './types';

const authInitialState = {
  user: {}
};

const activitiesInitialState = {
  all: []
}

export const authReducer = (state = authInitialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export const activitiesReducer = (state = activitiesInitialState, action) => {
  switch(action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        all: action.activities
      }
    default:
      return state;
  }
}
