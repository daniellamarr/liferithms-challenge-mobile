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
  EDIT_ACTIVITY_REQUEST,
  EDIT_ACTIVITY_ERROR,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY_REQUEST,
  DELETE_ACTIVITY_ERROR,
  DELETE_ACTIVITY,
  SIGN_OUT,
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
    case SIGN_OUT:
      return {
        ...state,
        loading: false,
        user: {},
        token: null,
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
      all.sort((a, b) => a.start_date - b.start_date);
      return {
        ...state,
        all,
        createLoading: false,
        createError: null,
      };
    case EDIT_ACTIVITY_REQUEST:
      return {
        ...state,
        editLoading: true,
        editError: null,
      };
    case EDIT_ACTIVITY_ERROR:
      return {
        ...state,
        editLoading: false,
        editError: action.payload.error,
      };
    case EDIT_ACTIVITY:
      const {editActivity, editAll} = action.payload;
      const found = editAll.findIndex(
        (edit) => edit.activityId === editActivity.activityId,
      );
      editAll[found] = editActivity;
      editAll.sort((a, b) => a.start_date - b.start_date);
      return {
        ...state,
        all: editAll,
        editLoading: false,
        editError: null,
      };
    case DELETE_ACTIVITY_REQUEST:
      return {
        ...state,
        deleteLoading: true,
        deleteError: null,
      };
    case DELETE_ACTIVITY_ERROR:
      return {
        ...state,
        deleteLoading: false,
        deleteError: action.payload.error,
      };
    case DELETE_ACTIVITY:
      const {activityId, deleteAll} = action.payload;
      const newDeleteAll = deleteAll.filter(
        (edit) => edit.activityId !== activityId,
      );
      newDeleteAll.sort((a, b) => a.start_date - b.start_date);
      return {
        ...state,
        all: newDeleteAll,
        deleteLoading: false,
        deleteError: null,
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
    case SIGN_OUT:
      return {
        ...state,
        loading: false,
        all: [],
        error: null,
      };
    default:
      return state;
  }
};
