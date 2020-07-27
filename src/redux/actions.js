import aktivitiServiceClient from '../api';
import {
  SET_CURRENT_USER,
  AUTH_ERROR,
  AUTH_REQUEST,
  SET_ACTIVITIES,
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_ERROR,
} from './types';

export const setCurrentUser = ({user, token}) => ({
  type: SET_CURRENT_USER,
  payload: {
    user,
    token,
  },
});

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authError = ({error}) => ({
  type: AUTH_ERROR,
  payload: {
    error,
  },
});

export const fetchActivitiesRequest = () => ({
  type: FETCH_ACTIVITIES_REQUEST,
});

export const fetchActivitiesError = ({error}) => ({
  type: FETCH_ACTIVITIES_ERROR,
  payload: {
    error,
  },
});

export const setActivities = ({activities}) => ({
  type: SET_ACTIVITIES,
  payload: {
    activities,
  },
});

export const signUp = (token) => async (dispatch) => {
  try {
    dispatch(authRequest());
    const response = await aktivitiServiceClient({
      method: 'post',
      url: 'users/signup',
      data: {token},
    });
    if (response.status === 201 || response.status === 200) {
      const {user, token: userToken} = response.data.data;
      dispatch(setCurrentUser({user, token: userToken}));
    }
  } catch (error) {
    dispatch(authError({error}));
  }
};

export const signIn = (token) => async (dispatch) => {
  try {
    dispatch(authRequest());
    const response = await aktivitiServiceClient({
      method: 'post',
      url: 'users/signin',
      data: {token},
    });
    if (response.status === 200) {
      const {user, token: userToken} = response.data.data;
      dispatch(setCurrentUser({user, token: userToken}));
    } else {
      dispatch(authError({error: response.data}));
    }
  } catch (error) {
    dispatch(authError({error}));
  }
};

export const fetchActivities = () => async (dispatch) => {
  try {
    dispatch(fetchActivitiesRequest());
    const response = await aktivitiServiceClient({
      method: 'get',
      url: 'activities/view',
    });
    if (response.status === 200) {
      const {activities} = response.data.data;
      dispatch(setActivities({activities}));
    } else {
      dispatch(fetchActivitiesError({error: response.data}));
    }
  } catch (error) {
    dispatch(fetchActivitiesError({error}));
  }
};
