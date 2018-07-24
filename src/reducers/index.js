
import { combineReducers } from 'redux';
import surveyReducer from './surveyReducer';

export default combineReducers({
    surveys: surveyReducer
});