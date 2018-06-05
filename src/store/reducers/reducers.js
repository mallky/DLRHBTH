import { combineReducers } from 'redux';
import appData from './data';
import app from './app';

const appReducers = combineReducers({
  appData,
  app
});

export default appReducers;