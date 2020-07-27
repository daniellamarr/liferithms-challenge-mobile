import {
  SET_CURRENT_USER,
  SET_ACTIVITIES,
  AUTH_ERROR,
  AUTH_REQUEST,
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_ERROR,
} from './types';

const authInitialState = {
  user: {},
  loading: false,
  token: null,
  error: null,
};

const activitiesInitialState = {
  all: [],
  loading: false,
  error: null,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export const activitiesReducer = (state = activitiesInitialState, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        all: action.payload.activities,
        loading: false,
        error: null,
      };
    case FETCH_ACTIVITIES_REQUEST:
      return {
        ...state,
        all: [],
        loading: true,
        error: null,
      };
    case FETCH_ACTIVITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
