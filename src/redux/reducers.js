import {
  SET_CURRENT_USER,
  SET_ACTIVITIES,
  AUTH_ERROR,
  AUTH_REQUEST,
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_ERROR,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_REQUEST,
  CREATE_ACTIVITY_ERROR,
  FILTER_ACTIVITIES,
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
      const {activities} = action.payload;
      activities.sort((a, b) => a.start_date - b.start_date);
      return {
        ...state,
        all: activities,
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
    case CREATE_ACTIVITY_REQUEST:
      return {
        ...state,
        createLoading: true,
        createError: null,
      };
    case CREATE_ACTIVITY_ERROR:
      return {
        ...state,
        createLoading: false,
        createError: action.payload.error,
      };
    case CREATE_ACTIVITY:
      const {activity, all} = action.payload;
      all.push(activity);
      console.log(activity, all, 'ss');
      return {
        ...state,
        all,
        createLoading: false,
        createError: null,
      };
    case FILTER_ACTIVITIES:
      const {filterType, filterActivities} = action;
      if (filterType === 'Ascending') {
        filterActivities.sort((a, b) => a.start_date - b.start_date);
      } else {
        filterActivities.sort((a, b) => b.start_date - a.start_date);
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
