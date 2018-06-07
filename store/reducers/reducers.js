import { combineReducers } from 'redux';
import data from './data';
import app from './app';

const appReducers = combineReducers({
  data,
  app
});

export default appReducers;