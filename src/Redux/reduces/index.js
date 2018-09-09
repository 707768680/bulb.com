import { combineReducers } from 'redux';
import reducer from './reducer.js';

export default combineReducers({
    posts:reducer
})