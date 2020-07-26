import {createStore, combineReducers} from 'redux';
import {authReducer, activitiesReducer} from './reducers';

const reducers = combineReducers({
  auth: authReducer,
  activities: activitiesReducer
});

const store = createStore(reducers);

export default store;
