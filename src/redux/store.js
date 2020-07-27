import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import {authReducer, activitiesReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  auth: authReducer,
  activities: activitiesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export {store, persistor};
