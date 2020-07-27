import aktivitiServiceClient from '../api';
import {
  SET_CURRENT_USER,
  AUTH_ERROR,
  AUTH_REQUEST,
  SET_ACTIVITIES,
  FETCH_ACTIVITIES_REQUEST,
  FETCH_ACTIVITIES_ERROR,
  CREATE_ACTIVITY,
  CREATE_ACTIVITY_REQUEST,
  CREATE_ACTIVITY_ERROR,
  FILTER_ACTIVITIES,
  EDIT_ACTIVITY_REQUEST,
  EDIT_ACTIVITY_ERROR,
  EDIT_ACTIVITY,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_ERROR,
  DELETE_ACTIVITY_REQUEST,
  SIGN_OUT,
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

export const setSignOut = () => ({
  type: SIGN_OUT,
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

export const setNewActivity = ({activity, all}) => ({
  type: CREATE_ACTIVITY,
  payload: {
    activity,
    all,
  },
});

export const newActivityRequest = () => ({
  type: CREATE_ACTIVITY_REQUEST,
});

export const newActivityError = ({error}) => ({
  type: CREATE_ACTIVITY_ERROR,
  payload: {
    error,
  },
});

export const editActivityRequest = () => ({
  type: EDIT_ACTIVITY_REQUEST,
});

export const editActivityError = ({error}) => ({
  type: EDIT_ACTIVITY_ERROR,
  payload: {
    error,
  },
});

export const setEditActivity = ({activity, editAll}) => ({
  type: EDIT_ACTIVITY,
  payload: {
    editActivity: activity,
    editAll,
  },
});

export const deleteActivityRequest = () => ({
  type: DELETE_ACTIVITY_REQUEST,
});

export const deleteActivityError = ({error}) => ({
  type: DELETE_ACTIVITY_ERROR,
  payload: {
    error,
  },
});

export const setDeleteActivity = ({activityId, deleteAll}) => ({
  type: DELETE_ACTIVITY,
  payload: {
    activityId,
    deleteAll,
  },
});

export const setFilterActivities = (filterType, all) => ({
  type: FILTER_ACTIVITIES,
  filterType,
  filterActivities: all,
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

export const signOut = () => async (dispatch) => {
  dispatch(setSignOut());
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

export const createActivity = (data) => async (dispatch, getState) => {
  try {
    dispatch(newActivityRequest());
    const response = await aktivitiServiceClient({
      method: 'post',
      url: 'activities/create',
      data,
    });
    if (response.status === 201) {
      const {activity} = response.data.data;
      const {activities} = getState();
      dispatch(setNewActivity({activity, all: activities.all}));
    } else {
      dispatch(newActivityError({error: response.data}));
    }
  } catch (error) {
    dispatch(newActivityError({error}));
  }
};

export const editActivity = (data, activityId) => async (
  dispatch,
  getState,
) => {
  try {
    dispatch(editActivityRequest());
    const response = await aktivitiServiceClient({
      method: 'put',
      url: `activities/edit/${activityId}`,
      data,
    });
    if (response.status === 200) {
      const {activity} = response.data.data;
      const {activities} = getState();
      dispatch(setEditActivity({activity, editAll: activities.all}));
    } else {
      dispatch(editActivityError({error: response.data}));
    }
  } catch (error) {
    dispatch(editActivityError({error}));
  }
};

export const deleteActivity = (activityId) => async (dispatch, getState) => {
  try {
    dispatch(deleteActivityRequest());
    const response = await aktivitiServiceClient({
      method: 'put',
      url: `activities/delete/${activityId}`,
    });
    if (response.status === 200) {
      const {activities} = getState();
      dispatch(setDeleteActivity({activityId, deleteAll: activities.all}));
    } else {
      dispatch(deleteActivityError({error: response.data}));
    }
  } catch (error) {
    dispatch(deleteActivityError({error}));
  }
};

export const filterActivities = (filter) => (dispatch, getState) => {
  const {activities} = getState();
  dispatch(setFilterActivities(filter, activities.all));
};
